$(function () {
    document.addEventListener("deviceready", onDeviceReady, false);
    var persoonID;

    window.fn = {};

    window.fn.open = function () {
        var menu = document.getElementById('menu');
        menu.open();
    };

    window.fn.load = function (page) {
        var content = document.getElementById('content');
        var menu = document.getElementById('menu');
        content.load(page).then(menu.close.bind(menu));
        navigator.vibrate(500);
    };


/*    $(function changetheme() {
        $('#ChangeTheme').click(function () {
            var iteration = $(this).data('iteration') || 1
            switch (iteration) {
                case 1:
                    document.querySelector('#theme').setAttribute('href', "css/onsen-css-theme-dark/onsen-css-components.css");
                    document.querySelector('#themeImg').setAttribute('src', "img/IceConnect990829.svg");
                    break;
                case 2:
                    document.querySelector('#theme').setAttribute('href', "css/onsen-css-theme-light/onsen-css-components.css");
                    document.querySelector('#themeImg').setAttribute('src', "img/IceConnect990829.svg");
                    break;
            }
            iteration++;
            if (iteration > 2) iteration = 1
            $(this).data('iteration', iteration)
        })
    })

    $(function volumezoom() {
        $('#VolumeZoom').click(function () {
            var iteration = $(this).data('iteration') || 1
            switch (iteration) {
                case 1:
                    //do something
                    document.addEventListener("volumedownbutton", onVolumeDownKeyDown, false);
                    document.addEventListener("volumeupbutton", onVolumeUpKeyDown, false);
                    break;
                case 2:
                    //do something
                    document.addEventListener("volumedownbutton");
                    document.addEventListener("volumeupbutton");
                    break;
            }
            iteration++;
            if (iteration > 2) iteration = 1
            $(this).data('iteration', iteration)
        })
    })*/


    window.logout = function () {
// hier moet het persoon ID nog null worden
        fn.load('login.html');
    };

});

function play(){
    var audio = document.getElementById("audio");
    audio.play();
    console.log("audio");
}

function onDeviceReady() {
    console.log('Device is ready');
    // console.log(navigator.vibrate);
    // navigator.vibrate(100);
    console.log("onDeviceReady -> checkboxState: '" + document.querySelector('ons-checkbox').checked + "'");
    console.log("getLocalStorageItemCheckbox: " + localStorage.getItem("checkbox"));

    if (localStorage.getItem("checkbox") === "true") {
        //set chexbox on
        $("#passwordremember-2").prop('checked', true);
        $("#loginInputEmail").val(atob(localStorage.getItem(btoa("email"))));
        $("#loginInputPassword").val(atob(localStorage.getItem(btoa("password"))));
        console.log("checkbox MUST BE checked by now!");
        console.log("get localstorage: checkbox, " + localStorage.getItem("checkbox"));
    }

    if (localStorage.getItem("checkbox") === null) {
        console.log("localstorage checkbox was empty!");
        localStorage.setItem("checkbox", "false");
        console.log("set localStorage: checkbox, false")
    }
    ;

    console.log("onDeviceReady AFTER CHECKING LOCAL STORAGE -> checkboxState: '" + document.querySelector('ons-checkbox').checked + "'");

    window.login();

}

