# @meanie/angular-url

[![npm version](https://img.shields.io/npm/v/@meanie/angular-url.svg)](https://www.npmjs.com/package/@meanie/angular-url)
[![node dependencies](https://david-dm.org/meanie/angular-url.svg)](https://david-dm.org/meanie/angular-url)
[![github issues](https://img.shields.io/github/issues/meanie/angular-url.svg)](https://github.com/meanie/angular-url/issues)
[![codacy](https://img.shields.io/codacy/ec65c86183234042b3525691b8ac8a62.svg)](https://www.codacy.com/app/meanie/angular-url)


An Angular service to provide URL helpers

![Meanie](https://raw.githubusercontent.com/meanie/meanie/master/meanie-logo-full.png)

## Installation

You can install this package using `yarn` or `npm`:

```shell
#yarn
yarn add @meanie/angular-url

#npm
npm install @meanie/angular-url --save
```

Include the script `node_modules/@meanie/angular-url/release/angular-url.js` in your build process, or add it via a `<script>` tag to your `index.html`:

```html
<script src="node_modules/@meanie/angular-url/release/angular-url.js"></script>
```

Add `Url.Service` as a dependency for your app.

## Usage

```js
angular.module('App.MyModule').controller('MyController', function($url) {

  //Concatenate URL parts without worrying about double slashes
  var baseUrl = '/api/v1/';
  var endpointUrl = '/user/';
  var url = $url.concat(baseUrl, endpointUrl); // /api/v1/user/
});
```

## Issues & feature requests

Please report any bugs, issues, suggestions and feature requests in the [@meanie/angular-url issue tracker](https://github.com/meanie/angular-url/issues).

## Contributing

Pull requests are welcome! If you would like to contribute to Meanie, please check out the [Meanie contributing guidelines](https://github.com/meanie/meanie/blob/master/CONTRIBUTING.md).

## Credits

* Meanie logo designed by [Quan-Lin Sim](mailto:quan.lin.sim+meanie@gmail.com)

## License

(MIT License)

Copyright 2015-2017, [Adam Reis](https://adam.reis.nz)
