var server_url = 'https://api.dashingsoft.com';
var order_id = null;
var invoice_id = null;

function showMessage( msg ) {
    document.querySelector( '.popup-message .modal-body p' ).innerHTML = msg;
    $( '.popup-message' ).modal( 'show' );
}

function queryInvoice( invoice_id ) {
    var url = server_url + '/products/invoices/' + invoice_id;
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
    document.querySelector( 'input[name="post_name"]' ).value = invoice.post_name;
    document.querySelector( 'input[name="post_phone"]' ).value = invoice.post_phone;
    document.querySelector( 'input[name="post_code"]' ).value = invoice.post_code;
    document.querySelector( 'input[name="post_address"]' ).value = invoice.post_address;

    setInvoiceState( invoice );

}

function setInvoiceState( invoice ) {
    var state = invoice.state;
    document.querySelector( '.invoice-state' ).innerHTML = state === 0 ? '新增' : state === 1 ? '正在开票' :
        state === 2 ? '已经出票' : state === 3 ? '已经寄出' : state === 4 ? '收到发票' : '未知状态(' + state + ')';
    if ( state > 0 ) {
        document.querySelector( 'input[name="tax_no"]' ).setAttribute( 'disabled', true );
        document.querySelector( 'input[name="tax_name"]' ).setAttribute( 'disabled', true );
        document.querySelector( 'input[name="tax_phone"]' ).setAttribute( 'disabled', true );
        document.querySelector( 'input[name="tax_address"]' ).setAttribute( 'disabled', true );
    }
    if ( state > 2 ) {
        document.querySelector( 'input[name="post_name"]' ).setAttribute( 'disabled', true );
        document.querySelector( 'input[name="post_phone"]' ).setAttribute( 'disabled', true );
        document.querySelector( 'input[name="post_code"]' ).setAttribute( 'disabled', true );
        document.querySelector( 'input[name="post_address"]' ).setAttribute( 'disabled', true );
        document.querySelector( '.invoice-remark' ).innerHTML = invoice.remark;
    }
}

function queryOrder( orderno, callback, onerror ) {
    var url = server_url + '/product/order/' + orderno + '/query';
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
    request.open( 'GET', url, true );
    request.responseType = 'json';
    request.send();
}

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
        document.querySelector( 'input[name="tax"]' ).removeAttribute("disabled");
        document.querySelector( '.new-order' ).style.display = '';
        document.querySelector( '.renew-order' ).style.display = 'none';
        window.localStorage.removeItem( 'CACHED_PURCHASE_NO' );
    }
    else {
        document.querySelector( 'input[name="tax"]' ).setAttribute("disabled", true);
        document.querySelector( '.new-order' ).style.display = 'none';
        document.querySelector( '.renew-order' ).style.display = '';
        window.localStorage.setItem( 'CACHED_PURCHASE_NO', purchase_no );
    }
}

function getPurchaseNo() {
    var purchase_no = window.localStorage.getItem( 'CACHED_PURCHASE_NO' );
    if ( ! purchase_no ) {
        var a = new Date();
        var m = a.getMonth() + 1,
            d = a.getDate(),
            h = a.getHours(),
            i = a.getMinutes(),
            s = a.getSeconds();
        var c = Math.floor( 99 * Math.random() );
        purchase_no = 'DS'
            + a.getFullYear()
            + ( m < 10 ? '0' + m : m.toString() )
            + ( d < 10 ? '0' + d : d.toString() )
            + ( h < 10 ? '0' + h : h.toString() )
            + ( i < 10 ? '0' + i : i.toString() )
            + ( s < 10 ? '0' + s : s.toString() )
            + '.' + ( c < 10 ? '0' + c : c.toString() );
    }
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
    var purchase_no = getPurchaseNo();
    var data =  [
        'PURCHASE_ID=' + purchase_no ,
        'RUNNING_NO=1',
        'PRODUCT_ID=300871197',
        'CURRENCY=CNY',
        'PRICE=266.00',
        'QUANTITY=1',
        'REG_NAME='+ encodeURIComponent( name ),
        'EMAIL=' + encodeURIComponent( email ),
        'COUNTRY=China',
        'LANGUAGE_ID=15',
        'ADD[LICENSE_TYPE]=' + document.querySelector( 'select[name="license_type"]' ).value,
    ].join( '&' );

    var request = new XMLHttpRequest();

    request.onerror = function () {
        showMessage( '提交订单失败' );
    };

    request.onload = function() {

        if ( request.status !== 200 ) {
            showMessage( '创建订单失败: ' + request.responseText );
            return;
        }

        var order = JSON.parse( request.responseText );
        setPurchaseNo( purchase_no );
        setOrderState( order );

    };

    try {
        request.open( 'POST', url, true );
        request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        request.send( data );
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
    document.querySelector( '.order-info-state' ).innerHTML = state === null ? '' :
        state === 'FIN' ? '注册文件已经发送' : '正在处理';
}

function renewOrder() {
    setOrderState();
    setPurchaseNo();
}

function refreshOrder() {
    var order_no = document.querySelector( '.order-info-no' ).innerHTML;
    if ( order_no ) {
        queryOrder( order_no, function ( order ) {
            setOrderState( order );
        } );
    }
}

function setProductTax( e ) {
    var tax = e.currentTarget.checked;
    document.querySelector( '.product-tax' ).innerHTML = tax ? '30.00 元' : '0 元';
    document.querySelector( '.product-amount' ).innerHTML = tax ? '296.00 元' : '266.00 元';
    document.querySelector( '.popup-weixin-payment img' ).src = tax ? 'weixin-296.jpg' : 'weixin-266.jpg';
    document.querySelector( '.popup-alipay-payment img' ).src = tax ? 'alipay-296.jpg' : 'alipay-266.jpg';
    document.querySelector( '.invoice-page' ).style.display = tax ? '' : 'none';
}

function submitInvoice( action, invoice_id ) {
    if ( ! order_id ) {
        showMessage( '请首先提交订单，然后才能提交发票信息' );
        return;
    }
    var name_list = [ 'tax_no', 'tax_name', 'tax_phone', 'tax_address',
                      'bank_account', 'bank_name', 'bank_site',
                      'post_name', 'post_phone', 'post_code', 'post_address' ];
    for ( var name in name_list ) {
        var element = document.querySelector( 'input[name="' + name + '"]' );
        if ( ! element.value ) {
            element.focus();
            return false;
        }
    }

    var url = server_url + '/product/invoices/';
    var data =  {
        order: order_id,
    };
    if ( invoice_id )
        data.id = invoice_id;
    for ( var name in name_list )
        data[ name ] = document.querySelector( 'input[name="' + name + '"]' ).value;

    var request = new XMLHttpRequest();

    request.onerror = function () {
        showMessage( '提交发票信息失败' );
    };

    request.onload = function() {

        if ( request.status !== 200 ) {
            showMessage( '修改发票信息失败: ' + request.responseText );
            return;
        }
        var invoice = JSON.parse( request.responseText );
        invoice_id = invoice.id;
        setInvoiceState( invoice );
        document.querySelector( '.new-invoice' ).style.display = 'none';
        document.querySelector( '.update-invoice' ).style.display = '';
        window.localStorage.setItem( 'CACHED_INVOICE_ID', invoice_id );
    };

    try {
        request.open( action, url, true );
        request.setRequestHeader('Content-Type', 'application/json');
        request.send( data );
    }
    catch ( err ) {
        showMessage( '提交发票信息失败:' + err );
    }
}

function newInvoice() {
    submitInvoice( 'POST' );
}

function updateInvoice() {
    submitInvoice( 'PUT', invoice_id );
}

window.addEventListener( 'load', function () {

    document.querySelector( '.new-order' ).addEventListener( 'click', newOrder, false );
    document.querySelector( '.renew-order' ).addEventListener( 'click', renewOrder, false );
    document.querySelector( '.refresh-order' ).addEventListener( 'click', refreshOrder, false );
    document.querySelector( 'input[name="tax"]' ).addEventListener( 'change', setProductTax, false );
    document.querySelector( '.new-invoice' ).addEventListener( 'click', newInvoice, false );
    document.querySelector( '.update-invoice' ).addEventListener( 'click', updateInvoice, false );

    Array.prototype.forEach.call( document.querySelectorAll( 'input[name="inlineRadioOptions"]' ), function ( radio ) {
        radio.addEventListener( 'click', function ( e ) {
            Array.prototype.forEach.call( document.querySelectorAll( '.payment-way' ), function ( element ) {
                element.style.display = 'none';
            } );
            document.querySelector( '#payment-' + e.currentTarget.value ).style.display = '';
        } );
    } );

    console.log('get purchase no ' + getPurchaseNo());

    var purchase_no = window.localStorage.getItem( 'CACHED_PURCHASE_NO' );
    if ( purchase_no ) {
        setPurchaseNo( purchase_no );
        queryOrder( purchase_no,
                    function ( order ) {
                        document.querySelector( 'input[name="reg_name"]' ).value = order.customer.name;
                        document.querySelector( 'input[name="email"]' ).value = order.customer.email;
                        document.querySelector( 'select[name="license_type"]' ).value = order.license_type;
                        if ( order.price > 268 ) {
                            document.querySelector( 'input[name="tax"]' ).checked = true;
                        }
                        setOrderState( order );
                    },
                    function () {
                        console.log( 'Query order failed' );
                    } );
    }

    invoice_id = window.localStorage.getItem( 'CACHED_INVOICE_ID' );
    if ( invoice_id ) {
        queryInvoice( invoice_id );
    }

}, false );
