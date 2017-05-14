(function(){
    function config($stateProvider, $locationProvider){
    $locationProvider
         .html5Mode({
             enabled: true,
             requireBase: false
         });
    $stateProvider
        .state('landing', {
             url: '/landing',
             templateUrl: '/templates/landing.html'
        })
        .state('album', {
             url: '/album',
             controller: 'AlbumCtrl as album',
             templateUrl: '/templates/album.html'
        })
        .state('collection', {
             url: '/collection',
             controller: 'CollectionCtrl as collection',
             templateUrl: '/templates/collection.html'
        })
        .state('playerbar', {
             url: '/playerbar',
             controller: 'PlayerBarCtrl as playerbar',
             
        })
 
    }
    
    angular
        .module('blocJams', ['ui.router'])
        .config(config);
})();
