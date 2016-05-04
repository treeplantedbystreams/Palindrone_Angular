var app= angular.module('palindroneApp', ["ngRoute"]);
app.config(['$routeProvider', function($routeProvider) {
    $routeProvider   
 .when('/write', {
    templateUrl: 'views/write.html',
    controller: "mainController",
 })
  
 .when('/read',{
    templateUrl : 'views/read.html',
    controller: "palindroneController",

 })
    
 .when('/', {
         templateUrl: 'views/home.html',
 })
}]);


app.controller('mainController', ['$scope','$location','$rootScope', function($scope,$location,$rootScope){ 
        $scope.addPost=function(postText){  
            var postText= $scope.postText;
            var words = postText.split(" ");
            var output = new Array(); 
            words.forEach(function(word) {
                $rootScope.$broadcast(output.push(word.split("").reverse("").join("")));
                }); 
            
            if (postText == null|| postText == ''){
                alert('You need to enter a word.');
            } 
            else{
                console.log(output); 
                $location.path('/read');
            };             
        }; 
}]);
app.controller('palindroneController', ['$scope','$location', function($scope,$location){ 
            $scope.$on("output", function(event,addPost){  
            $scope.output = $scope.addPost(output);
            }); 
}]);


  

  