var nightmode = {
    css: {},
    load: function() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.update);
        }
    },
    update: function(position) {
        var lat = position.coords.latitude;
        var lon = position.coords.longitude;
        console.log("Lat: " + lat + ", lon: " + lon);
        nightmode.getJSONP("http://api.sunrise-sunset.org/json?lat=" + lat + "&lng=" + lon + "&formatted=0&callback=nightmode.success");
    },
    success: function(data) {
        console.log(data);
        var now = new Date();
        utcDate = new Date(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds());
        console.log(data["results"]["sunrise"]);
        console.log(utcDate);
        if (data["results"]["sunset"] < utcDate.toISOString() || data["results"]["sunset"] > utcDate.toISOString()) {
            for (var prop in nightmode.css) {
                for (var attr in nightmode.css[prop]) {
                    var elements = document.querySelectorAll(prop);
                    for (var i = 0; i < elements.length; i++) {
                        elements[i].style[attr] = nightmode.css[prop][attr];
                    }
                }
            }
        } else {
            console.log("Uh, it's supposed to be morning, right?");
        }
    },
    getJSONP: function(url) {
        var s = document.createElement('script');
        s.type = 'text/javascript';
        s.src = url;
        var h = document.getElementsByTagName('script')[0];
        h.parentNode.insertBefore(s, h);
    }
}