(function() {
    function HomeCtrl($scope) {
        // Hamburger Icon Animation
        $scope.toggleMenu = function() {
            $('#nav-icon3').toggleClass('open');
        };
    }
    
    angular
        .module('jq2016Revamp')
        .controller('HomeCtrl', ['$scope', HomeCtrl]);
})();