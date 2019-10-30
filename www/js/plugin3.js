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
        street: "",
        city: "",
        country: "",
        postalcode: "",
    };

    console.log(pars);
    $.post('http://wabyte.com/addlocation.php', pars, function (respons) {
        console.log(respons);
        alert(respons);
    });

    /*    $('.displayvariable').hide();
        $('#map').show();*/

});