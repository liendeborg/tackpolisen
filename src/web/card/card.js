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
    
    // CardController.$inject = ['slickCarousel'];    
    // function CardController(slickCarousel) {
    function CardController() {
        const vm = this;
        

        vm.$onInit = function () {

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