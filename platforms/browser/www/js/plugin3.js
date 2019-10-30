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
            console.log( persoonID + " creeert een nieuwe marker met ID: " + this.locatieID);

        });
    });

});