angular.module('myApp')
	.service('detailService',function($http,$q) {
		var service = {};
		service.getFoodDetails = function(){
			var defer = $q.defer();
			$http.get('/json/foodDetails.json').then(function(data){
				defer.resolve(data);
			},function(err){
				defer.reject(err);
			})
			return defer.promise;
		}
		return service;
	})