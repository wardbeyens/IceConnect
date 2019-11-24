$('#registerInputPassword, #registerInputPasswordConfirm').on('keyup', function () {
    if ($('#registerInputPassword').val() == $('#registerInputPasswordConfirm').val()) {
        $('#passwordCheck').html('Matching').css('color', 'green');
        $('.login_btn').html('Sign Up').css('color', 'white');
        $('.login_btn').css('background-color', 'green');
    } else {
        $('#passwordCheck').html('Not Matching').css('color', 'red');
        $('.login_btn').html('Passwords Not Matching').css('color', 'white');
        $('.login_btn').css('background-color', '#990829');
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
            wachtwoord: $('#registerInputPasswordConfirm').val(),
            wachtwoordEncrypted: btoa($('#registerInputPasswordConfirm').val())
        };
        /*        var showConfirm = function () {
                    ons.notification.confirm('Do you want to send this data?' +
                        'First name: ' + $('#registerInputFirstName').val() +
                        'Last name: ' + $('#registerInputLastName').val() +
                        'Email: ' + $('#registerInputEmail').val() +
                        'Password: '+ $('#registerInputPasswordConfirm').val()
                    )
                };
                showConfirm()*/
        console.log(pars);
        $.post('https://wabyte.com/register.php', pars, function (respons) {
            console.log(respons);
            alert("U bent geregistreerd!\n" +
                '\nFirst name: ' + $('#registerInputFirstName').val() +
                '\nLast name: ' + $('#registerInputLastName').val() +
                '\nEmail: ' + $('#registerInputEmail').val() +
                '\nPassword: ' + btoa($('#registerInputPasswordConfirm').val()));

            let pars2 = {
                email: $('#registerInputEmail').val(),
                wachtwoord: $('#registerInputPasswordConfirm').val(),
                wachtwoordEncrypted: btoa($('#registerInputPasswordConfirm').val())
            };

            console.log(pars2);
            $.post('https://wabyte.com/loginPost.php', pars2, function (respons) {
                console.log(respons);
                var loginPersoonID = respons.persoonID;
                persoonID = loginPersoonID;
                var loginVoornaam = respons.voornaam;
                var loginAchternaam = respons.achternaam;
                var loginEmail = respons.email;
                var loginWachtwoord = respons.wachtwoord;
                var loginWachtwoordEncrypted = respons.wachtwoordEncrypted;
                console.log(loginPersoonID, loginVoornaam, loginAchternaam, loginEmail, loginWachtwoord, loginWachtwoordEncrypted);
                navigator.vibrate(500);

                document.getElementById('content').load('home.html');

            });


        });
    } else {
        ons.notification.alert("Please fill in all fields!");
    }

});