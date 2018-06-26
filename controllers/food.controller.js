angular.module('myApp')
	.controller('foodCtrl',function($scope,detailService) {
		function foodDetails(){
			detailService.getFoodDetails()
			.then(function(res){
				$scope.foods = res.data.data;
			},function(err){
				console.log(err);
			});
		}
		foodDetails();
	})