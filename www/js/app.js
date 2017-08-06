// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ionic','firebase'])

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});



//different pages = different states

app.config(function($stateProvider, $urlRouterProvider){
  $stateProvider.state('home', {
    url:'/',
    templateUrl: 'home.html'
  });

  $stateProvider.state('singleNote', {
    url:'/:id',
    templateUrl: 'singleNote.html',
    controller:'SingleNoteCtrl'
  });

  $stateProvider.state('Kontakt', {
    url:'/kontakt',
    templateUrl: 'Kontakt.html',
    controller:'KontaktCtrl'
  });

  $stateProvider.state('Gym', {
    url:'/gym',
    templateUrl: 'Gym.html',
    controller:'GymCtrl'
  });

  $stateProvider.state('Garage', {
    url:'/garage',
    templateUrl: 'Garage.html',
    controller:'GarageCtrl'
  });

  $stateProvider.state('Lokal', {
    url:'/lokal',
    templateUrl: 'Lokal.html',
    controller:'LokalCtrl'
  });

  $stateProvider.state('Forad', {
    url:'/forad',
    templateUrl: 'Forad.html',
    controller:'ForadCtrl'
  });

  $stateProvider.state('Lagenhet', {
    url:'/lagenhet',
    templateUrl: 'Lagenhet.html',
    controller:'LagenhetCtrl'
  });

  $stateProvider.state('Aktuellt', {
    url:'/aktuellt',
    templateUrl: 'Aktuellt.html',
    controller:'AktuelltCtrl'
  });

  $stateProvider.state('Infoblad', {
    url:'/infoblad',
    templateUrl: 'Infoblad.html',
    controller:'InfobladCtrl'
  });



$urlRouterProvider.otherwise('/');

});
