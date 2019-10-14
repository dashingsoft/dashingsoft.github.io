function queryOrder(orderno, callback, onerror) {
    var url = 'https://api.dashingsoft.com/product/order/' + orderno + '/query';
    var request = new XMLHttpRequest();
    request.onload = function() {
        if (request.status != 200) {
            console.log( 'Query order failed: ' + request.status );
            if ( typeof onerror === 'function' )
                onerror();
        }
        else {
            callback(request.response);
        }
    };
    request.open('GET', url, true);
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
        document.querySelector( '.new-order' ).style.display = '';
        document.querySelector( '.renew-order' ).style.display = 'none';
        window.localStorage.removeItem( 'CACHED_PURCHASE_NO' );
    }
    else {
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

    var url = 'https://api.dashingsoft.com/product/order/add';
    var purchase_no = getPurchaseNo();
    var data =  [
        'PURCHASE_ID=' + purchase_no ,
        'RUNNING_NO=1',
        'PRODUCT_ID=300871197',
        'QUANTITY=1',
        'REG_NAME='+ encodeURIComponent( name ),
        'EMAIL=' + encodeURIComponent( email ),
        'COUNTRY=China',
        'ISO_CODE=ZH',
        'ADD[LICENSE_TYPE]=' + document.querySelector( 'select[name="license_type"]' ).value,
    ].join( '&' );

    var request = new XMLHttpRequest();

    request.onerror = function () {
        alert( '提交订单失败' );
    };

    request.onload = function() {

        if ( request.status !== 200 ) {
            alert( '创建订单失败: ' + request.responseText );
            return;
        }

        var order = JSON.parse( request.responseText );
        setPurchaseNo( purchase_no );
        setOrderState( order.order_no, order.state );

    };

    try {
        request.open( 'POST', url, true );
        request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        request.send( data );
    }
    catch ( err ) {
        alert( '提交订单失败:' + err );
    }
}

function setOrderState( order_no, state ) {
    document.querySelector( '.order-info-no' ).innerHTML = order_no ? order_no : '';
    document.querySelector( '.order-info-state' ).innerHTML = state === undefined ? '' :
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
            setOrderState( order.order_no, order.state );
        } );
    }
}

window.addEventListener( 'load', function () {

    document.querySelector( '.new-order' ).addEventListener( 'click', newOrder, false );
    document.querySelector( '.renew-order' ).addEventListener( 'click', renewOrder, false );
    document.querySelector( '.refresh-order' ).addEventListener( 'click', refreshOrder, false );

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
        var order_no = purchase_no;

        setPurchaseNo( purchase_no );
        queryOrder( order_no,
                    function ( order ) {
                        document.querySelector( 'input[name="reg_name"]' ).value = order.customer.name;
                        document.querySelector( 'input[name="email"]' ).value = order.customer.email;
                        document.querySelector( 'select[name="license_type"]' ).value = order.license_type;
                        setOrderState( order.order_no, order.state );
                    },
                    function () {
                        console.log( 'Query order failed' );
                    } );
    }

}, false );
