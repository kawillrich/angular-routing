let myApp = angular.module("myApp", ["ngRoute"]);

let myAppCtrl = myApp.controller("myAppCtrl", [
  "$scope",
  function myAppCtrl($scope) {
    $scope.data = {
        message: "Howdy"
     };
  },
]);

myApp.config([
  "$routeProvider",
  "$locationProvider",
  function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix("!");
    $routeProvider
      .when("/home", {
        templateUrl: "partials/home.html",
      })
      .when("/about", {
        templateUrl: "partials/about.html",
      })
      .when("/contact", {
        templateUrl: "partials/contact.html",
      })
      .otherwise({ redirectTo: "/home" });
  },
]);
