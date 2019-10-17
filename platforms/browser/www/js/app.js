// alles wat met lay out te maken heeft
$(function () {
    document.addEventListener("deviceready", onDeviceReady, false);

    $("#menu-toggle").click(function (e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });
    $("#sidebar-wrapper a").click(function (e) {
        $("#wrapper").toggleClass("toggled");
        $('.displayvariable').hide();
        $($(this).data('show')).show();
    });
});

function onDeviceReady() {
    console.log('Device is ready');
}
