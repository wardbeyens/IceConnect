function loadDataAddUserToGroupDialog() {
    console.log("U vraagt nu al alle groepen op om in de join user to group dialog te flansen");
    $('#addUserToGroupGroepID-x').empty();
    $('#addUserToGroupGroepID-x').append(`<option value="" selected>Choose group</option>`);

    $.post('https://wabyte.com/getgroepen.php', function (data) {
        console.log(data);
        $.each(data, function (i) {
            optionText = this.groepnaam;
            optionValue = this.groepID;
            console.log(i + ":" + `<option value="${optionValue}"> ${optionText} </option>`);
            $('#addUserToGroupGroepID-x').append(`<option value="${optionValue}"> ${optionText} </option>`);
        });
    });

    let parsPersoon = {
        persoonID: persoonID,
    };

    console.log("U vraagt nu al uw opgeslagen locaties op met persoonID: " + persoonID);
    $('#addUserToGroupGroepYourLocation-x').empty();
    $('#addUserToGroupGroepYourLocation-x').append(`<option value="" selected>Choose location</option>`);

    console.log("getlocaties van de gebruiker met: ", persoonID, " ==> ", parsPersoon);
    $.post('https://wabyte.com/getlocaties.php', parsPersoon, function (data2) {
        console.log(data2);
        $.each(data2, function (j) {

            optionTextLoc = this.locatiebijnaam;
            optionValueLoc = this.locatieID;
            console.log(j + ":" + `<option value="${optionValueLoc}"> ${optionTextLoc} </option>`);
            $('#addUserToGroupGroepYourLocation-x').append(`<option value="${optionValueLoc}"> ${optionTextLoc} </option>`);

        });
    });
};

loadDataAddUserToGroupDialog();


$('#AddUserToGroup').click(function () {
    let pars = {
        persoonID: persoonID,
        groepID: $('#addUserToGroupGroepID-x').val(),
        locatieID: $('#addUserToGroupGroepYourLocation-x').val()
    };
    console.log(pars);

    alert("U bent: " + persoonID + "\nU wilt in groep: " + $('#addUserToGroupGroepID-x').val() + "\nMet locatie: " + $('#addUserToGroupGroepYourLocation-x').val());
    $.post('https://wabyte.com/addZitIN.php', pars, function (respons) {
        console.log(respons);
        alert("U bent toegevoegd aan een groep!"
        );
    });
});