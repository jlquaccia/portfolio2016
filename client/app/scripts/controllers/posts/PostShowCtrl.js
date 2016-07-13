(function() {
  function PostShowCtrl($scope, $rootScope, $stateParams, HamburgerMenu, Post) {
    $scope.post = Post.get({id: $stateParams.id});

    // Hamburger Icon Animation
    $rootScope.toggleMenu = function() {
        HamburgerMenu.toggleMenu();
    };
  }

  angular
    .module('jq2016Revamp')
    .controller('PostShowCtrl', ['$scope', '$rootScope', '$stateParams', 'HamburgerMenu', 'Post', PostShowCtrl]);
})();