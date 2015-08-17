app.controller('PortfolioCtrl', function($scope, $http, $sce) {
  
  $http.get('/portfolio/server/data/portfolio.json')
	  .success(function(data){
	    $scope.portfolio = data;        
	  })
	  .error(function(data){
	    console.log('Error: ' + data);
	  });
});