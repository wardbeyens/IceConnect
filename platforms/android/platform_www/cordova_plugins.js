cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-admob-plus.AdMob",
      "file": "plugins/cordova-admob-plus/www/admob.js",
      "pluginId": "cordova-admob-plus",
      "clobbers": [
        "admob"
      ]
    },
    {
      "id": "cordova-plugin-geolocation.geolocation",
      "file": "plugins/cordova-plugin-geolocation/www/android/geolocation.js",
      "pluginId": "cordova-plugin-geolocation",
      "clobbers": [
        "navigator.geolocation"
      ]
    },
    {
      "id": "cordova-plugin-geolocation.PositionError",
      "file": "plugins/cordova-plugin-geolocation/www/PositionError.js",
      "pluginId": "cordova-plugin-geolocation",
      "runs": true
    },
    {
      "id": "cordova-plugin-splashscreen.SplashScreen",
      "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
      "pluginId": "cordova-plugin-splashscreen",
      "clobbers": [
        "navigator.splashscreen"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-admob-plus": "0.0.0",
    "cordova-plugin-geolocation": "4.0.2",
    "cordova-plugin-splashscreen": "5.0.3",
    "cordova-plugin-vibration": "3.1.1",
    "cordova-plugin-whitelist": "1.3.4"
  };
});