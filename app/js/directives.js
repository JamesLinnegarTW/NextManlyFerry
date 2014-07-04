'use strict';

/* Directives */


angular.module('myApp.directives', []).
  directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }]).

  directive('aGreatEye', function () {
    return {
        restrict: 'E',
        replace: true,
        template: '<p class="james">lidless, wreathed in flame, {{1 + 1}} times</p>'
    };
  })
  ;
