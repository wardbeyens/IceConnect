$(function () {
    document.addEventListener("deviceready", onDeviceReady, false);
});

function onDeviceReady() {
    console.log('Device is ready');
    console.log(navigator.vibrate);
    // navigator.vibrate(100);
}