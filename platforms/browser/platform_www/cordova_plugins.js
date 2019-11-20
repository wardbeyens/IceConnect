cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-vibration/src/browser/Vibration.js",
        "id": "cordova-plugin-vibration.Vibration",
        "pluginId": "cordova-plugin-vibration",
        "merges": [
            "navigator"
        ]
    },
    {
        "file": "plugins/cordova-plugin-vibration/www/vibration.js",
        "id": "cordova-plugin-vibration.notification",
        "pluginId": "cordova-plugin-vibration",
        "merges": [
            "navigator"
        ]
    },
    {
        "file": "plugins/cordova-admob-plus/www/admob.js",
        "id": "cordova-admob-plus.AdMob",
        "pluginId": "cordova-admob-plus",
        "clobbers": [
            "admob"
        ]
    },
    {
        "file": "plugins/cordova-admob-plus/src/browser/AdMobProxy.js",
        "id": "cordova-admob-plus.AdMobProxy",
        "pluginId": "cordova-admob-plus",
        "runs": true
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.3.4",
    "cordova-plugin-vibration": "3.1.1",
    "cordova-plugin-geolocation": "4.0.2",
    "cordova-admob-plus": "0.0.0"
}
// BOTTOM OF METADATA
});