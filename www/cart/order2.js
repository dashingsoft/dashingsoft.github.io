function queryOrder(orderno, callback, onerror) {
    var url = 'https://api.dashingsoft.com/product/order/' + orderno + '/query';
    var request = new XMLHttpRequest();
    request.onload = function() {
        if (request.status != 200) {
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
        var m = a.getMonth(),
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
    console.log( 'purchase_no is ' + purchase_no );
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
    var data = {
        'PURCHASED_ID': purchase_no,
        'RUNNING_NO': 1,
        'PRODUCT_ID': '300871197',
        'QUANTITY': 1,
        'REG_NAME': name,
        'EMAIL': email,
        'LICENSE_TYPE': document.querySelector( 'input[name="license_type"]' ).value,
    };

    var request = new XMLHttpRequest();

    request.onerror = function () {
        alert( '提交订单失败' );
    };

    request.onload = function() {

        if ( request.status !== 200 ) {
            alert( '创建订单失败: ' + request.responseText );
            return;
        }

        setPurchaseNo( purchase_no );
        setOrderState( purchase_no );

    };

    request.open( 'POST', url, true );
    // request.send( JSON.stringify( data ) );
    request.send( data );
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
        queryOrder( order_no,
                    function ( order ) {
                        setOrderState( order.order_no, order.state );
                    },
                    function () {
                    } );
    }
}

window.addEventListener( 'load', function () {

    document.querySelector( '.new-order' ).addEventListener( 'click', newOrder, false );
    document.querySelector( '.renew-order' ).addEventListener( 'click', renewOrder, false );
    document.querySelector( '.refresh-order' ).addEventListener( 'click', refreshOrder, false );

    var purchase_no = window.localStorage.getItem( 'CACHED_PURCHASE_NO' );
    if ( purchase_no ) {
        setPurchaseNo( purchase_no );
        queryOrder( order_no,
                    function ( order ) {
                        document.querySelector( 'input[name="reg_name"]' ).value = order.cursomer.name;
                        document.querySelector( 'input[name="email"]' ).value = order.cursomer.email;
                        document.querySelector( 'input[name="license_type"]' ).value = order.license_type;
                        setOrderState( order.order_no, order.state );
                    },
                    function () {
                    } );
    }

}, false );
