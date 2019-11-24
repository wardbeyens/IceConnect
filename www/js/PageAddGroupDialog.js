function loadDataAddGroupDialog() {

    let parsPersoon = {
        persoonID: persoonID,
    };

    console.log("U vraagt nu al uw opgeslagen locaties op met persoonID: " + persoonID);
    $('#addGroupLocation-x').empty();
    $('#addGroupLocation-x').append(`<option value="" selected>Choose location</option>`);

    console.log("getlocaties van de gebruiker met: ", persoonID, " ==> ", parsPersoon);
    $.post('https://wabyte.com/getlocaties.php', parsPersoon, function (data2) {
        console.log(data2);
        $.each(data2, function (j) {

            optionTextLoc = this.locatiebijnaam;
            optionValueLoc = this.locatieID;
            console.log(j + ":" + `<option value="${optionValueLoc}"> ${optionTextLoc} </option>`);
            $('#addGroupLocation-x').append(`<option value="${optionValueLoc}"> ${optionTextLoc} </option>`);
        });
    });
};

loadDataAddGroupDialog();


$('#AddGroup').click(function () {
    let pars = {
        persoonID: persoonID,
        groepnaam: $('#addGroepName-x').val(),
        locatieID: $('#addGroupLocation-x').val()
    };
    console.log(pars);

    alert("U bent: " + persoonID + "\nU wilt groep: " + $('#addGroepName-x').val() + " toevoegen\nMet locatie: " + $('#addGroupLocation-x').val());
    $.post('https://wabyte.com/addGroup.php', pars, function (respons) {
        console.log(respons);
        alert("U hebt een nieuwe groep aangemaakt!"
        );
    });
});