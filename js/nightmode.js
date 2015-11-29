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
        nightmode.getJSONP("//api.sunrise-sunset.org/json?lat=" + lat + "&lng=" + lon + "&formatted=0&callback=nightmode.success");
    },
    success: function(data) {
        var now = new Date();
        (data["results"]["sunset"] > now.toISOString() && data["results"]["sunrise"] < now.toISOString()) ? null : nightmode.changeCSS();
    },
    changeCSS: function() {
        for (var prop in nightmode.css) {
            for (var attr in nightmode.css[prop]) {
                var elements = document.querySelectorAll(prop);
                for (var i = 0; i < elements.length; i++) {
                    elements[i].style[attr] = nightmode.css[prop][attr];
                }
            }
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