function logPyarmorOrder( payment ) {

    // var base_url ='order-log.html';
    var base_url = 'http://snsoffice.com:8081/ifuture/log-order';

    var queryString = [ 'payment=' + payment ];

    var element = document.querySelector( '#input-name' );
    var value = element.value;
    if ( ! value ) {
        element.focus();
        return false;
    }
    queryString.push( 'name=' + encodeURIComponent(value) );

    element = document.querySelector( '#input-email' );
    value = element.value;
    if ( ! value ) {
        element.focus();
        return false;
    }
    queryString.push( 'email=' + encodeURIComponent(value) );

    var request = new XMLHttpRequest();

    request.onload = function() {

        if (request.status != 200) {
            console.log( 'Log pyarmor order failed' );
            return;
        }

        console.log( queryString.join( '&' ) );

    };

    var url = base_url + '?' + queryString.join( '&' );
    request.open('GET', url, true);
    request.responseType = 'json';
    request.send();
    return true;
}

function copyAlipayAccount() {

    var data = 'zhaojunde1976@163.com';
    var handler = function ( e ) {
        e.clipboardData.setData( 'text/plain', data );
        e.preventDefault();
    };

    var options = { once: true };
    document.addEventListener( 'copy', handler, options );
    if ( document.execCommand( 'copy' ) )
        document.querySelector( 'div.popup-alipay-payment div.alert' ).innerHTML = '账号已经复制到剪贴板';
    else
        document.querySelector( 'div.popup-alipay-payment div.alert' ).innerHTML = '账号复制失败，请重新拷贝';
    document.removeEventListener( 'copy', handler, options );

}

window.addEventListener( 'load', function () {

    Array.prototype.forEach.call( document.querySelectorAll( 'input[name="inlineRadioOptions"]' ), function ( radio ) {
        radio.addEventListener( 'click', function ( e ) {
            Array.prototype.forEach.call( document.querySelectorAll( '.payment-way' ), function ( element ) {
                element.style.display = 'none';
            } );
            document.querySelector( '#payment-' + e.currentTarget.value ).style.display = '';
        } );
    } );


    document.querySelector( '.weixin-payment-link' ).addEventListener( 'click', function ( e ) {
        if ( ! logPyarmorOrder( 'weixin' ) ) {
            e.stopPropagation();
        }
    }, false );

    document.querySelector( '.alipay-payment-link' ).addEventListener( 'click', function ( e ) {
        if ( ! logPyarmorOrder( 'alipay' ) ) {
            e.stopPropagation();
        }
        copyAlipayAccount();
    }, false );

} );
