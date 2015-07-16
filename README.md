# meanie-angular-url

[![npm version](https://img.shields.io/npm/v/meanie-angular-url.svg)](https://www.npmjs.com/package/meanie-angular-url)
[![node dependencies](https://david-dm.org/meanie/angular-url.svg)](https://david-dm.org/meanie/angular-url)
[![github issues](https://img.shields.io/github/issues/meanie/angular-url.svg)](https://github.com/meanie/angular-url/issues)
[![codacy](https://img.shields.io/codacy/ec65c86183234042b3525691b8ac8a62.svg)](https://www.codacy.com/app/meanie/angular-url)
[![Join the chat at https://gitter.im/meanie/meanie](https://img.shields.io/badge/gitter-join%20chat%20%E2%86%92-brightgreen.svg)](https://gitter.im/meanie/meanie?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

An AngularJS module with a Url helper service

## Installation

You can install this package using `meanie`, `npm` or `bower`.

### meanie

```shell
meanie install angular-url
```

Then add `Url.Service` as a dependency for your app:

```js
angular.module('App.MyModule', ['Url.Service']);
```

### npm

```shell
npm install meanie-angular-url
```

Then add as a dependency for your app:

```js
angular.module('App.MyModule', [require('meanie-angular-url')]);
```

### bower

```shell
bower install meanie-angular-url
```

Add a `<script>` to your `index.html`:

```html
<script src="/bower_components/meanie-angular-url/release/meanie-angular-url.js"></script>
```

Then add `Url.Service` as a dependency for your app:

```js
angular.module('App.MyModule', ['Url.Service']);
```

## Usage

Use it in your modules:
```js
angular.module('App.MyModule').controller('MyController', function($url) {

  //Concatenate URL parts without worrying about double slashes
  var baseUrl = '/api/v1/';
  var endpointUrl = '/user/';
  var url = $url.concat(baseUrl, endpointUrl); // /api/v1/user/
});
```

## Issues & feature requests

Please report any bugs, issues, suggestions and feature requests in the [meanie-angular-url issue tracker](https://github.com/meanie/angular-url/issues).

## Contributing

If you would like to contribute to Meanie, please check out the [Meanie contributing guidelines](https://github.com/meanie/meanie/blob/master/CONTRIBUTING.md).

## License

(MIT License)

Copyright 2015, [Adam Buczynski](http://adambuczynski.com)
