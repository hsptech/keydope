var app=angular.module('myApp',['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'templates/home.html',
            controller:'homeCtrl'
        })
        .state('sample',{
        	url: '/sample',
        	templateUrl:'templates/sample.html',
        	controller:'sampleCtrl'
        })
        .state('sample.newbuzz',{
            url:'/newbuzz',
            templateUrl:'templates/newbuzz.html'
        })
        .state('sample.food',{
            url:'/food',
            templateUrl:'templates/food.html',
            controller:'foodCtrl'
        })
        .state('sample.places',{
            url:'/places',
            templateUrl:'templates/places.html'
        })
        .state('sample.hotels',{
            url:'/hotels',
            templateUrl:'templates/hotels.html'
        })
        
});