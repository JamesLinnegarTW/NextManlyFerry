'use strict';

/* jasmine specs for directives go here */

describe('directives', function() {
  beforeEach(module('myApp.directives'));

  describe('app-version', function() {
    it('should print current version', function() {
      module(function($provide) {
        $provide.value('version', 'TEST_VER');
      });
      inject(function($compile, $rootScope) {
        var element = $compile('<span app-version></span>')($rootScope);
        expect(element.text()).toEqual('TEST_VER');
      });
    });
  });

  describe('aGreatEye', function(){

    it('Replaces the element with the appropriate content', function() {

      inject(function($compile, $rootScope) {
        var element = $compile("<a-great-eye></a-great-eye>")($rootScope);
        $rootScope.$digest();
        expect(element.html()).toContain("lidless, wreathed in flame, 2 times");
      });
    });
  });
});
