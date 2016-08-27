# nightmode [![Build Status](https://secure.travis-ci.org/Briix/nightmode.svg?branch=master)](https://travis-ci.org/Briix/nightmode) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

[Do stuff when the sun is down](http://simonbrix.dk/2016/07/15/nightmode-for-the-web.html).

## Installation

```bash
npm install --save nightmode
```

## Usage

```javascript
var nightmode = require('nightmode')

// Specify coordinates and date
nightmode(['51.5', '-0.1'], new Date()).then(() => {
    // do stuff
})

// or leave blank and use today's date and navigator.geolocation
nightmode().then(() => {
    // do stuff
})
```

## License

MIT

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

Crafted with <3 by Simon Brix ([@br11x](https://twitter.com/br11x)).

***

> This package was initially generated with [yeoman](http://yeoman.io) and the [p generator](https://github.com/johnotander/generator-p.git).
