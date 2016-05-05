var app= angular.module('palindroneApp', ["ngRoute"]);
app.config(['$routeProvider', function($routeProvider) {
    $routeProvider   
 .when('/', {
    templateUrl: 'views/write.html',
    controller: "mainController",
 })
  
 .when('/read/:param',{
    templateUrl : 'views/read.html',
    controller: "palindroneController",
 })
 .otherwise('/', {
         templateUrl: 'views/write.html',
 })
}]);
app.controller('mainController', ['$scope','$location','$rootScope', function($scope, $location, $rootScope){ 
        $scope.addPost=function(postText){  
            var postText=$scope.postText;
            console.log(postText);
            if (postText == null|| postText == '') {
                alert('You need to enter a word.');
            }
                else {
                console.log(postText); 
                $location.path("read/" + postText);    
            }
        };             
}]);
app.controller('palindroneController', ['$scope','$location','$routeParams', function($scope,$location,$routeParams){ 
     $scope.firstword = $routeParams.param;
     console.log("inside palindronecontroller");
     $scope.reverseword = $routeParams.param.split("").reverse("").join("");   
                              
}]);

// app.controller("submitPostController",['$scope',"postFactory", function($scope, postService){
    
//     $scope.addPost = function(){
//         console.log($scope.post);
//         postService.save($scope.post);
      
//     };
       
// }]);
  

  