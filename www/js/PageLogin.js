window.login = function login() {
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
        $.post('https://wabyte.com/loginPost.php', pars, function (respons) {
            console.log(respons);
            //console.log(respons["persoonID"]);
            //console.log(respons.persoonID);
            loginPersoonID = respons.persoonID;
            persoonID = loginPersoonID;
            // $('.loginPersoonID').text(loginPersoonID);
            var loginVoornaam = respons.voornaam;
            // $('.loginVoornaam').text(loginVoornaam);
            var loginAchternaam = respons.achternaam;
            // $('.loginAchternaam').text(loginAchternaam);
            var loginEmail = respons.email;
            // $('.loginEmail').text(loginEmail);
            var loginWachtwoord = respons.wachtwoord;
            // $('.loginWachtwoord').text(loginWachtwoord);
            console.log("respons: " + loginPersoonID, loginVoornaam, loginAchternaam, loginEmail, loginWachtwoord);

            if (Number.isInteger(parseInt(persoonID))) {

                if (document.querySelector('ons-checkbox').checked === true) {
                    localStorage.setItem("checkbox", "true");
                    let emailencrypted = $("#loginInputEmail").val();
                    let passwdencrypted = $("#loginInputPassword").val();
                    // console.log(passwdencrypted + " ==> " + btoa(passwdencrypted));
                    localStorage.setItem(btoa("email"), btoa(emailencrypted));
                    localStorage.setItem(btoa("password"), btoa(passwdencrypted));
                    console.log("set localStorage: checkbox, true ==> add data to local storage")
                } else if (document.querySelector('ons-checkbox').checked === false) {
                    localStorage.setItem("checkbox", "false");
                    localStorage.removeItem(btoa("email"));
                    localStorage.removeItem(btoa("password"));
                    console.log("set localStorage: checkbox, false ==> remove data from local storage")
                }
                ;
                navigator.vibrate(500);
                document.getElementById('content').load('home.html');
                play()
            }
        });
        // document.getElementById('content').load('login.html');

    } else {
        alert("Please fill in all fields!")
    }
};

$('#loginSend').click(function () {
    login()
});

$('#gotoRegister').click(function () {
    document.getElementById('content').load('register.html');
});

$('#passwordReset').click(function () {
    ons.notification.alert(messageHTML = "<p>Please contact me: <a href=\"mailto:wardbeyens99@gmail.com\">wardbeyens99@gmail.com</a> </p>");
    console.log(persoonID)
});

$('#passwordremember-2').click(function () {
    console.log("you clicked the checkbox!")
    if (document.querySelector('ons-checkbox').checked === true) {
        localStorage.setItem("checkbox", "true");
        let emailencrypted = $("#loginInputEmail").val();
        let passwdencrypted = $("#loginInputPassword").val();
        // console.log(passwdencrypted + " ==> " + btoa(passwdencrypted));
        localStorage.setItem(btoa("email"), btoa(emailencrypted));
        localStorage.setItem(btoa("password"), btoa(passwdencrypted));
        console.log("set localStorage: checkbox, true ==> add data to local storage")
    } else if (document.querySelector('ons-checkbox').checked === false) {
        localStorage.setItem("checkbox", "false");
        localStorage.removeItem(btoa("email"));
        localStorage.removeItem(btoa("password"));
        console.log("set localStorage: checkbox, false ==> remove data from local storage")
    }
});

if (localStorage.getItem("checkbox") === "true") {
    //set chexbox on
    let emailencrypted = $("#loginInputEmail").val();
    let passwdencrypted = $("#loginInputPassword").val();
    if ((emailencrypted != "") && (passwdencrypted != "") || ((localStorage.getItem(btoa("email")) != null) && localStorage.getItem(btoa("password")))) {

        $("#loginInputEmail").val(atob(localStorage.getItem(btoa("email"))));
        $("#loginInputPassword").val(atob(localStorage.getItem(btoa("password"))));
        $("#passwordremember-2").prop('checked', true);
        console.log("checkbox MUST BE checked by now!");
        console.log("get localstorage: checkbox, " + localStorage.getItem("checkbox"));
    } else {
        localStorage.setItem("checkbox", "false");
    }
}

if (localStorage.getItem("checkbox") === "false") {
    console.log("localstorage checkbox was false");
    localStorage.setItem("checkbox", "false");
    console.log("set localStorage: checkbox, false")
}

