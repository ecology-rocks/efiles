/*jslint node: true */
/*global angular, dialog, fs */
'use strict';

angular.module('textEditor').controller('WordmodeController', ['$scope', function ($scope) {
    // use foreach to split elements and put href() around them
    //not functioning, obviously.
    function logArrayElements(element, index, array) {
        console.log('a[' + index + '] = ' + element);
    }
    
    $scope.myStory.split(" ").forEach(logArrayElements);

    

}]);