
##Installation
Install dependencies for running code in this repo

    npm install
    bower install

##Run grunt to start the server...

    grunt

###CSP middleware
Please have a look at [Gruntfile.js](https://github.com/siddii/STLJS_04-17-2014/blob/master/Gruntfile.js). By default it is setup to run with CSP middleware.
For running the code under `mustache-security`, you need to turn off CSP middleware.

***Note: There is a copy of [hosts](https://github.com/siddii/STLJS_04-17-2014/blob/master/hosts) file available, which I used while running this code.***

###References:

* http://www.html5rocks.com/en/tutorials/security/content-security-policy/
* https://code.google.com/p/mustache-security/
* http://www.slideshare.net/x00mario/jsmvcomfg-to-sternly-look-at-javascript-mvc-and-templating-frameworks
* https://developer.chrome.com/extensions/contentSecurityPolicy
* https://mikewest.org/2012/05/content-security-policy-feature-detection
* https://docs.google.com/document/d/1epha4VgFZVvauFJb2Tx_3NJlb3D91PjyZuO5YNAMX0M/edit
* http://blog.angularjs.org/2014/03/angular-20.html
