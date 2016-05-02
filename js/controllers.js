var app = angular.module("myBlogApp.controllers",[])
app.controller("listController",['$scope',"$http" ,function($scope, $http){
  $scope.posts= [];
  $http.get("http://localhost:3000/api/posts/").success(function(data){
      $scope.posts = data;
  });  



}]);
app.controller("reverseController",['$scope',"$http","postFactory", function($scope, $http, postFactory){
    
    $scope.addPost = function(){
        console.log($scope.post);
        postFactory.save($scope.post);
      
    };
       
}]);
