$(function () {
    document.addEventListener("deviceready", onDeviceReady, false);
    var persoonID;

    $(function(){
        $('#ChangeTheme').click(function(){
            var iteration=$(this).data('iteration')||1
            switch ( iteration) {
                case 1:
                    document.querySelector('#theme').setAttribute('href', "css/onsen-css-theme-dark/onsen-css-components.min.css");
                    break;
                case 2:
                    document.querySelector('#theme').setAttribute('href', "css/onsen-css-theme-light/onsen-css-components.min.css");
                    break;
            }
            iteration++;
            if (iteration>2) iteration=1
            $(this).data('iteration',iteration)
        })
    })


    window.logout=function() {
// hier moet het persoon ID nog null worden
    fn.load('login.html')
    };

});

function onDeviceReady() {
    console.log('Device is ready');
    console.log(navigator.vibrate);
    // navigator.vibrate(100);
}