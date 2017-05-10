const template = require('./card.html');
require('./card.scss');

require('slick-carousel/slick/slick.css');
require('slick-carousel/slick/slick-theme.css');

angular.module('app.tackpolisen.web')
    .component('card', {
        templateUrl: template,
        controller: CardController,
        bindings: {
            'content': '='
        }
    });
    
    //CardController.$inject = [];
    function CardController() {
        const vm = this;


        vm.$onInit = function () {
            vm.content = {
                handle: "@dudedudesson",
                media: [
                    {
                        type: "movie",
                        sources: [
                            {src: "http://static.videogular.com/assets/videos/videogular.mp4", type: "video/mp4"},
                            {src: "http://static.videogular.com/assets/videos/videogular.webm", type: "video/webm"},
                            {src: "http://static.videogular.com/assets/videos/videogular.ogg", type: "video/ogg"}
                        ]
                    },
                    {
                        type: "image",
                        url: "https://s3.eu-central-1.amazonaws.com/tackpolisen/3fd8cca2-3a95-4597-bcd4-5eb8dfd6ed76.jpeg"
                    },
                    {
                        type: "image",
                        url: "https://s3.eu-central-1.amazonaws.com/tackpolisen/3fd8cca2-3a95-4597-bcd4-5eb8dfd6ed76.jpeg"
                    },
                    {
                        type: "image",
                        url: "https://s3.eu-central-1.amazonaws.com/tackpolisen/3fd8cca2-3a95-4597-bcd4-5eb8dfd6ed76.jpeg"
                    },
                    {
                        type: "movie",
                        sources: [
                            {src: "http://static.videogular.com/assets/videos/videogular.mp4", type: "video/mp4"},
                            {src: "http://static.videogular.com/assets/videos/videogular.webm", type: "video/webm"},
                            {src: "http://static.videogular.com/assets/videos/videogular.ogg", type: "video/ogg"}
                        ]
                    }
                ],
                poster: "kristinfisher@maxemia.com",
                text: "Est qui reprehenderit nisi enim. Ad incididunt in tempor Lorem voluptate aliquip consequat pariatur ad sit adipisicing nulla anim cupidatat. Elit aliqua adipisicing esse deserunt consequat sint proident culpa aliqua adipisicing id eiusmod. Adipisicing laboris dolore commodo mollit ex voluptate. Ipsum deserunt id in id ut anim deserunt in qui nostrud id dolore exercitation duis. Aliquip in proident duis eiusmod velit ex sint adipisicing voluptate reprehenderit. Cillum ad elit irure consectetur duis fugiat est ut.\r\n",
                id: 11,
                name: "Kristin Fisher",
                type: "instagram"
            };
            //vm.content = JSON.parse(vm.content);

            // Angular Slick Carousel
            vm.slickConfig = {
                enabled: true,
                autoplay: false,
                draggable: true,
                fade: false,
                autoplaySpeed: 1500,
                dots: true,
                dotsClass: 'slick-dots',
                arrows: true,
                currentIndex: 0,
                adaptiveHeight: true,
                accessibility: false,
                easing: 'linear',
                edgeFriction: '1.15',
                infinite: true,
                initialSlide: 0,
                lazyLoad: 'ondemand',
                mobileFirst: true,
                respondTo: 'window',
                swipe: true,
                swipeToSlide: true,
                touchMove: true,
                touchThreshold: 5,
                useTransform: true,
                method: {},
                event: {
                    beforeChange: function (event, slick, currentSlide, nextSlide) {
                    
                    },
                    afterChange: function (event, slick, currentSlide, nextSlide) {
                    //$scope.slickCurrentIndex = currentSlide;
                    },
                    breakpoint: function (event, slick, breakpoint) {
                    
                    },
                    destroy: function (event, slick) {
                    
                    },
                    edge: function (event, slick, direction) {
                    
                    },
                    reInit: function (event, slick) {
                    
                    },
                    init: function (event, slick) {
                    
                    },
                    setPosition: function (evnet, slick) {
                    
                    },
                    swipe: function (event, slick, direction) {
                    
                    }
                }
            };

        };

        vm.getFacebookLink = function( handle ) {
            var profile = handle.replace(/[@]/g, ""); 
            return 'https://www.facebook.com/'+profile;
        }
        vm.getTwitterLink = function( handle ) {
            var profile = handle.replace(/[@]/g, "");
            return 'https://twitter.com/'+profile;
        }
        vm.getInstagramLink = function( handle ) {
            var profile = handle.replace(/[@]/g, "");
            return 'https://www.instagram.com/'+profile;
        }
    }