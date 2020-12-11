var assert = require('assert');
var loginController =  require('../../controllers/login.controller');

describe('LoginController', function () {

  describe('isValidUserId', function(){

    it('should return true if valid user id and exits in the list', function(){
      var isValid = loginController.isValidUserId(['abc123','xyz321'], 'abc123')
      assert.equal(isValid, true);
      //assert.isTrue(isValid, 'the user is in ListElements');
    });

    it('should return false if user id doesnt exist in the list', function(){
      var isValid = loginController.isValidUserId(['abc123','xyz321'],'abc1234')
      assert.equal(isValid, false);
    });

    it('should return false if invalid list and valid user id', function(){
      var isValid = loginController.isValidUserId([],'abc1234')
      assert.equal(isValid, false);
    });

    it('should return false if user id is not valid and the list exist', function(){
      var isValid = loginController.isValidUserId(['abc123','xyz321'], undefined)
      assert.equal(isValid, false);
    });

  });


});