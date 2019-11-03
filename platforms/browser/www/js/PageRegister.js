$('#registerInputPassword, #registerInputPasswordConfirm').on('keyup', function () {
    if ($('#registerInputPassword').val() == $('#registerInputPasswordConfirm').val()) {
        $('#passwordCheck').html('Matching').css('color', 'green');
        $('.login_btn').css('background-color', 'green');
    } else {
        $('#passwordCheck').html('Not Matching').css('color', 'red');
        $('.login_btn').css('background-color', '#c0392b');
    }
});


$('#registerSend').click(function () {
    function validateForm() {
        var isValid = true;
        $('#register :input').each(function () {
            if ($(this).val() === '')
                isValid = false;
        });
        return isValid;
    }

    if (validateForm() === true) {
        let pars = {
            voornaam: $('#registerInputFirstName').val(),
            achternaam: $('#registerInputLastName').val(),
            email: $('#registerInputEmail').val(),
            wachtwoord: $('#registerInputPasswordConfirm').val()
        };
        var showConfirm = function () {
            ons.notification.confirm('Do you want to send this data?' +
                'First name: ' + $('#registerInputFirstName').val() +
                'Last name: ' + $('#registerInputLastName').val() +
                'Email: ' + $('#registerInputEmail').val() +
                'Password: '+ $('#registerInputPasswordConfirm').val()
            )
        };
        showConfirm()
        console.log(pars);
                $.post('http://wabyte.com/register.php', pars, function (respons) {
                    console.log(respons);
                    alert("U bent geregistreerd!\n" +
                        'First name: ' + $('#registerInputFirstName').val() +
                        'Last name: ' + $('#registerInputLastName').val() +
                        'Email: ' + $('#registerInputEmail').val() +
                        'Password: '+ $('#registerInputPasswordConfirm').val());

                    let pars2 = {
                        email: $('#registerInputEmail').val(),
                        wachtwoord: $('#registerInputPasswordConfirm').val()
                    };
                    console.log(pars2);
                    $.post('http://wabyte.com/loginPost.php', pars2, function (respons) {
                        console.log(respons);
                        var loginPersoonID = respons.persoonID;
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


                });
    } else {
        ons.notification.alert("Please fill in all fields!");
    }

});