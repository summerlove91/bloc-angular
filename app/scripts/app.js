(function(){
    function config($stateProvider, $locationProvider){
    $locationProvider
         .html5Mode({
             enabled: true,
             requireBase: false
         });
    $stateProvider
         .state('landing', {
             url: '/',
             templateUrl: '/templates/landing.html'
        })
         .state('album', {
             url: '/album/',
             controller: 'AlbumCtrl as album',
             templateUrl: '/templates/album.html'
        });
        .state('colletion', {
             url: '/collection/',
             controller: 'CollectionCtrl as collection',
             templateUrl: '/templates/collection.html'
        });
        .state ('albumdata', {
             url: '/albumdata'
            : '/scripts/fixtures.js'
        })
        
    }
    
    angular
        .module('blocJams',['ui.router'])
        .config(config);
})();
