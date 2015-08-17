app.controller('BlogCtrl', function($scope, $http, $sce) {
   $scope.date = new Date();
  $http.get('/blog/server/data/blog.json')
	  .success(function(data){
	    $scope.blog = data;            
	  })
	  .error(function(data){
	    console.log('Error: ' + data);
	  });
});