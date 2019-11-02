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

getLocation();

function meOnMap() {
    marker2 = L.circleMarker([lat, lng], {radius: 3}).addTo(map).bindPopup('Your Location').openPopup();
    console.log("Een marker op mijn locatie: ", lat, lng);
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
var markerVariabelstreet;
var markerVariabelcity;
var markerVariabelcountry;
var markerVariabelpostal;


var markerVariabel;
var markerVariabelLat;
var markerVariabelLng;
var markerVariabelDisplay_name;

map.on('click', function (e) {
    if (markerVariabel) {
        map.removeLayer(markerVariabel);
    };
    var coord = e.latlng;
    markerVariabelLat = coord.lat;
    markerVariabelLng = coord.lng;
    console.log("nominatim coordinaten: " , markerVariabelLat, markerVariabelLng);
    console.log("http://nominatim.openstreetmap.org/reverse?format=json&lat=" + markerVariabelLat + '&lon=' + markerVariabelLng);

    $.getJSON('http://nominatim.openstreetmap.org/reverse?format=json&lat=' + markerVariabelLat + '&lon=' + markerVariabelLng, function (data) {
        console.log(data);
        // let city = data.address.village || data.address.city_district || data.address.city || data.address.town || data.address.state;
        // markerVariabelstreet = data.address.street;
        // markerVariabelcity = data.address.city;
        // markerVariabelcountry = data.address.country;
        // markerVariabelpostal = data.address.postcode;
        markerVariabelDisplay_name = data.display_name;
        console.log(markerVariabelDisplay_name);
    });

    $('#addLocationLatitude').val(markerVariabelLat);
    $('#addLocationLongitude').val(markerVariabelLng);
    $('#addLocationLocatienaam').val(markerVariabelDisplay_name);


    //red, orange, yellow, green, blue, violet, grey, black
    markerVariabel = new L.Marker(e.latlng, {icon: greenIcon}).addTo(map)
        .bindPopup("latitude: " + markerVariabelLat + ' <br>longitude: ' + markerVariabelLng + '<br>' + markerVariabelDisplay_name ).openPopup();
    console.log("You created a variable marker at latitude: " + markerVariabelLat + " and longitude: " + markerVariabelLng);
});

