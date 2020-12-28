(function () {
  'use strict';
  angular.module('checkEat', [])
  .controller('LunchCheckController', LunchCheckController);
  function LunchCheckController($scope) {
    $scope.value = ''
    $scope.message = ''
    $scope.check = function() {
      const len = caculateLength($scope.value)
      if (len <= 3 && len > 0) {
        $scope.message = 'Enjoy!'
      } else if (len > 3){
        $scope.message = 'Too muck!'
      } else if (len === 0) {
        $scope.message = 'Please enter data first!'
      }
    }
    function caculateLength(string) {
      if (!string) {
        return 0
      }
      return string.split(',').length
    }
  }
  })();