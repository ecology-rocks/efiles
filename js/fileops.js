/*jslint node: true */
/*global angular, dialog, fs */
'use strict';

angular.module('textEditor').controller('FileopsController', ['$scope', function ($scope) {

    //initialize models
    $scope.myStory = "";
    $scope.showEditor = true;
    this.showEditor = $scope.showEditor;

    
    
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
    
    
    
    /* 
        This doesn't work because the page isn't listening for changes in showEditor.
        I should make a custom directive templating the textEditor, so that I can call
        as needed to show/hide.
    
    
    */
    this.wordModeInit = function () {
        console.log("I'm here!");
        $scope.showEditor = false;
    
    };


}]);