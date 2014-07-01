# OnionShare Website

This is the code that powers <https://onionshare.org/>. It's licensed under [AGPLv3](/LICENSE).

## Developing

* Install [Node.js](http://nodejs.org/download/)
* Install Grunt: `npm install -g grunt-cli`
* Install the Node.js dependencies: `cd onionshare-website && npm install`
* Run `grunt build` to build the static site, `grunt` to build and watch for changes (http://localhost:4000/)

## Privacy Goals for Contributors

In order to protect the privacy of website visitors, and to prevent attacks that could lead to someone downloading a malicious binary, I want to make sure that:

* The website works, and binaries can be downloaded, without javascript. Users who block javascript should be fully supported. However, using javascript to make the website even more usable for those that allow it is fine.
* There aren't any third party resources included. When someone visits https://onionshare.org/, their browser shouldn't make any requests to any other domain names (including Google to load fonts, jquery, etc.).

