function LoadData(message) {
    let pars = {
        persoonID: persoonID,
    };
    console.log("Load Data from user: ")
    $.post('https://wabyte.com/getInformation.php', pars, function (respons) {
        console.log(respons);

        $.each(respons, function (i) {
            $('.loginPersoonID').text(persoonID);
            var loginVoornaam = this.voornaam;
            $('.loginVoornaam').text(loginVoornaam);
            var loginAchternaam = this.achternaam;
            $('.loginAchternaam').text(loginAchternaam);
            var loginEmail = this.email;
            $('.loginEmail').text(loginEmail);
            var loginWachtwoord = this.wachtwoordEncrypted;
            $('.loginWachtwoord').text(loginWachtwoord);
            console.log(persoonID, loginVoornaam, loginAchternaam, loginEmail, loginWachtwoord);
            navigator.vibrate(500);
        });

    });
};

LoadData();

