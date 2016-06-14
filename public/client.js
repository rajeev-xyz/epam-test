var myApp = angular.module('app', []);

myApp.controller('homeCtrl', function($http, $scope) {
    getArticles();

    function getArticles() {
        $http.get("/articles").then(function(response) {
            $scope.articles = response.data;
            console.log($scope.articles);
        });
    };

    $scope.fetchContent = function(id) {
      console.log(id); 
      var content = $('#article-content-desc');
      $http.post("/section",{"id":id}).then(function(response) {
        var res = response.data;
        content[0].innerHTML = "<h1>"+res.title+"</h1>"+ "<p>"+res.content+"</p>";
        
      });
    }
  
});