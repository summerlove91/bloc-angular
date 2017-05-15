(function() {
    function SongPlayer($rootScope, Fixtures) {
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
            
            currentBuzzObject.bind('timeupdate', function() {
                $rootScope.$apply(function() {
                    SongPlayer.currentTime = currentBuzzObject.getTime();
                });
            });
 
            SongPlayer.currentSong = song;
        };
         
            SongPlayer.currentSong = null;
            /**
            * @desc Current playback time (in seconds) of currently     playing song
            * @type {Number}
            */
            SongPlayer.currentTime = null;
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
          
          /**
          * @function setCurrentTime
          * @desc Set current time (in seconds) of currently playing song
          * @param {Number} time
          */
          SongPlayer.setCurrentTime = function(time) {
                if (currentBuzzObject) {
                    currentBuzzObject.setTime(time);
                }
            };
        
          var SongPlayer.volume = null;
        
          SongPlayer.setVolume = function(volume) {
              if (currentBuzzObject){
                  currentBuzzObject.setVolume(volume);
              }
          };
          
          return SongPlayer;
        }
        
    
    
       
        function playSong(){
            currentBuzzObject.play();
            song.playing = true;
        }
    
       var stopSong = function(song){
           if (SongPlayer.currentSong ==! null){
               currentBuzzObject.stop();
               song.playing = null;
           }
       }
    
 
     angular
         .module('blocJams')
         .factory('SongPlayer', ['$rootScope', 'Fixtures', SongPlayer]);
 })();
