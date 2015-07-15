
/**
 * Module definition and dependencies
 */
angular.module('Url.Service', [])

/**
 * Factory definition
 */
.factory('$url', function() {
  return {

    /**
     * Url concatenation helper
     */
    concat: function() {
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
      return parts.join('/').replace(/([^:])(\/\/+)/g, '$1/');
    },

    /**
     * Encode URI component
     */
    encodeUriComponent: function(str, pctEncodeSpaces) {
      return encodeURIComponent(str)
        .replace(/%40/g, '@')
        .replace(/%3A/gi, ':')
        .replace(/%24/g, '$')
        .replace(/%2C/gi, ',')
        .replace(/%20/g, (pctEncodeSpaces ? '%20' : '+'));
    },

    /**
     * Encode URI segments
     */
    encodeUriSegment: function(str) {
      return this.encodeUriComponent(str, true).
        replace(/%26/gi, '&').
        replace(/%3D/gi, '=').
        replace(/%2B/gi, '+');
    }
  };
});
