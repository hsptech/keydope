angular.module('myApp')
	.controller('hotelCtrl',function($scope,detailService) {
		function foodDetails(){
			detailService.getFoodDetails()
			.then(function(res){
				$scope.hotels = res.data.data;
			},function(err){
				console.log(err);
			});
		}
		foodDetails();
	})