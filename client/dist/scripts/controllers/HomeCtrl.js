(function() {
    function HomeCtrl($scope, $rootScope, HamburgerMenu, Fixtures) {
        // Hamburger Icon Animation
        $rootScope.toggleMenu = function() {
            HamburgerMenu.toggleMenu();
        };
        
        this.projects = Fixtures.getProjects();
    }
    
    angular
        .module('jq2016Revamp')
        .controller('HomeCtrl', ['$scope', '$rootScope', 'HamburgerMenu', 'Fixtures', HomeCtrl]);
})();