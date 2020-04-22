var server_url = ( location.protocol === 'file:' ) ? 'http://test-api.dashingsoft.com' : 'https://api.dashingsoft.com';
var order_id = null;
var invoice_id = null;

function showMessage( msg ) {
    document.querySelector( '.popup-message .modal-body p' ).innerHTML = msg;
    $( '.popup-message' ).modal( 'show' );
}

function showLoader() {
    document.querySelector( 'div.loader' ).style.display = '';
}

function hideLoader() {
    document.querySelector( 'div.loader' ).style.display = 'none';
}

function queryInvoice( invoice_id ) {
    var url = server_url + '/product/invoices/' + invoice_id + '/';
    var request = new XMLHttpRequest();
    request.onload = function() {
        if ( request.status != 200 ) {
            console.log( 'Query invoice failed: ' + request.status );
        }
        else {
            setInvoiceInfo( request.response );
            document.querySelector( '.new-invoice' ).style.display = 'none';
            document.querySelector( '.update-invoice' ).style.display = '';
        }
    };
    request.open( 'GET', url, true );
    request.responseType = 'json';
    request.send();
}

function setInvoiceInfo( invoice ) {
    document.querySelector( 'input[name="tax_no"]' ).value = invoice.tax_no;
    document.querySelector( 'input[name="tax_name"]' ).value = invoice.tax_name;
    document.querySelector( 'input[name="tax_phone"]' ).value = invoice.tax_phone;
    document.querySelector( 'input[name="tax_address"]' ).value = invoice.tax_address;
    document.querySelector( 'input[name="bank_account"]' ).value = invoice.bank_account;
    document.querySelector( 'input[name="bank_name"]' ).value = invoice.bank_name;
    document.querySelector( 'input[name="bank_site"]' ).value = invoice.bank_site;
    document.querySelector( 'input[name="post_name"]' ).value = invoice.post_name;
    document.querySelector( 'input[name="post_phone"]' ).value = invoice.post_phone;
    document.querySelector( 'input[name="post_code"]' ).value = invoice.post_code;
    document.querySelector( 'input[name="post_address"]' ).value = invoice.post_address;

    setInvoiceState( invoice );
}

function setInvoiceState( invoice ) {
    var state = invoice.state;
    document.querySelector( '.invoice-state' ).innerHTML = state === 0 ? '新增' :
        state === 1 ? '正在开票' :
        state === 2 ? '已经出票' :
        state === 3 ? '发票已经寄出' :
        state === 4 ? '发票已经签收' : '未知状态(' + state + ')';
    if ( state > 0 ) {
        document.querySelector( 'input[name="tax_no"]' ).setAttribute( 'disabled', true );
        document.querySelector( 'input[name="tax_name"]' ).setAttribute( 'disabled', true );
        document.querySelector( 'input[name="tax_phone"]' ).setAttribute( 'disabled', true );
        document.querySelector( 'input[name="tax_address"]' ).setAttribute( 'disabled', true );
        document.querySelector( 'input[name="bank_name"]' ).setAttribute( 'disabled', true );
        document.querySelector( 'input[name="bank_account"]' ).setAttribute( 'disabled', true );
        document.querySelector( 'input[name="bank_site"]' ).setAttribute( 'disabled', true );
        document.querySelector( '.invoice-remark' ).innerHTML = invoice.remark;
    }
    if ( state > 2 ) {
        document.querySelector( 'input[name="post_name"]' ).setAttribute( 'disabled', true );
        document.querySelector( 'input[name="post_phone"]' ).setAttribute( 'disabled', true );
        document.querySelector( 'input[name="post_code"]' ).setAttribute( 'disabled', true );
        document.querySelector( 'input[name="post_address"]' ).setAttribute( 'disabled', true );
    }
}

function queryOrder( orderid, callback, onerror ) {
    var url = server_url + '/product/orders/' + orderid + '/';
    var request = new XMLHttpRequest();
    request.onload = function() {
        if ( request.status != 200 ) {
            console.log( 'Query order failed: ' + request.status );
            if ( typeof onerror === 'function' )
                onerror();
        }
        else {
            callback( request.response );
        }
    };
    try {
        request.open( 'GET', url, true );
        request.responseType = 'json';
        request.send();
    }
    catch ( err ) {
        console.log( '查询订单失败: ' + err );
    }
}

function setOrderInfo( order ) {
    document.querySelector( 'input[name="reg_name"]' ).value = order.customer.name;
    document.querySelector( 'input[name="email"]' ).value = order.customer.email;
    document.querySelector( 'select[name="license_type"]' ).value = order.license_type;
    if ( order.price > 268 ) {
        document.querySelector( 'input[name="tax"]' ).checked = true;
        setProductTax();
    }
    setOrderState( order );
}

// Unused function
function setPurchaseNo( purchase_no ) {
    Array.prototype.forEach.call( document.querySelectorAll( '.order-field' ), function ( element ) {
        if ( ! purchase_no ) {
            element.removeAttribute("disabled");
        }
        else {
            element.setAttribute("disabled", true);
        }
    } );
    if ( ! purchase_no ) {
        // document.querySelector( 'input[name="tax"]' ).removeAttribute("disabled");
        document.querySelector( '.new-order' ).style.display = '';
        document.querySelector( '.renew-order' ).style.display = 'none';
    }
    else {
        // document.querySelector( 'input[name="tax"]' ).setAttribute("disabled", true);
        document.querySelector( '.new-order' ).style.display = 'none';
        document.querySelector( '.renew-order' ).style.display = '';
    }
}

function makePurchaseNo() {
    var a = new Date();
    var m = a.getMonth() + 1,
        d = a.getDate(),
        h = a.getHours(),
        i = a.getMinutes(),
        s = a.getSeconds();
    var c = Math.floor( 99 * Math.random() );
    var purchase_no = 'DS'
        + a.getFullYear()
        + ( m < 10 ? '0' + m : m.toString() )
        + ( d < 10 ? '0' + d : d.toString() )
        + ( h < 10 ? '0' + h : h.toString() )
        + ( i < 10 ? '0' + i : i.toString() )
        + ( s < 10 ? '0' + s : s.toString() )
        + '.' + ( c < 10 ? '0' + c : c.toString() );
    return purchase_no;
}

function newOrder() {
    var element = document.querySelector( 'input[name="reg_name"]' );
    var name = element.value;
    if ( ! name ) {
        element.focus();
        return false;
    }

    element = document.querySelector( 'input[name="email"]' );
    var email = element.value;
    if ( ! email ) {
        element.focus();
        return false;
    }

    var url = server_url + '/product/order/add';
    var purchase_no = makePurchaseNo();
    var data =  [
        'PURCHASE_ID=' + purchase_no ,
        'RUNNING_NO=1',
        'PRODUCT_ID=300871197',
        'CURRENCY=CNY',
        'PRICE=' + (document.querySelector( 'input[name="tax"]' ).checked ? '296.00' : '266.00'),
        'QUANTITY=1',
        'REG_NAME='+ encodeURIComponent( name ),
        'EMAIL=' + encodeURIComponent( email ),
        'COUNTRY=China',
        'LANGUAGE_ID=15',
        'ADD[LICENSE_TYPE]=' + document.querySelector( 'select[name="license_type"]' ).value,
    ].join( '&' );

    var request = new XMLHttpRequest();

    request.onerror = function () {
        hideLoader();
        showMessage( '提交订单失败' );
    };

    request.onload = function() {

        hideLoader();

        if ( request.status !== 200 ) {
            showMessage( '创建订单失败: ' + request.responseText );
            return;
        }

        var order = JSON.parse( request.responseText );
        setOrderState( order );
        order_id = order.id;
        window.localStorage.setItem( 'CACHED_ORDER_ID', order.id );
    };

    try {
        request.open( 'POST', url, true );
        request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        request.send( data );
        showLoader();
    }
    catch ( err ) {
        showMessage( '提交订单失败:' + err );
    }
}

function setOrderState( order ) {
    var order_no = order === undefined ? '' : order.order_no;
    var state = order === undefined ? null : order.state;
    order_id = order === undefined ? null : order.id;
    document.querySelector( '.order-info-no' ).innerHTML = order_no;
    document.querySelector( '.order-info-state' ).innerHTML = state === null ? ''
        : state === 'FIN' ? '注册文件已经发送'
        : state === 'NEW' ? '正在处理'
        : state === 'PAD' ? '已经支付'
        : state === 'UNF' ? '已经取消'
        : state;

    Array.prototype.forEach.call(
        document.querySelectorAll( 'div.payment-way button.btn-success' ), function ( element ) {
            // order_id === null
            //     ? element.setAttribute("disabled", true)
            //     : element.removeAttribute("disabled");
        }
    );

    Array.prototype.forEach.call(
        document.querySelectorAll( '.order-field' ), function ( element ) {
            order_id === null
                ? element.removeAttribute("disabled")
                : element.setAttribute("disabled", true);
        }
    );
    if ( order_id === null ) {
        // document.querySelector( 'input[name="tax"]' ).removeAttribute("disabled");
        document.querySelector( '.new-order' ).style.display = '';
        document.querySelector( '.renew-order' ).style.display = 'none';
        document.querySelector( '.refresh-order' ).style.display = 'none';
    }
    else {
        // document.querySelector( 'input[name="tax"]' ).setAttribute("disabled", true);
        document.querySelector( '.new-order' ).style.display = 'none';
        document.querySelector( '.renew-order' ).style.display = '';
        document.querySelector( '.refresh-order' ).style.display = '';
    }
}

function renewOrder() {
    setOrderState();
    document.querySelector( '.new-invoice' ).style.display = '';
    document.querySelector( '.update-invoice' ).style.display = 'none';
    document.querySelector( '.invoice-state' ).innerHTML = '';
    document.querySelector( '.invoice-remark' ).innerHTML = '';
    order_id = null;
    invoice_id = null;
    window.localStorage.removeItem( 'CACHED_ORDER_ID' );
    window.localStorage.removeItem( 'CACHED_INVOICE_ID' );
}

function refreshOrder() {
    // var order_no = document.querySelector( '.order-info-no' ).innerHTML;
    if ( order_id ) {
        queryOrder( order_id, function ( order ) {
            setOrderState( order );
        } );
    }
}

function setProductTax() {
    var tax = document.querySelector( 'input[name="tax"]' ).checked;
    document.querySelector( '.product-tax' ).innerHTML = tax ? '30.00 元' : '0 元';
    document.querySelector( '.product-amount' ).innerHTML = tax ? '296.00 元' : '266.00 元';
    document.querySelector( '.popup-weixin-payment img' ).src = tax ? 'weixin-296.jpg' : 'weixin-266.jpg';
    document.querySelector( '.popup-alipay-payment img' ).src = tax ? 'alipay-296.jpg' : 'alipay-266.jpg';
    document.querySelector( '.invoice-page' ).style.display = tax ? '' : 'none';
}

function submitInvoice() {
    if ( ! order_id ) {
        showMessage( '请首先提交订单，然后才能提交发票信息' );
        return;
    }
    var name_list = [ 'tax_no', 'tax_name', 'tax_phone', 'tax_address',
                      'bank_account', 'bank_name', 'bank_site',
                      'post_name', 'post_phone', 'post_code', 'post_address' ];
    for ( var i = 0 ; i < name_list.length; i ++ ) {
        var name = name_list[ i ];
        var element = document.querySelector( 'input[name="' + name + '"]' );
        if ( ! element.value ) {
            element.focus();
            return false;
        }
    }

    var url = server_url + '/product/invoices/' + (invoice_id ? invoice_id + '/' : '');

    // var data =  {
    //     order: order_id,
    // };
    // for ( var i = 0 ; i < name_list.length; i ++ ) {
    //     var name = name_list[ i ];
    //     data[ name ] = document.querySelector( 'input[name="' + name + '"]' ).value;
    // }

    var data = [
        'order=' + order_id,
    ];
    for ( var i = 0 ; i < name_list.length; i ++ ) {
        var name = name_list[ i ];
        var value = document.querySelector( 'input[name="' + name + '"]' ).value;
        data.push( name + '=' + encodeURIComponent( value ) );
    }
    data = data.join( '&' );

    var request = new XMLHttpRequest();
    var prompt = invoice_id ? '修改发票信息失败' : '提交发票信息失败';

    request.onerror = function () {
        hideLoader();
        showMessage( prompt );
    };

    request.onload = function() {

        hideLoader();

        if ( request.status === 200 || request.status === 201 ) {
            var invoice = JSON.parse( request.responseText );
            setInvoiceState( invoice );
            if ( ! invoice_id ) {
                invoice_id = invoice.id;
                window.localStorage.setItem( 'CACHED_INVOICE_ID', invoice_id );
                document.querySelector( '.new-invoice' ).style.display = 'none';
                document.querySelector( '.update-invoice' ).style.display = '';
            }
            else
                showMessage( '发票信息已经成功更新' );
        }
        else {
            showMessage( prompt + ': ' + request.responseText );
        }

    };

    try {
        request.open( invoice_id ? 'PUT' : 'POST', url, true );
        // request.setRequestHeader( 'Content-Type', 'application/json' );
        // request.send( JSON.stringify( data ) );
        request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        request.send( data );
        showLoader();
    }
    catch ( err ) {
        showMessage( prompt + ': ' + err );
    }
}

window.addEventListener( 'load', function () {

    document.querySelector( '.new-order' ).addEventListener( 'click', newOrder, false );
    document.querySelector( '.renew-order' ).addEventListener( 'click', renewOrder, false );
    document.querySelector( '.refresh-order' ).addEventListener( 'click', refreshOrder, false );
    document.querySelector( 'input[name="tax"]' ).addEventListener( 'change', setProductTax, false );
    document.querySelector( '.new-invoice' ).addEventListener( 'click', submitInvoice, false );
    document.querySelector( '.update-invoice' ).addEventListener( 'click', submitInvoice, false );

    Array.prototype.forEach.call( document.querySelectorAll( 'input[name="inlineRadioOptions"]' ), function ( radio ) {
        radio.addEventListener( 'click', function ( e ) {
            Array.prototype.forEach.call( document.querySelectorAll( '.payment-way' ), function ( element ) {
                element.style.display = 'none';
            } );
            document.querySelector( '#payment-' + e.currentTarget.value ).style.display = '';
        } );
    } );

    order_id = window.localStorage.getItem( 'CACHED_ORDER_ID' );
    if ( order_id ) {
        queryOrder( order_id, setOrderInfo );
    }

    invoice_id = window.localStorage.getItem( 'CACHED_INVOICE_ID' );
    if ( invoice_id ) {
        queryInvoice( invoice_id );
    }

}, false );
