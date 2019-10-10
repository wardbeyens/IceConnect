// alles wat met lay out te maken heeft
$(function(){
    document.addEventListener("deviceready", onDeviceReady, false);
    $('.sidenav').sidenav();


    // sidenav
    $('.sidenav a').click(function () {
        $('.spa').hide();
        $('#' + $(this).data('show')).show();
        $('.sidenav').sidenav('close');
    });

    $('#startCompass').click(function () {
        Compass.start();
    })

    $('#stopCompass').click(function () {
        Compass.stop();
    })

});

function onDeviceReady() {
    console.log('Device is ready');
    Device.init();
    Network.init();
    Compass.init();
};
