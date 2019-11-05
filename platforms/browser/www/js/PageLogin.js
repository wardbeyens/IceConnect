$('#loginSend').click(function (message) {
    function validateForm() {
        var isValid = true;
        $('.loginDivInput :input').each(function () {
            if ($(this).val() === '')
                isValid = false;
        });
        return isValid;
    }

    if (validateForm() === true) {

        let pars = {
            email: $('#loginInputEmail').val(),
            wachtwoord: $('#loginInputPassword').val()
        };
        console.log(pars);
        $.post('http://wabyte.com/loginPost.php', pars, function (respons) {
            console.log(respons);
            //console.log(respons["persoonID"]);
            //console.log(respons.persoonID);
            loginPersoonID = respons.persoonID;
            persoonID = loginPersoonID;
            $('.loginPersoonID').text(loginPersoonID);
            var loginVoornaam = respons.voornaam;
            $('.loginVoornaam').text(loginVoornaam);
            var loginAchternaam = respons.achternaam;
            $('.loginAchternaam').text(loginAchternaam);
            var loginEmail = respons.email;
            $('.loginEmail').text(loginEmail);
            var loginWachtwoord = respons.wachtwoord;
            $('.loginWachtwoord').text(loginWachtwoord);
            console.log(loginPersoonID, loginVoornaam, loginAchternaam, loginEmail, loginWachtwoord);
            navigator.vibrate(500);
        });

        document.getElementById('content').load('home.html');


    } else {
        alert("Please fill in all fields")
    }
});

$('#gotoRegister').click(function () {
    document.getElementById('content').load('register.html');
});

$('#passwordReset').click(function () {
    ons.notification.alert(messageHTML = "<p>Please contact me: <a href=\"mailto:wardbeyens99@gmail.com\">wardbeyens99@gmail.com</a> </p>");
    console.log(persoonID)
});

//hier alles om wachtwoord
/*    var passwdremember = $('#passwordremember').valueOf();
    console.log(passwdremember);
    let GetPasswordFromLocalStorage = function () {
        let passwordfromlocal = localStorage.getItem('password');
        return passwordfromlocal
    };

    let SetPasswordToLocalStorage = function (password) {
        console.log('wachtwoord in local storage plaatsen!');
        localStorage.setItem('password', password);  // localStorage.setItem('key', 'value')
    };
    $('#login').onload = function () {
        console.log(passwdremember);
        alert(passwdremember);
        console.log("de eerste pagina is geladen!")
    };
    console.log(navigator.vibrate);*/

//kijken of er local storage is:
/*if ((localStorage.getItem("checkbox") === null) || localStorage.getItem("checkbox") === "false") {
    $('passwordremember-2').click(function () {
        if
    })
}*/

$('#passwordremember-2').click(function () {
    console.log("you clicked the checkbox!")
    if (document.querySelector('ons-checkbox').checked === true) {
        localStorage.setItem("checkbox", "true");
        console.log("set localStorage: checkbox, true")
    } else if (document.querySelector('ons-checkbox').checked === false) {
        localStorage.setItem("checkbox", "false");
        console.log("set localStorage: checkbox, false")
    }
});

if (localStorage.getItem("checkbox") === "true"){
    //set chexbox on
    $("#passwordremember-2").prop('checked', true);
    console.log("checkbox MUST BE checked by now!");
    console.log("get localstorage: checkbox, " + localStorage.getItem("checkbox"));
}

if (localStorage.getItem("checkbox") === "false") {
    console.log("localstorage checkbox was false");
    localStorage.setItem("checkbox", "false");
    console.log("set localStorage: checkbox, false")
}
;

