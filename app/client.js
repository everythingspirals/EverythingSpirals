var app = angular.module('etsApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {

  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/portfolio");

  // Now set up the states
  $stateProvider
    .state('portfolio', {
      url: "/portfolio",
      controller:"PortfolioCtrl",
      templateUrl: "/modules/portfolio/client/portfolio-view.html"
    })
    .state('blog', {
      url: "/blog",
      controller:"BlogCtrl",
      templateUrl: "/modules/blog/client/blog-view.html"
    });
});

app.filter('trust', ['$sce', function($sce){
    return function(text) {
        return $sce.trustAsHtml(text);
    };
}]);