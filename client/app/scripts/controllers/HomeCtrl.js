(function() {
    function HomeCtrl($scope, $rootScope, HamburgerMenu, Fixtures) {
        // Hamburger Icon Animation
        $rootScope.toggleMenu = function() {
            HamburgerMenu.toggleMenu();
        };
        
        this.projects = Fixtures.getProjects();

        $scope.submitMessage = function() {
            $.post('http://localhost:4000/inquiries', {inquiry: {name: $scope.name, email: $scope.email, phone_number: $scope.phone_number, message: $scope.message}});

            console.log('message sent');

            $scope.name = '';
            $scope.email = '';
            $scope.phone_number = '';
            $scope.message = '';
        };
    }
    
    angular
        .module('jq2016Revamp')
        .controller('HomeCtrl', ['$scope', '$rootScope', 'HamburgerMenu', 'Fixtures', HomeCtrl]);
})();