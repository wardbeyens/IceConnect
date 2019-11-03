$('#loginSend').click(function (message) {
    function validateForm() {
        var isValid = true;
        $('.loginDivInput :input').each(function() {
            if ( $(this).val() === '' )
                isValid = false;
        });
        return isValid;
    }

    if (validateForm() === true){

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