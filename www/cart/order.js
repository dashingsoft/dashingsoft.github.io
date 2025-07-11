var server_url = ( location.protocol === 'file:' ) ? 'http://test-api.dashingsoft.com' : 'https://api.dashingsoft.com';
var order_id = null;
var invoice_id = null;
var old_order_id = null;

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

function queryInvoice( invoice ) {
    var url = server_url + '/product/invoices/' + invoice + '/';
    var request = new XMLHttpRequest();
    request.onload = function() {
        if ( request.status != 200 ) {
            invoice_id = null;
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
    var price = parseInt(order.price);
    document.querySelector( 'input[name="reg_name"]' ).value = order.customer.name;
    document.querySelector( 'input[name="email"]' ).value = order.customer.email;
    document.querySelector( 'select[name="license_type"]' ).value = order.license_type;
    document.querySelector( 'input[name="license_product"]' ).value = order.license_product;
    if (price == 359 ||  price == 360 || price == 562 || price == 918 || price == 968) {
        document.querySelector( 'input[name="tax"]' ).checked = true;
    }
    setProductTax();
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
    var license_type = document.querySelector( 'select[name="license_type"]' ).value;
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

    var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if ( ! emailPattern.test( email ) ) {
        element.focus();
        return false;
    }

    if ( email === 'pyarmor@163.com' ) {
        element.value = '';
        element.focus();
        return false;
    }

    if ( license_type === 'G' ) {
        var pubemails = [
            '@qq.', '@163.', '@126.', '@139.',
            '@sohu.', '@sina.', '@foxmail.',
            '@gmail.', '@outlook.', '@hotmail.',
            '@icloud.', '@yahoo.', '@google.',
            '@proton.me', '@protonmail.com',
        ]
        if (pubemails.some((x) => email.indexOf(x) > 0)) {
            element.value = '必须是公司邮箱';
            element.focus();
            return false;
        }
    }


    element = document.querySelector( 'input[name="license_product"]' );
    var license_product = element.value;
    // if ( license_type === 'B' && ! license_product ) {
    //     element.focus();
    //     return false;
    // }

    var url = server_url + '/product/order/add';
    var purchase_no = makePurchaseNo();
    var price = document.querySelector( 'input[name="tax"]' ).checked
        ? ( license_type == 'S' ? '360.00' : license_type == 'Z' ? '562.00' : license_type == 'G' ? '918.00' : license_type == 'C' ? '569.00' : '359.00')
        : ( license_type == 'S' ? '300.00' : license_type == 'Z' ? '512.00' : license_type == 'G' ? '868.00' : license_type == 'C' ? '520.00' : '298.00');
    var product_id = license_type == 'J' ? '301044049' :
        license_type == 'Z' ? '301044050' : license_type == 'S' ? '301044055' :
        license_type == 'G' ? '301056000' : license_type == 'C' ? '301134677' : '300871197';
    var license_product = product_id === '300871197' ? document.querySelector( 'input[name="license_product"]' ).value : '';

    var cached_id = window.localStorage.getItem( 'CACHED_ORDER_ID' );
    var data =  [
        'REFORDER_ID=' + (old_order_id ? old_order_id : (cached_id ? cached_id : '')),
        'PURCHASE_ID=' + purchase_no ,
        'RUNNING_NO=1',
        'PRODUCT_ID=' + product_id,
        'CURRENCY=CNY',
        'PRICE=' + price,
        'QUANTITY=1',
        'REG_NAME='+ encodeURIComponent( name ),
        'EMAIL=' + encodeURIComponent( email ),
        'COUNTRY=China',
        'LANGUAGE_ID=15',
        'ADD[LICENSE_TYPE]=' + license_type,
        'ADD[LICENSE_PRODUCT]=' + license_product,
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
        document.querySelector( 'select[name="license_type"]' ).removeAttribute("disabled");
        document.querySelector( 'input[name="tax"]' ).removeAttribute("disabled");
        document.querySelector( '.new-order' ).style.display = '';
        document.querySelector( '.renew-order' ).style.display = 'none';
        document.querySelector( '.refresh-order' ).style.display = 'none';
    }
    else {
        document.querySelector( 'select[name="license_type"]' ).setAttribute("disabled", true);
        document.querySelector( 'input[name="tax"]' ).setAttribute("disabled", true);
        document.querySelector( '.new-order' ).style.display = 'none';
        document.querySelector( '.renew-order' ).style.display = '';
        document.querySelector( '.refresh-order' ).style.display = '';
    }
}

function renewOrder() {
    old_order_id = order_id;

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

function checkOrder( e ) {
    var lic = document.querySelector( 'select[name="license_type"]' ).value;
    var tax = document.querySelector( 'input[name="tax"]' ).checked;

    if ( order_id === null ) {
        alert( '当前订单还没有提交，请点击提交订单按钮，然后在进行支付' );
        e.preventDefault();
        e.stopPropagation();
    }

    else if ((lic == 'G' || lic == 'C' || tax) && ! invoice_id) {
        alert( '公司信息还没有提交，请填写公司信息并点击提交公司信息按钮，然后在进行支付' );
        e.preventDefault();
        e.stopPropagation();
    }
}

function setPaymentAmount() {
    var lic = document.querySelector( 'select[name="license_type"]' ).value;
    var tax = document.querySelector( 'input[name="tax"]' ).checked;
    var price = tax ? (lic == 'Z' ? '562' : lic == 'G' ? '918' : lic == 'C' ? '569' : '359') :
        (lic == 'Z' ? '512' : lic == 'G' ? '868' : lic == 'C' ? '520' : '298');

    document.querySelector( '.popup-weixin-payment img' ).src = 'weixin-' + price + '.jpg';
    document.querySelector( '.popup-alipay-payment img' ).src = 'alipay-' + price + '.jpg';
    document.getElementById('transfer-amount').innerHTML = price + '元';
    document.querySelector( '.weixin-payment-link' ).innerHTML = '微信扫码支付 ' + price + '元';
    document.querySelector( '.alipay-payment-link' ).innerHTML = '支付宝扫码支付 ' + price + '元'
}

function setProductTax() {
    var tax = document.querySelector( 'input[name="tax"]' ).checked;
    document.querySelector( '.invoice-button' ).innerHTML = tax ? '(有电子发票)' : '(无发票)';
    // document.querySelector( '.invoice-page' ).style.display = tax ? '' : 'none';
    setPaymentAmount();
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
    var prompt = invoice_id ? '修改公司信息失败' : '提交公司信息失败';

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
                showMessage( '公司信息已经成功更新' );
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
    document.querySelector( '.new-invoice' ).addEventListener( 'click', submitInvoice, false );
    document.querySelector( '.update-invoice' ).addEventListener( 'click', submitInvoice, false );
    document.querySelector( '.weixin-payment-link' ).addEventListener( 'click', checkOrder, false );
    document.querySelector( '.alipay-payment-link' ).addEventListener( 'click', checkOrder, false );
    document.querySelector( 'input[name="tax"]' ).addEventListener( 'change', setProductTax, false );
    document.querySelector( 'select[name="license_type"]' ).addEventListener( 'change', setPaymentAmount, false );

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
        queryOrder( order_id, setOrderInfo, function () {
            order_id = null;
        } );
    }

    invoice_id = window.localStorage.getItem( 'CACHED_INVOICE_ID' );
    if ( order_id && invoice_id ) {
        queryInvoice( invoice_id );
    }
    else
        invoice_id = null;

}, false );
