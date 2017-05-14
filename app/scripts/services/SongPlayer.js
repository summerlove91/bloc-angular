(function() {
   
    function playSong(){
        currentBuzzObject.play();
        song.playing = true;
    }
    
    function SongPlayer(Fixtures) {
        var SongPlayer = {};
        var currentAlbum = Fixtures.getAlbum();
        
        var getSongIndex = function(song){
            return currentAlbum.songs.indexOf(song);
        };
       
        
        var currentBuzzObject = null;
         
         /**
        * @function setSong
        * @desc Stops currently playing song and loads new audio file as currentBuzzObject
        * @param {Object} song
        */
        var setSong = function(song) {
            if (currentBuzzObject) {
                stopSong();
            }
 
            currentBuzzObject = new buzz.sound(song.audioUrl, {
                formats: ['mp3'],
                preload: true
            });
 
            SongPlayer.currentSong = song;
        };
         
            SongPlayer.currentSong = null;
            SongPlayer.play = function(song) {
                song = song || SongPlayer.currentSong;
                if(SongPlayer.currentSong !== song) {
            
                setSong(song);    
                playSong();
                }
            };
         
            SongPlayer.pause = function(song) {
            song = song || SongPlayer.currentSong;
            currentBuzzObject.pause();
            song.playing = false;
            };
        
            SongPlayer.previous = function(){
                var currentSongIndex = getSongIndex(SongPlayer.currentSong);
                currentSongIndex--;
          
            if (currentSongIndex < 0) {
                stopSong();
            } else {
                var song = currentAlbum.songs[currentSongIndex];
                setSong(song);
                playSong(song);
            }
          };
          
          SongPlayer.next = function(){
             var currentSongIndex = getSongIndex(SongPlayer.currentSong); 
             currentSongIndex++;
             
              if (currentSongIndex > 10 ) {
                stopSong();
            } else {
                var song = currentAlbum.songs[currentSongIndex];
                setSong(song);
                playSong(song);    
            }  
          }
          
          return SongPlayer;
     }
        
       var stopSong = function(song){
           if (SongPlayer.currentSong ==! null){
               currentBuzzObject.stop();
               song.playing = null;
           }
       }
    
 
     angular
         .module('blocJams')
         .factory('SongPlayer', ['Fixtures', SongPlayer);
 })();
