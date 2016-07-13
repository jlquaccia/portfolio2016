(function() {
  function PostUpdateCtrl($scope, $rootScope, $resource, $state, $stateParams, Post, HamburgerMenu) {
    $scope.post = Post.get({id: $stateParams.id});
    
    $scope.update = function() {
      if ($scope.postForm.$valid) {
        Post.update({id: $scope.post.id}, {post: $scope.post}, function() {
          $state.go('posts');
        }, function(error) {
          console.log(error);
        });
      }
    };

    // Hamburger Icon Animation
    $rootScope.toggleMenu = function() {
        HamburgerMenu.toggleMenu();
    };
  }
  
  angular
    .module('jq2016Revamp')
    .controller('PostUpdateCtrl', ['$scope', '$rootScope', '$resource', '$state', '$stateParams', 'Post', 'HamburgerMenu', PostUpdateCtrl]);
})();