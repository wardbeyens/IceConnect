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
        huisnummer: markerVariabelhouse_number,
        street: markerVariabelstreet,
        city: markerVariabelcity,
        county: markerVariabelcounty,
        state: markerVariabelstate,
        country: markerVariabelcountry,
        postalcode: markerVariabelpostal,
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