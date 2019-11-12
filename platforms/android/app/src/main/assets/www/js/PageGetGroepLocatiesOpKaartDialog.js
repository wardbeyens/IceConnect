var beschikbareKleuren = ["blue", "red", "green", "orange", "yellow", "violet", "grey", "black"];
var optionTextKleur;

function loadDataGetGroepLocatiesOpKaartDialog() {
    $('#getGroepLocatiesOpKaartKleurMarker2').empty();
    $('#getGroepLocatiesOpKaartKleurMarker2').append(`<option value="" selected>Choose a color </option>`);

    for (i = 0; i < beschikbareKleuren.length; i++) {
        optionTextKleur = beschikbareKleuren[i];
        console.log(i + " is de kleur: " + optionTextKleur + '\n' + `<option value="${optionTextKleur}"> ${optionTextKleur} </option>`);
        $('#getGroepLocatiesOpKaartKleurMarker2').append(`<option value="${optionTextKleur}"> ${optionTextKleur} </option>`);
    }
    ;


    let parsnieuw = {
        persoonID: persoonID,
    };

    $('#getGroepLocatiesOpKaartGroepID2').empty();
    $('#getGroepLocatiesOpKaartGroepID2').append(`<option value="" selected>Choose 1 of your groups</option>`);

    console.log("U vraagt nu al alle groepen op waar jezelf inzit met ID: " + persoonID);
    $.post('https://wabyte.com/getuwgroepen.php', parsnieuw, function (data) {
        console.log("dit zijn uw groepen: ");
        console.log(data);

        $.each(data, function (i) {
            optionText = this.groepnaam;
            optionValue = this.groepID;
            console.log(i + ":" + `<option value="${optionValue}"> ${optionText} </option>`);
            $('#getGroepLocatiesOpKaartGroepID2').append(`<option value="${optionValue}"> ${optionText} </option>`);
        });
    });
};

loadDataGetGroepLocatiesOpKaartDialog()

var getGroepLocatiesOpKaartKleurMarker;
var getGroepLocatiesOpKaartKleurMarkerKleur;
var getGroepLocatiesOpKaartGroepID2;

$('#getGroepLocatiesOpKaart').click(function () {
    getGroepLocatiesOpKaartKleurMarkerKleur = $('#getGroepLocatiesOpKaartKleurMarker2').val();
    getGroepLocatiesOpKaartGroepID2 = $('#getGroepLocatiesOpKaartGroepID2').val();

    document.getElementById('GetGroepLocatiesOpKaartDialog').hide();
    $('#GetGroepLocatiesOpKaartDialog').hide();

    // document.getElementById('content').load('home.html');
    // alert("U bent nu uit het Dialoog uit en terug op de kaartpagina");

    console.log(getGroepLocatiesOpKaartKleurMarkerKleur);
    getGroepLocatiesOpKaartKleurMarker = new L.Icon({
        iconUrl: 'img/marker-icon-2x-' + getGroepLocatiesOpKaartKleurMarkerKleur + '.png',
        shadowUrl: 'img/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
    });
    console.log(getGroepLocatiesOpKaartKleurMarker);
    let pars = {
        persoonID: persoonID,
        groepID: getGroepLocatiesOpKaartGroepID2,
    };
    console.log("U wilt de locaties van de groep: " + getGroepLocatiesOpKaartGroepID2 + " opvragen met de kleur: " + getGroepLocatiesOpKaartKleurMarkerKleur);
    // console.log("U wilt de locaties van de groep: " + $('#getGroepLocatiesOpKaartGroepID2').val() + " opvragen met de kleur: " + $('#getGroepLocatiesOpKaartKleurMarker').val());
    $.post('https://wabyte.com/getgroeplocaties.php', pars, function (data) {
        console.log(data);
        $.each(data, function (i) {
            console.log(i);
            //markersGroepOpKaart = new L.marker([this.latitude, this.longitude], getGroepLocatiesOpKaartKleurMarker).addTo(map);
            markersGroepOpKaart = new L.marker([this.latitude, this.longitude], {icon: getGroepLocatiesOpKaartKleurMarker}).addTo(map).bindPopup(this.voornaam + " (" + this.persoonID + ")<br>" + this.groepnaam + " (" + this.groepID + ")<br>" + this.locatiebijnaam + " (" + this.locatieID + ")").openPopup();
            console.log(persoonID + " creeert een nieuwe marker van de groep met ID: " + this.voornaam + " (" + this.persoonID + ")<br>" + this.groepnaam + " (" + this.groepID + ")<br>" + this.locatiebijnaam + " (" + this.locatieID + ")");
        });
    });
});

