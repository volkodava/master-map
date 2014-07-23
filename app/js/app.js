/*global angular*/

"use strict";

var masterMapApp = angular.module("masterMapApp", [
    "masterMapApp.services",
    "masterMapApp.controllers",
    "masterMapApp.filters",
    "masterMapApp.directives",
    "ui.bootstrap"
]);

masterMapApp.config(function ($routeProvider) {
    $routeProvider
        .when("/",
        {
            controller: "ZipCodeFrmCtrl",
            templateUrl: "partials/zipcode.html"
        })
        .when("/search/:zipcode/:place",
        {
            controller: "SearchCtrl",
            templateUrl: "partials/search.html"
        })
        .otherwise({ redirectTo: "/" });
});