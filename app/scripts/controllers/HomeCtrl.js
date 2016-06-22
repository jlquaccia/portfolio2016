(function() {
    function HomeCtrl($scope) {
        // Hamburger Icon Animation
        $scope.toggleMenu = function() {
            $('#nav-icon3').toggleClass('open');
            $('body').toggleClass('primary-navigation-opened');
            
            if (!$('.primary-navigation__inner').hasClass('fadeIn')) {
                $('.primary-navigation__inner').addClass('fadeIn');
            } else {
                $('.primary-navigation__inner').removeClass('fadeIn');
            }
        };
    }
    
    angular
        .module('jq2016Revamp')
        .controller('HomeCtrl', ['$scope', HomeCtrl]);
})();