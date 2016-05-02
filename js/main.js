 angular.module('palindroneApp', ["ngRoute","ngResource","palindoneApp.controllers","palindroneApp.services"])
.config(['$routeProvider', function($routeProvider) {
    $routeProvider   
 .when('/', {
    templateUrl: 'views/write.html',
    controller: "listController",
 })
  
 .when('/write',{
    templateUrl : 'views/write.html',
    controller: "reverseController"
 })
    
 .when('/read', {
     templateUrl : 'views/read.html',
     
 })
}]);