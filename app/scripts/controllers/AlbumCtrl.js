 (function() {
     function AlbumCtrl(Fixtures) {
     this.albums = [];
     for (var i=0; i < 12; i++){
         this.albumData = Fixtures.getAlbum();
        }
     }
 
     angular
         .module('blocJams')
         .controller('AlbumCtrl', ['Fixtures', AlbumCtrl]);
 })();