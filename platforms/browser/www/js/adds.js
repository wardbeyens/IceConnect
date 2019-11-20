/*const app = {
    initialize() {
        document.addEventListener(
            'deviceready',
            this.onDeviceReady.bind(this),
            false
        )
    },

    onDeviceReady() {
        this.receivedEvent('deviceready')

        this.showAds()
    },

    showAds() {
        admob.banner.show({ id: 'test' }).catch(console.log)
        admob.interstitial
            .load({ id: 'test' })
            .then(() => admob.interstitial.show())
            .catch(console.log)
        admob.rewardVideo
            .load({ id: 'test' })
            .then(() => admob.rewardVideo.show())
            .catch(console.log)
    },

    receivedEvent(id) {
        const parentElement = document.getElementById(id)
        const listeningElement = parentElement.querySelector('.listening')
        const receivedElement = parentElement.querySelector('.received')

        listeningElement.setAttribute('style', 'display:none;')
        receivedElement.setAttribute('style', 'display:block;')

        console.log(`Received Event: ${id}`)
    },
}

app.initialize()*/

document.addEventListener('deviceready', () => {
        console.log("adds.js wordt geladen");
        admob.banner.show({
            id: {
                // replace with your ad unit IDs
                //android: 'ca-app-pub-3790828934465031/7940947854',
                android: 'ca-app-pub-3940256099942544/6300978111',
                // ios: 'ca-app-pub-xxx/zzz',
            },
            position: 'bottom',
            size: {
                width: 320,
                height: 50
            }
        }).then(() => {
            setTimeout(() => {
                admob.banner.hide({
                    // replace with your ad unit IDs
                    //android: 'ca-app-pub-3790828934465031/7940947854',
                    android: 'ca-app-pub-3940256099942544/6300978111',
                    // ios: 'ca-app-pub-xxx/zzz',
                })
            }, 10000)
        })
    }

    ,
    false
);


document.addEventListener('admob.banner.load', () => {
    alert("admob banner had loaded")
});