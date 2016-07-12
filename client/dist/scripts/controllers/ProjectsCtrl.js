(function() {
    function ProjectsCtrl($rootScope, HamburgerMenu) {
      // Hamburger Icon Animation
      $rootScope.toggleMenu = function() {
          HamburgerMenu.toggleMenu();
      };
    }
    
    angular
        .module('jq2016Revamp')
        .controller('ProjectsCtrl', ['$rootScope', 'HamburgerMenu', ProjectsCtrl]);
})();