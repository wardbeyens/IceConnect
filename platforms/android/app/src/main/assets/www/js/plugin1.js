// var map = L.map('mymap').setView([51.161358, 4.963583], 9, 'preferCanvas', true);
var map = L.map('mymap', {
    center: [51.161358, 4.963583],
    zoom: 9,
    preferCanvas: true
});
/*map.options = {
    preferCanvas: true
};*/

L.tileLayer('https://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

map.on('viewreset', function () {
    console.log('resetting..');
});
map.invalidateSize();

/*var mymap = L.map('map').setView([51.160891, 4.961261], 10);
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1Ijoid2FyZGJleWVucyIsImEiOiJjazF1Zzd1enAwMWUzM2htcXV5Mm53a2ZtIn0.r5cUcXt0ljzhJy1JXVKEnQ'
}).addTo(mymap);*/

/*
var mymap = L.map('mymap',{
    center: [51.160891, 4.961261],
    zoom: 10
});
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mymap);

var tileLayer = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png',
    {
        attribution: false
    });

var map = L.map('map',
    {
        zoomControl: true,
        layers: [tileLayer],
        maxZoom: 18,
        minZoom: 6
    })
    .setView([43.64701, -79.39425], 15);

   setTimeout(function () { map.invalidateSize() }, 800);*/

/*
let locaties = function(){
    let onSuccess = function(position) {
        latitmap= position.coords.latitude;
        longitmap = position.coords.longitude;
    }
    function onError(error) {
        alert('code: '    + error.code    + '\n' +
            'message: ' + error.message + '\n');
    }
    navigator.geolocation.getCurrentPosition(onSuccess, onError);

var mymap = L.map('mapid').setView([51.505, -0.09], 13);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiamFuYWRlbGV0dGVyIiwiYSI6ImNrMXMwMHBldDA2d3QzaW96Mjh1cmt6ZHAifQ.6ykXrxgr3WcyXuLeGWWdig'
}).addTo(mymap);
}
 */