/*jslint node: true */
/*global angular, dialog, fs */
'use strict';

angular.module('textEditor').controller('FileopsController', ['$scope', function ($scope) {

    
    this.openFile = function () {
        dialog.showOpenDialog({ filters: [
            { name: 'text', extensions: ['txt', 'gram', 'md'] }
        ]}, function (fileNames) {
            if (fileNames === undefined) {
                return;
            }
            var fileName = fileNames[0];
            fs.readFile(fileName, 'utf-8', function (err, data) {
                document.getElementById("editor").value = data;
            });
        });
    };
    
    this.saveFile = function () {
        dialog.showSaveDialog({ filters: [
            { name: 'text', extensions: ['txt', 'gram', 'md'] }
        ]}, function (fileName) {
            if (fileName === undefined) {
                return;
            }
            fs.writeFile(fileName, document.getElementById("editor").value, function (err) {
                console.log(err);
                if (err === null) {
                    dialog.showMessageBox({ message: "The file has been saved! :-)",
                        buttons: ["OK"] });
                } else {
                    dialog.showErrorBox("File Save Error", err.message);
                }
            });
        });
    };
    
    this.newFile = function () {

        dialog.showMessageBox({
            message: "This will clear your progress. Are you sure? Have you saved?",
            buttons: ["OK", "Cancel"]
        }, function (buttonIndex) {
            
           //doesn't work;
            //need to set $scope.myStory = null when button OK is clicked
            //its not autoupdating
        });
        

        
        
    };

}]);