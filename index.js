'use strict'

var suncalc = require('suncalc')

module.exports = function nightmode (coords, date) {
  coords = coords || []
  date = date || new Date()

  return new Promise(function (resolve, reject) {
    if(!coords.length > 0) {
      navigator.geolocation ? navigator.geolocation.getCurrentPosition(
        (pos) => {
          coords[0] = pos.coords.latitude
          coords[1] = pos.coords.longitude
        },
        (err) => {
          reject(err)
        }
      ) : reject()
    }
    if(isSunDown(coords[0], coords[1], date)) {
      resolve()
    } else {
      reject()
    }
  })
}

function isSunDown(lat, lon, date) {
  var times = suncalc.getTime(now, lat, lon);
  if(times.sunset > now && times.sunrise < now) {
    return false
  } else {
    return true
  }
}
