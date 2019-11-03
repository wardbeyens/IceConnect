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

var showTemplateDialog = function () {
    var dialog = document.getElementById('getGroepLocatiesOpKaartModal');

    if (dialog) {
        dialog.show();
    } else {
        ons.createElement('dialog.html', {append: true})
            .then(function (dialog) {
                dialog.show();
            });
    }
};

var hideDialog = function (id) {
    document.getElementById(id).hide();
};
$('#openGetGroepLocatiesOpKaartModal').click(function () {

    showTemplateDialog()
});
$('#closeGetGroepLocatiesOpKaartModal').click(function () {

    hideDialog()
})

