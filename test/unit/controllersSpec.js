'use strict';

/* jasmine specs for controllers go here */

describe('controllers', function(){
  beforeEach(module('myApp.controllers'));


  it('should ....', inject(function($controller) {
    //spec body
    var $scope = {};
    var myCtrl1 = $controller('MyCtrl1', { $scope: $scope });
    expect(myCtrl1).toBeDefined();
    expect($scope.james).toEqual('James');
  }));

  it('should ....', inject(function($controller) {
    //spec body
    var myCtrl2 = $controller('MyCtrl2', { $scope: {} });
    expect(myCtrl2).toBeDefined();
  }));
});
