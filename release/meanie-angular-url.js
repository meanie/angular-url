/**
 * meanie-angular-url * https://github.com/meanie/angular-url
 *
 * Copyright (c) 2016 Adam Buczynski <me@adambuczynski.com>
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