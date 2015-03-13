var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
var assert = require('chai').assert;

chai.use(chaiAsPromised);

suite('CacheHelper', function() {
  setup(function() {

  });

  suite('Retrieving caches', function() {
    test('> get default cache', function() {
      assert.isTrue(true);
    });
  })
});
