app.controller('ExperimentsCtrl', function($scope, $http){
	$http.get('/experiments/server/data/experiments.json')
		.success(function(data){
			$scope.experiments = data;
			console.log(data);
	});
});