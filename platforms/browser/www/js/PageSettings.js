function theme() {
    var iteration = $(this).data('iteration') || 1
    switch (iteration) {
        case 1:
            document.querySelector('#theme').setAttribute('href', "css/onsen-css-theme-dark/onsen-css-components.css");
            document.querySelector('#themeImg').setAttribute('src', "img/IceConnect990829.svg");
            localStorage.setItem("ChangeTheme", "1");
            break;
        case 2:
            document.querySelector('#theme').setAttribute('href', "css/onsen-css-theme-light/onsen-css-components.css");
            document.querySelector('#themeImg').setAttribute('src', "img/IceConnect990829.svg");
            localStorage.setItem("ChangeTheme", "2");
            break;
    }
    iteration++;
    if (iteration > 2) iteration = 1
    $(this).data('iteration', iteration)
}

$(function changetheme() {
    $('#ChangeTheme').click(function () {
        theme()
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
})

var showPrompt = function () {
    ons.notification.prompt({
        title: 'Prompt!',
        message:  'Enter you command'
    })
        .then(function (input) {
            eval(input);
        });
};