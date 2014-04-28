### Advanced AngularJS - St. Louis JavaScript Meetup (04-17-2014)

Part 2 of series of talk on AngularJS. This talk provides a deep dive into some of the advanced concepts in AngularJS like *ng-csp*,  *mustache-security*, *ng-touch* etc. 

[![Advanced AngularJS](http://img.youtube.com/vi/bNykjhhDegc/0.jpg)](https://www.youtube.com/watch?v=bNykjhhDegc)

For part 1 of the talk, please proceed to - [An Angle on AngularJS](https://github.com/siddii/STLJS_08-15-2013) 

###Installation
Install dependencies for running code in this repo

    npm install
    bower install

###Run grunt to start the server...

    grunt

####CSP middleware
Please have a look at [Gruntfile.js](https://github.com/siddii/STLJS_04-17-2014/blob/master/Gruntfile.js). By default it is setup to run with CSP middleware.
For running the code under `mustache-security`, you need to turn off CSP middleware.

*Note: Copy of [hosts](https://github.com/siddii/STLJS_04-17-2014/blob/master/hosts) file which was used while running this code.*

###References:

* http://www.html5rocks.com/en/tutorials/security/content-security-policy/
* https://code.google.com/p/mustache-security/
* http://www.slideshare.net/x00mario/jsmvcomfg-to-sternly-look-at-javascript-mvc-and-templating-frameworks
* https://developer.chrome.com/extensions/contentSecurityPolicy
* https://mikewest.org/2012/05/content-security-policy-feature-detection
* https://docs.google.com/document/d/1epha4VgFZVvauFJb2Tx_3NJlb3D91PjyZuO5YNAMX0M/edit
* http://blog.angularjs.org/2014/03/angular-20.html
