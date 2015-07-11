# Meanie - Angular Url

[![npm version](https://img.shields.io/npm/v/meanie-angular-url.svg)](https://www.npmjs.com/package/meanie-angular-url)
[![node dependencies](https://david-dm.org/meanie/angular-url.svg)](https://david-dm.org/meanie/angular-url)
[![github issues](https://img.shields.io/github/issues/meanie/angular-url.svg)](https://github.com/meanie/angular-url/issues)
[![codacy](https://img.shields.io/codacy/abcdefgh.svg)](https://www.codacy.com/app/meanie/angular-url)
[![Join the chat at https://gitter.im/meanie/meanie](https://img.shields.io/badge/gitter-join%20chat%20%E2%86%92-brightgreen.svg)](https://gitter.im/meanie/meanie?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

An Angular url helper service for [Meanie](https://github.com/meanie/meanie) projects.

## Installation
Install using the [Meanie CLI](https://www.npmjs.com/package/meanie):
```shell
meanie install angular-url
```

## Usage
Include the service as a dependency and inject it into your modules:
```js
angular.module('App.MyModule', [
  'Utility.Url.Service'
]).controller('MyController', function($url) {
  //Use the $url service
});
```
Use it in your modules:
```js

//Concatenate URL parts without worrying about double slashes
var baseUrl = '/api/v1/';
var endpointUrl = '/user/';
var url = $url.concat(baseUrl, endpointUrl); // /api/v1/user/
```

## Issues & feature requests
Please report any bugs, issues, suggestions and feature requests in the appropriate issue tracker:
* [Module issue tracker](https://github.com/meanie/angular-url/issues)
* [Meanie Boilerplate issue tracker](https://github.com/meanie/boilerplate/issues)
* [Meanie CLI issue tracker](https://github.com/meanie/meanie/issues)

## Contributing
If you would like to contribute to Meanie, please check out the [Meanie contributing guidelines](https://github.com/meanie/meanie/blob/master/CONTRIBUTING.md).

## License
(MIT License)

Copyright 2015, [Adam Buczynski](http://adambuczynski.com)
