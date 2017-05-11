const template = require('./videoplayer.html');
require('./videoplayer.scss');
// require('./videogular.scss');
// require('./fonts/videogular.woff');
// require('./fonts/videogular.ttf');
// require('./fonts/videogular.svg');
// require('./fonts/videogular.eot');
// require('./fonts/videogular.dev.svg');

angular.module('app.tackpolisen.web')
    .component('videoplayer', {
        templateUrl: template,
        controller: VideoplayerController,
        bindings: {
            'content': '<'
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
            //vm.content = JSON.parse(vm.content);
            //console.log(vm.content);
            console.log("Kom in i videogular");
            var fileSource = vm.getMediaFile(vm.content);
            //console.log(vm.getMediaFile(vm.content));
            vm.API = null;
            vm.onPlayerReady = function ($API) { 
                vm.$API = $API; 
            };
            vm.config = {
                sources: fileSource,        
                controls: true,
                loop: false,
                autoplay: true,
                startTime: -1,
                virtualClipDuration: -1,
                preload: false,
                theme: {
                    default: {
                        //url: "node_modules/videogular/dist/themes/default/videogular.css"
                        url: "node_modules/videogular-themes-default/videogular.css"
                    }
                },
				plugins: {
                    controls: {
                        autohide: false,
                        autohideTime: 5000
                    },
					// poster: "http://www.videogular.com/assets/images/videogular.png"
                    poster: "http://upload.wikimedia.org/wikipedia/commons/5/5f/Sky_Blue.png"
				},
                sources: [
                 {src: $sce.trustAsResourceUrl("http://static.videogular.com/assets/videos/videogular.mp4"), type: "video/mp4"},
					{src: $sce.trustAsResourceUrl("http://static.videogular.com/assets/videos/videogular.webm"), type: "video/webm"},
					{src: $sce.trustAsResourceUrl("http://static.videogular.com/assets/videos/videogular.ogg"), type: "video/ogg"}
				],
				tracks: [
					{
						src: "http://www.videogular.com/assets/subs/pale-blue-dot.vtt",
						kind: "subtitles",
						srclang: "en",
						label: "English",
						default: ""
					}
				]
			};
        };


        vm.getMediaFile = function(post) {
            // console.log(post);
            let sources = [];
            let fileUrl, fileType = '';

            for(let i = 0; i < post.sources.length; i++) {
                let file = {
                    src: '',
                    type: ''
                };
                fileUrl = post.sources[i].src;
                fileType = post.sources[i].type;

                // http://static.videogular.com/assets/videos/videogular.mp4
                file.src = $sce.trustAsResourceUrl(fileUrl); 
                // video/mp4
                file.type = fileType;

                // console.log("FILE "+i);
                // console.log(file);
                sources.push(file);
                // console.log("SOURCES "+i);
                // console.log(sources[i]);                

            }
            // console.log("####################");
            // console.log(sources);
            return sources;
        }
    }