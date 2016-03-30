/*jslint node: true */
/*global angular, dialog, fs */
'use strict';

angular.module('textEditor').controller('WordmodeController', ['$scope', 'MyStory', function ($scope, MyStory) {
    
    var updateStory = function () {
            $scope.story = MyStory.getValue();
            $scope.storywords = $scope.story.split(" ");
            console.log($scope.storywords);
        };
    
    $scope.$on('increment-value-event', updateStory);
    
    this.editModeInit = function () {
        // need to update the ngShow w/ the editor to look at the service value instead
        // then we can update between controllers to toggle views.
        console.log("yay!");
    };
    
}]);