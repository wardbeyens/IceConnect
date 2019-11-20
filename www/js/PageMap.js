var blueIcon = new L.Icon({
    iconUrl: 'img/marker-icon-2x-blue.png',
    shadowUrl: 'img/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});
var redIcon = new L.Icon({
    iconUrl: 'img/marker-icon-2x-red.png',
    shadowUrl: 'img/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});
var greenIcon = new L.Icon({
    iconUrl: 'img/marker-icon-2x-green.png',
    shadowUrl: 'img/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});
var orangeIcon = new L.Icon({
    iconUrl: 'img/marker-icon-2x-orange.png',
    shadowUrl: 'img/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});
var yellowIcon = new L.Icon({
    iconUrl: 'img/marker-icon-2x-yellow.png',
    shadowUrl: 'img/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});
var violetIcon = new L.Icon({
    iconUrl: 'img/marker-icon-2x-violet.png',
    shadowUrl: 'img/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});
var greyIcon = new L.Icon({
    iconUrl: 'img/marker-icon-2x-grey.png',
    shadowUrl: 'img/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});
var blackIcon = new L.Icon({
    iconUrl: 'img/marker-icon-2x-black.png',
    shadowUrl: 'img/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});
var colorIcons = [blueIcon, redIcon, greenIcon, orangeIcon, yellowIcon, violetIcon, greyIcon, blackIcon];

$( ".toggleIcoon" ).click( function() {
    $("#icoon").toggleClass('flip');
});

var map = L.map('mymap', {
    center: [51.161358, 4.963583],
    zoom: 9,
    preferCanvas: true
});

L.tileLayer('https://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a>'
}).addTo(map);

marker1 = L.marker([51.161358, 4.963583], {icon: yellowIcon}).addTo(map).bindPopup('Thomas More<br> Geel').openPopup();

map.on('viewreset', function () {
    console.log('resetting..');
});

map.invalidateSize(function () {
    console.log('invalidatesize check');
});

var lat;
var lng;

function getLocation() {
    var onSuccess = function (position) {
        console.log('Latitude: ' + position.coords.latitude + '\n' +
            'Longitude: ' + position.coords.longitude + '\n' +
            'Altitude: ' + position.coords.altitude + '\n' +
            'Accuracy: ' + position.coords.accuracy + '\n' +
            'Altitude Accuracy: ' + position.coords.altitudeAccuracy + '\n' +
            'Heading: ' + position.coords.heading + '\n' +
            'Speed: ' + position.coords.speed + '\n' +
            'Timestamp: ' + position.timestamp + '\n');

        lat = position.coords.latitude;
        $('.locationLatitude').text(lat);
        lng = position.coords.longitude;
        $('.locationLongitude').text(lng);
        console.log(`latitude: ${lat} longitude: ${lng}`);
    };

    function onError(error) {
        console.log('code: ' + error.code + '\n' +
            'message: ' + error.message + '\n');
        alert(`code: ${error.code}
		message: ${error.message}
		Please turn on your GPS`);
    }

    navigator.geolocation.getCurrentPosition(onSuccess, onError);
};


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function meOnMap() {
    getLocation();
    await sleep(500);
    //moet nog gebeuren marker weghalen en dan nieuwe marker plaatsen
    markerMyLocation = L.circleMarker([lat, lng], {radius: 3}).addTo(map).bindPopup('Your Location').openPopup();
    console.log("Een marker op mijn locatie: ", lat, lng);
    var latlng = L.latLng(lat, lng);
    map.setView(latlng, 11);
};
map.on('click', function (e) {
    var coord = e.latlng;
    var test = coord.lat;
    var lng = coord.lng;
    console.log("You clicked the map at latitude: " + lat + " and longitude: " + lng);
    // var newMarker = new L.marker(e.latlng).addTo(map);
    map.closePopup();
});

map.on('contextmenu', function (e) {
    var coord = e.latlng;
    var lat = coord.lat;
    var lng = coord.lng;
    var newMarker = new L.marker(e.latlng).addTo(map).bindPopup("latitude: " + lat + ' <br>longitude: ' + lng).openPopup();
    console.log("You created a marker at latitude: " + lat + " and longitude: " + lng);
});

// for only one marker
var markerVariabel;
var markerVariabelLat;
var markerVariabelLng;
var markerVariabelDisplay_name;
var markerVariabelstreet;
var markerVariabelcity;
var markerVariabelcountry;
var markerVariabelcounty;
var markerVariabelstate;
var markerVariabelpostal;
var markerVariabelhouse_number;

map.on('click', function (e) {
    if (markerVariabel) {
        map.removeLayer(markerVariabel);
    }
    ;
    var coord = e.latlng;
    markerVariabelLat = coord.lat;
    markerVariabelLng = coord.lng;
    console.log("nominatim coordinaten: ", markerVariabelLat, markerVariabelLng);
    console.log("http://nominatim.openstreetmap.org/reverse?format=json&lat=" + markerVariabelLat + '&lon=' + markerVariabelLng);

    $.getJSON('http://nominatim.openstreetmap.org/reverse?format=json&lat=' + markerVariabelLat + '&lon=' + markerVariabelLng, function (data) {
        console.log(data);
        // let city = data.address.village || data.address.city_district || data.address.city || data.address.town || data.address.state;
        // markerVariabelcity = data.address.city;
        markerVariabelDisplay_name = data.display_name;
        markerVariabelhouse_number = data.address.house_number;
        markerVariabelstreet = data.address.street || data.address.road;
        markerVariabelcity = data.address.village || data.address.city_district || data.address.city || data.address.town;
        markerVariabelcounty = data.address.county;
        markerVariabelstate = data.address.state;
        markerVariabelcountry = data.address.country;
        markerVariabelpostal = data.address.postcode;
        console.log(
            "\nlatitude: " + markerVariabelLat
            + "\nlongitude: " + markerVariabelLng
            + "\nlocatienaam: " + markerVariabelDisplay_name
            + "\nlocatiebijnaam: " + "nog te geven via input"
            + "\nhuisnummer: " + markerVariabelhouse_number
            + "\nstraat: " + markerVariabelstreet
            + "\ndorp: " + markerVariabelcity
            + "\ncounty: " + markerVariabelcounty
            + "\nstate: " + markerVariabelstate
            + "\nland: " + markerVariabelcountry
            + "\npersoonID: " + persoonID
        );
    });

    $('#addLocationLatitude').val(markerVariabelLat);
    $('#addLocationLongitude').val(markerVariabelLng);
    $('#addLocationLocatienaam').val(markerVariabelDisplay_name);


    //red, orange, yellow, green, blue, violet, grey, black
    markerVariabel = new L.Marker(e.latlng, {icon: greenIcon}).addTo(map)
        .bindPopup("latitude: " + markerVariabelLat + ' <br>longitude: ' + markerVariabelLng + '<br>' + markerVariabelDisplay_name).openPopup();
    console.log("You created a variable marker at latitude: " + markerVariabelLat + " and longitude: " + markerVariabelLng);
});



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

    $.post('https://wabyte.com/getlocaties.php', pars, function (data) {
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

// document.addEventListener("volumedownbutton", onVolumeDownKeyDown, false);
function onVolumeDownKeyDown() {
    map.zoomOut();
};
// document.addEventListener("volumeupbutton", onVolumeUpKeyDown, false);
function onVolumeUpKeyDown() {
    map.zoomIn();
};

