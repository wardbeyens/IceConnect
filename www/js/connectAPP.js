$(function () {
    document.addEventListener("deviceready", onDeviceReady, false);
    var persoonID;

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