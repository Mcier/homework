'use strict';

/**
 * @ngdoc overview
 * @name homeworkApp
 * @description
 * # homeworkApp
 *
 * Main module of the application.
 */
angular.module('homeworkApp',['ui.router']).config(function ($stateProvider,$urlRouterProvider){
   $stateProvider.state('diva',{
   		url:'/diva',
   		templateUrl:'views/diva.html',
   		controller:'diva'
   }).state('divb',{
   		url:'/divb',
   		templateUrl:'views/divb.html',
   		controller:'divb'
   })
   
  });
  
