# OnionShare Website

This is the code that powers <https://onionshare.org/>. It's licensed under [AGPLv3](/LICENSE).

It is static HTML.

## Privacy Goals for Contributors

In order to protect the privacy of website visitors, and to prevent attacks that could lead to someone downloading a malicious binary, I want to make sure that:

* The website works, and binaries can be downloaded, without javascript. Users who block javascript should be fully supported. However, using javascript to make the website even more usable for those that allow it is fine.
* There aren't any third party resources included. When someone visits https://onionshare.org/, their browser shouldn't make any requests to any other domain names (including Google to load fonts, jquery, etc.).
