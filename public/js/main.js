var app = angular.module('etsApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {

  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/portfolio");

  // Now set up the states
  $stateProvider
    .state('portfolio', {
      url: "/portfolio",
      controller:"PortfolioCtrl",
      templateUrl: "../html/portfolio-view.html",
      data: {
        img:"portfolio.jpg"
      }
    })
    .state('blog', {
      url: "/blog",
      controller:"BlogCtrl",
      templateUrl: "../html/blog-view.html",
      data: {
        img:"blog.jpg"
      }
    })
    .state('experiments', {
      url: "/experiments",
      controller:"ExperimentsCtrl",
      templateUrl: "../html/experiments-view.html",
      data: {
        img:"experiments.gif"
      }
    });
});

app.controller('NavCtrl', function($scope, $state){
	$scope.state = $state;
});

app.filter('trust', ['$sce', function($sce){
    return function(text) {
        return $sce.trustAsHtml(text);
    };
}]);
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
app.controller('ExperimentsCtrl', function($scope, $http){
	$http.get('/experiments/server/data/experiments.json')
		.success(function(data){
			$scope.experiments = data;
			console.log(data);
	});
});
app.controller('PortfolioCtrl', function($scope, $http, $sce) {
  
  $http.get('/portfolio/server/data/portfolio.json')
	  .success(function(data){
	    $scope.portfolio = data;        
	  })
	  .error(function(data){
	    console.log('Error: ' + data);
	  });
});