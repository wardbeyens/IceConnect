document.querySelector('#fabBalkRechts').addEventListener('click', function (e) {
    this.classList.toggle('open');
});

$('#meOnMap').click(function () {
    meOnMap()
})

$('#getLocatiesOpKaart').click(function () {

    let pars = {
        persoonID: persoonID,
    };
    console.log("U vraagt nu al uw opgeslagen locaties op met persoonID: " + persoonID);

    $.post('http://wabyte.com/getlocaties.php', pars, function (data) {
        console.log(data);
        $('.emptylist').empty();

        $.each(data, function (i) {


            markerOpKaart = new L.marker([this.latitude, this.longitude], {icon: blueIcon}).addTo(map)
                .bindPopup("ID: " + this.locatieID + "<br>" + this.locatiebijnaam + "<br> lat: " + this.latitude + '<br>lng: ' + this.longitude).openPopup();
            console.log(persoonID + " creeert een nieuwe marker met ID: " + this.locatieID);

        });
    });

});


var showGetGroepLocatiesOpKaartDialog = function () {
    var dialog = document.getElementById('GetGroepLocatiesOpKaartDialog');

    if (dialog) {
        dialog.show();
    } else {
        ons.createElement('GetGroepLocatiesOpKaartDialog.html', {append: true}).then(function (dialog) {
            dialog.show([animation = "slide"]);
        });
    }
};

var hideDialog = function (id) {
    document.getElementById(id).hide();
};
$('#openGetGroepLocatiesOpKaartDialog').click(function () {
    showGetGroepLocatiesOpKaartDialog();
});

var showaddLocationUserDialog = function () {
    var dialog = document.getElementById('addLocationUserDialog');

    if (dialog) {
        dialog.show();
    } else {
        ons.createElement('addLocationUserDialog.html', {append: true}).then(function (dialog) {
            dialog.show([animation = "slide"]);
        });
    }
};

$('#openaddLocationUserDialog').click(function () {
    showaddLocationUserDialog();
});

document.addEventListener("volumedownbutton", onVolumeDownKeyDown, false);
function onVolumeDownKeyDown() {
    map.zoomOut();
};
document.addEventListener("volumeupbutton", onVolumeUpKeyDown, false);
function onVolumeUpKeyDown() {
    map.zoomIn();
};

