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
        img:"hipster.jpg"
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