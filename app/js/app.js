'use strict'
var app = angular.module('app',['ui.router']);

app.config(function($stateProvider,$urlRouterProvider){
    $stateProvider
    .state('home',{
        url:'/',
        templateUrl:'templates/home.html'
    })
    .state('md6',{
        url:'/md6',
        templateUrl:'templates/md6.html'
    })
    .state('about',{
        url:'/about',
        templateUrl:'templates/about.html'
    })
    .state('shop',{
        url:'/shop',
        templateUrl:'templates/shop.html'
    })
    .state('contact',{
        url:'/contact',
        templateUrl:'templates/contact.html'
    })
    .state('volounteer',{
        url:'/volounteer',
        templateUrl:'templates/volounteer.html',
        controller:'volunteer'
    });
    
    $urlRouterProvider.otherwise('/');
});