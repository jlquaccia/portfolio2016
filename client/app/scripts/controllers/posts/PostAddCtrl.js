(function() {
  function PostAddCtrl($scope, $rootScope, $resource, $state, Posts, HamburgerMenu) {
    var vm = this;
    $scope.save = function() {
      if ($scope.postForm.$valid) {
        Posts.create({post: vm.post}, function() {
          $state.go('posts');
        }, function(errors) {
          console.log(error);
        });
      }

      console.log(vm.post);
    };

    // Hamburger Icon Animation
    $rootScope.toggleMenu = function() {
        HamburgerMenu.toggleMenu();
    };
  }
  
  angular
    .module('jq2016Revamp')
    .controller('PostAddCtrl', ['$scope', '$rootScope', '$resource', '$state', 'Posts', 'HamburgerMenu', PostAddCtrl]);
})();