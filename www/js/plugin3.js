// Get the modal
var modal1 = document.getElementById("addLocationModal");

// Get the button that opens the modal
var btn1 = document.getElementById("openLocationModal");

// Get the <span> element that closes the modal
var span1 = document.getElementsByClassName("closeLocationModal")[0];

// When the user clicks the button, open the modal
btn1.onclick = function () {
    modal1.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span1.onclick = function () {
    modal1.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal1) {
        modal1.style.display = "none";
    }
}

$('#addLocation').click(function () {
    /*    let pars = {
            latitude: $('#addLocationLatitude').val(),
            longitude: $('#addLocationLongitude').val(),
            locatienaam: $('#addLocationLocatienaam').val(),
            street: $('#addLocationStreet').val(),
            city: $('#addLocationCity').val(),
            country: $('#addLocationCountry').val(),
            postalcode: $('#addLocationPostalcode').val(),
        };*/
    let pars = {
        latitude: $('#addLocationLatitude').val(),
        longitude: $('#addLocationLongitude').val(),
        locatienaam: $('#addLocationLocatienaam').val(),
        locatiebijnaam: $('#addLocationLocatiebijnaam').val(),
        huisnummer: "",
        street: "",
        city: "",
        county: "",
        state: "",
        country: "",
        postalcode: "",
        persoonID: persoonID,
    };

    console.log(pars);
    $.post('http://wabyte.com/addlocationPOST.php', pars, function (respons) {
        console.log(respons);
        alert(respons);
    });

    /*    $('.displayvariable').hide();
        $('#map').show();*/

});

$('#getLocaties').click(function () {

    let pars = {
        persoonID: persoonID,
    };
    console.log("U vraagt nu al uw opgeslagen locaties op met persoonID: " + persoonID);

    $.post('http://wabyte.com/getlocaties.php', pars, function (data) {
        console.log(data);
        $('.emptylist').empty();
        $.each(data, function (i) {
            console.log(i + ":" + this.locatiebijnaam);
            /*
            $("#menudiv").append("<ul class=\"list-group\" id= \"lijst" + i + "\"");
            console.log("<ul class=\"list-group\" id= \"lijst" + i + "\"");
            console.log("\"" + "#lijst" + i + "\"");
            $("\"" + "#lijst" + i + "\"").append('<li>' + this.locatiebijnaam + '</li>');
            $("\"" + "#lijst" + i + "\"").append('<li>' + this.locatienaam + '</li>');
            $("\"" + "#lijst" + i + "\"").append('<li>' + this.latitude + '</li>');
            $("\"" + "#lijst" + i + "\"").append('<li>' + this.longitude + '</li>');
            $("#menudiv").append('</ul>');

             */
            $("#menu").append('<li>' + this.locatiebijnaam + '</li>');
            $("#menu").append('<li>' + this.locatienaam + '</li>');
            $("#menu").append('<li>' + this.latitude + '</li>');
            $("#menu").append('<li>' + this.longitude + '</li>');

        });
    });

    /*    $('.displayvariable').hide();
        $('#map').show();*/

});

$('#getLocatiesOpKaart').click(function () {

    let pars = {
        persoonID: persoonID,
    };
    console.log("U vraagt nu al uw opgeslagen locaties op met persoonID: " + persoonID);

    $.post('http://wabyte.com/getlocaties.php', pars, function (data) {
        console.log(data);
        $('.emptylist').empty();

        $.each(data, function (i) {


            markerOpKaart = new L.marker([this.latitude, this.longitude], {icon: redIcon}).addTo(map)
                .bindPopup("ID: " + this.locatieID + "<br>" + this.locatiebijnaam + "<br> lat: " + this.latitude + '<br>lng: ' + this.longitude).openPopup();
            console.log(persoonID + " creeert een nieuwe marker met ID: " + this.locatieID);

        });
    });

});

$('#getGroepen').click(function () {

    let pars = {
        persoonID: persoonID,
    };

    console.log("U vraagt nu al alle groepen op");

    $.post('http://wabyte.com/getgroepen.php', function (data) {
        console.log(data);
        $('.emptylistGroup').empty();
        $.each(data, function (i) {
            console.log(i + ":" + this.groepnaam + '<br>' + this.locatieID + " " + this.locatiebijnaam);

            $("#menuGroup").append('<li>' + this.groepID + '</li>');
            $("#menuGroup").append('<li>' + this.groepnaam + '</li>');
            $("#menuGroup").append('<li>' + this.locatieID + '</li>');
            $("#menuGroup").append('<li>' + this.locatiebijnaam + '</li>');
            $("#menuGroup").append('<li>' + this.locatienaam + '</li>');

        });
    });
});

$('#closeGroepen').click(function () {
    $('.emptylistGroup').empty();
});


// Get the modal
var modal2 = document.getElementById("addUserToGroupModal");
// Get the button that opens the modal
var btn2 = document.getElementById("openAddUserToGroup");
// Get the <span> element that closes the modal
var span2 = document.getElementsByClassName("closeAddUserToGroup")[0];
// When the user clicks the button, open the modal
btn2.onclick = function () {
    modal2.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span2.onclick = function () {
    modal2.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
}

$('#openAddUserToGroup').click(function () {

    console.log("U vraagt nu al alle groepen op");
    $('#addUserToGroupGroepID').empty();
    $('#addUserToGroupGroepID').append(`<option value="" selected>Kies een groep</option>`);

    $.post('http://wabyte.com/getgroepen.php', function (data) {
        console.log(data);
        $.each(data, function (i) {
            optionText = this.groepnaam;
            optionValue = this.groepID;
            console.log(i + ":" + `<option value="${optionValue}"> ${optionText} </option>`);
            $('#addUserToGroupGroepID').append(`<option value="${optionValue}"> ${optionText} </option>`);
        });
    });

    let pars = {
        persoonID: persoonID,
    };

    console.log("U vraagt nu al uw opgeslagen locaties op met persoonID: " + persoonID);
    $('#addUserToGroupGroepYourLocation').empty();
    $('#addUserToGroupGroepYourLocation').append(`<option value="" selected>Kies een locatie</option>`);

    $.post('http://wabyte.com/getlocaties.php', pars, function (data2) {
        console.log(data2);
        $.each(data2, function (j) {

            optionTextLoc = this.locatiebijnaam;
            optionValueLoc = this.locatieID;
            console.log(j + ":" + `<option value="${optionValueLoc}"> ${optionTextLoc} </option>`);
            $('#addUserToGroupGroepYourLocation').append(`<option value="${optionValueLoc}"> ${optionTextLoc} </option>`);

        });
    });


});

$('#AddUserToGroup').click(function () {
    let pars = {
        persoonID: persoonID,
        groepID: $('#addUserToGroupGroepID').val(),
        locatieID: $('#addUserToGroupGroepYourLocation').val()
    };
    console.log(pars);

    alert("U bent: " + persoonID + "\nU wilt in groep: " + $('#addUserToGroupGroepID').val() + "\nMet locatie: " + $('#addUserToGroupGroepYourLocation').val());
    $.post('http://wabyte.com/addZitIN.php', pars, function (respons) {
        console.log(respons);
        alert("U bent toegevoegd aan een groep!"
        );
    });
});

$('#getGroepLocatiesOpKaart').click(function () {

    let pars = {
        persoonID: persoonID,
    };
    console.log("U vraagt de locaties van elk groeplid met persoonID: " + persoonID);

    $.post('http://wabyte.com/getgroeplocaties.php', pars, function (data) {
        console.log(data);
        $.each(data, function (i) {
            console.log(i);
            // markersGroepOpKaart = new L.marker([this.latitude, this.longitude], {icon: blackIcon}).addTo(map);


            markersGroepOpKaart = new L.marker([this.latitude, this.longitude], {icon: blackIcon}).addTo(map)
                .bindPopup(this.voornaam + " (" + this.persoonID + ")<br>" + this.groepnaam + " (" + this.groepID + ")<br>" + this.locatiebijnaam + " (" + this.locatieID + ")").openPopup();
            //console.log(persoonID + " creeert een nieuwe marker van de groep met ID: " + this.voornaam + " (" + this.persoonID + ")<br>" + this.groepnaam + " (" + this.groepID + ")<br>" + this.locatiebijnaam + " (" + this.locatieID + ")";


        });
    });

});
