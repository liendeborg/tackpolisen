const template = require('./videoplayer.html');
require('./videogular.scss');
require('./videoplayer.scss');

angular.module('app.tackpolisen.web')
    .component('videoplayer', {
        templateUrl: template,
        controller: VideoplayerController,
        bindings: {
            'content': '@'
        }
    });
    // .filter('trustUrl', function ($sce) {
    //     return function(url) {
    //         return $sce.trustAsResourceUrl(url);
    //     };
    // });
    
    VideoplayerController.$inject = ['$sce'];
    function VideoplayerController($sce) {
        const vm = this;

        vm.$onInit = function () {
            console.log("Media innehåller:");
            console.log(vm.content);

            vm.config = {
                //sources: vm.formatSources(vm.media),        
				sources: [
                    {src: $sce.trustAsResourceUrl("http://static.videogular.com/assets/videos/videogular.mp4"), type: "video/mp4"},
					{src: $sce.trustAsResourceUrl("http://static.videogular.com/assets/videos/videogular.webm"), type: "video/webm"},
					{src: $sce.trustAsResourceUrl("http://static.videogular.com/assets/videos/videogular.ogg"), type: "video/ogg"}
                    // {src: $sce.trustAsResourceUrl("http://static.videogular.com/assets/videos/videogular.mp4"), type: "video/mp4"},
					// {src: $sce.trustAsResourceUrl("http://static.videogular.com/assets/videos/videogular.webm"), type: "video/webm"},
					// {src: $sce.trustAsResourceUrl("http://static.videogular.com/assets/videos/videogular.ogg"), type: "video/ogg"}
				],
				tracks: [
					{
						src: "http://www.videogular.com/assets/subs/pale-blue-dot.vtt",
						kind: "subtitles",
						srclang: "en",
						label: "English",
						default: ""
					}
				],
                controls: true,
                loop: false,
                autoplay: true,
                startTime: -1,
                virtualClipDuration: -1,
                preload: false,
                theme: {
                    default: {
                        url: "node_modules/videogular/dist/themes/default/videogular.css"
                    }
                },
				plugins: {
                    controls: {
                        autohide: false,
                        autohideTime: 5000
                    },
					poster: "http://www.videogular.com/assets/images/videogular.png"
				}
			};

            //console.log(vm.videogularConfig.sources[0]);

        };



        vm.formatSources = function ( object ) {
            console.log("Object");
            console.log(object);
            let sources = [];
            let source = {};
            for(let i; i < object.media.length; i++) {
                source = {
                    'src': $sce.trustAsResourceUrl( object.media[i].src ), 
                    'type': object.media[i].type
                };
                sources.push(source);
            }
            return sources;
        }

    }