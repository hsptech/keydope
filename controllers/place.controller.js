angular.module('myApp')
.controller('placeCtrl',function($scope,detailService) {
	function placeDetails(){
		detailService.getPlaceDetails()
		.then(function(res){
			$scope.places = res.data.data;
		},function(err){
			console.log(err);
		});
	}
	placeDetails();
})