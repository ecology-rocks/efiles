/*jslint node: true */
'use strict';

var remote = require('remote');
var dialog = remote.require('dialog');
var angular =   require('angular');
var fs = require('fs');

angular.module('textEditor', [])

    .factory('MyStory', function () {

    // private
        var story = "";

    // public
        return {
      
            getValue: function () {
                return story;
            },
      
            setValue: function (val) {
                story = val;
            }
      
        };
    
    
    })






    .factory('EditorMode', function () {

    // private
        var editor = "";

    // public
        return {
      
            getValue: function () {
                return editor;
            },
      
            setValue: function (val) {
                editor = val;
            }
      
        };
    
    
    });
