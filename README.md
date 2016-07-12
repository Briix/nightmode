NightMode.js
===========
Specify CSS that will only be applied when the sun is down. It's easy to use and experiment with [but I wouldn't recommend using it for serious stuff yet.](http://simonbrix.dk/blog/posts/night-mode-for-the-web)

Initializing NightMode.js
-------------------------
Initialize NightMode.js by declaring your night mode css

    nightmode.css = {
        "body": {
            "background": "#020111",
            "color": "rgb(215, 215, 215)"
        },
        "body>p": {
            "color": "#93a1a1"
        }
    }

Loading CSS
-----------
When loading the night mode css you can either use

    nightmode.load();

This will only load the night mode css if the sun has set

*OR*

You can use

    nightmode.changeCSS();

This will just apply the night mode css

Help
====
If you want to help out by improving the script or the generally functionality, please don't hesitate to fork the repo. You can also hit me up on Twitter [@br11x](https://twitter.com/br11x) for a conversation about it :-)

License
=======
Copyright (c) 2015 Briix


Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:


The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.


THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
