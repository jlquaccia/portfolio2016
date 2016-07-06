(function() {
    function HomeCtrl($scope, $rootScope, Fixtures) {
        // Hamburger Icon Animation
        $rootScope.toggleMenu = function() {
            $('#nav-icon3').toggleClass('open');
            $('body').toggleClass('primary-navigation-opened');
            
            if (!$('.primary-navigation__inner').hasClass('fadeIn')) {
                $('.primary-navigation__inner').addClass('fadeIn');
            } else {
                $('.primary-navigation__inner').removeClass('fadeIn');
            }
        };
        
        this.projects = Fixtures.getProjects();
    }
    
    angular
        .module('jq2016Revamp')
        .controller('HomeCtrl', ['$scope', '$rootScope', 'Fixtures', HomeCtrl]);
})();