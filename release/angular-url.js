/**
 * @meanie/angular-url * https://github.com/meanie/angular-url
 *
 * Copyright (c) 2017 Adam Reis <adam@reis.nz>
 * License: MIT
 */
(function (window, angular, undefined) {
  'use strict';

  /**
   * Module definition and dependencies
   */

  angular.module('Url.Service', [])

  /**
   * Factory definition
   */
  .factory('$url', function () {
    return {

      /**
       * Url concatenation helper
       */
      concat: function concat() {
        var parts = [];
        for (var i = 0; i < arguments.length; i++) {
          var part = arguments[i];
          if (part === null || part === undefined || part === true || part === false) {
            continue;
          }
          part = String(part);
          if (part !== '') {
            parts.push(part);
          }
        }
        return parts.join('/').replace(/([^:])(\/\/+)/g, '$1/').replace(/^\/\//, '/');
      },

      /**
       * Encode URI component
       */
      encodeUriComponent: function encodeUriComponent(str, pctEncodeSpaces) {
        return encodeURIComponent(str).replace(/%40/g, '@').replace(/%3A/gi, ':').replace(/%24/g, '$').replace(/%2C/gi, ',').replace(/%20/g, pctEncodeSpaces ? '%20' : '+');
      },

      /**
       * Encode URI segments
       */
      encodeUriSegment: function encodeUriSegment(str) {
        return this.encodeUriComponent(str, true).replace(/%26/gi, '&').replace(/%3D/gi, '=').replace(/%2B/gi, '+');
      }
    };
  });
})(window, window.angular);
(function (window, angular, undefined) {
  'use strict';

  /**
   * Specifications
   */

  describe('Url', function () {

    //Load module and service
    beforeEach(module('Url.Service'));

    //Inject url service
    var $url = void 0;
    beforeEach(inject(function (_$url_) {
      $url = _$url_;
    }));

    /**
     * Concatenation
     */
    describe('concatenation', function () {
      var url = void 0;
      it('should just return one URL part', function () {
        url = $url.concat('/foo');
        expect(url).toBe('/foo');
      });
      it('should concatenance two URL parts', function () {
        url = $url.concat('/foo', '/bar');
        expect(url).toBe('/foo/bar');
      });
      it('should concatenance multiple URL parts', function () {
        url = $url.concat('/foo', '/bar', '/foo', '/bar');
        expect(url).toBe('/foo/bar/foo/bar');
      });
      it('should keep leading and trailing slashes', function () {
        url = $url.concat('/foo', '/bar/');
        expect(url[0]).toBe('/');
        expect(url[url.length - 1]).toBe('/');
      });
      it('should not add leading or trailing slashes when not given', function () {
        url = $url.concat('foo', '/bar');
        expect(url[0]).not.toBe('/');
        expect(url[url.length - 1]).not.toBe('/');
      });
      it('should add slashes when none given', function () {
        url = $url.concat('foo', 'bar');
        expect(url).toBe('foo/bar');
      });
      it('should strip double slashes', function () {
        url = $url.concat('/foo/', '/bar/');
        expect(url).toBe('/foo/bar/');
      });
      it('should strip multiple slashes', function () {
        url = $url.concat('/foo/', '/', '/bar/');
        expect(url).toBe('/foo/bar/');
      });
      it('should keep double slashes for protocols', function () {
        url = $url.concat('http://foo/', 'bar/');
        expect(url).toBe('http://foo/bar/');
      });
      it('should strip redundant slashes after protocols', function () {
        url = $url.concat('http://', '/', '/bar/');
        expect(url).toBe('http://bar/');
      });
      it('should convert numbers to strings', function () {
        url = $url.concat('foo', 1, 'bar');
        expect(url).toBe('foo/1/bar');
        url = $url.concat('foo', 1.234, 'bar');
        expect(url).toBe('foo/1.234/bar');
      });
      it('should concatenate multiple numbers properly', function () {
        url = $url.concat(1, 2, 3);
        expect(url).toBe('1/2/3');
      });
      it('should ignore empty or invalid input', function () {
        url = $url.concat('foo', '', 'bar');
        expect(url).toBe('foo/bar');
        url = $url.concat('foo', false, 'bar');
        expect(url).toBe('foo/bar');
        url = $url.concat('foo', true, 'bar');
        expect(url).toBe('foo/bar');
        url = $url.concat('foo', null, 'bar');
        expect(url).toBe('foo/bar');
        url = $url.concat('foo', undefined, 'bar');
        expect(url).toBe('foo/bar');
      });
      it('should strip redundant single leading slashes', function () {
        url = $url.concat('/', '/foo');
        expect(url).toBe('/foo');
      });
      it('should strip redundant single trailing slashes', function () {
        url = $url.concat('foo/', '/');
        expect(url).toBe('foo/');
      });
    });
  });
})(window, window.angular);