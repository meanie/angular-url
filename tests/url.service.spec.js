
/**
 * Specifications
 */
describe('Url', function() {

  //Load module and service
  beforeEach(module('Url.Service'));

  //Inject url service
  var $url;
  beforeEach(inject(function(_$url_) {
    $url = _$url_;
  }));

  /**
   * Concatenation
   */
  describe('concatenation', function() {
    var url;
    it('should just return one URL part', function() {
      url = $url.concat('/foo');
      expect(url).toBe('/foo');
    });
    it('should concatenance two URL parts', function() {
      url = $url.concat('/foo', '/bar');
      expect(url).toBe('/foo/bar');
    });
    it('should concatenance multiple URL parts', function() {
      url = $url.concat('/foo', '/bar', '/foo', '/bar');
      expect(url).toBe('/foo/bar/foo/bar');
    });
    it('should keep leading and trailing slashes', function() {
      url = $url.concat('/foo', '/bar/');
      expect(url[0]).toBe('/');
      expect(url[url.length - 1]).toBe('/');
    });
    it('should not add leading or trailing slashes when not given', function() {
      url = $url.concat('foo', '/bar');
      expect(url[0]).not.toBe('/');
      expect(url[url.length - 1]).not.toBe('/');
    });
    it('should add slashes when none given', function() {
      url = $url.concat('foo', 'bar');
      expect(url).toBe('foo/bar');
    });
    it('should strip double slashes', function() {
      url = $url.concat('/foo/', '/bar/');
      expect(url).toBe('/foo/bar/');
    });
    it('should strip multiple slashes', function() {
      url = $url.concat('/foo/', '/', '/bar/');
      expect(url).toBe('/foo/bar/');
    });
    it('should keep double slashes for protocols', function() {
      url = $url.concat('http://foo/', 'bar/');
      expect(url).toBe('http://foo/bar/');
    });
    it('should strip redundant slashes after protocols', function() {
      url = $url.concat('http://', '/', '/bar/');
      expect(url).toBe('http://bar/');
    });
    it('should convert numbers to strings', function() {
      url = $url.concat('foo', 1, 'bar');
      expect(url).toBe('foo/1/bar');
      url = $url.concat('foo', 1.234, 'bar');
      expect(url).toBe('foo/1.234/bar');
    });
    it('should concatenate multiple numbers properly', function() {
      url = $url.concat(1, 2, 3);
      expect(url).toBe('1/2/3');
    });
    it('should ignore empty or invalid input', function() {
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
  });
});
