(function() {
  function PostListCtrl($scope, $rootScope, $http, $resource, $state, Posts, Post, HamburgerMenu) {
    $scope.posts = Posts.query();
    
    $scope.deletePost = function(postId) {
      if (confirm('Are you sure you want to delete this post?')) {
        Post.delete({id: postId}, function() {
          $scope.posts = Posts.query();
          $state.go('posts');
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
    .controller('PostListCtrl', ['$scope', '$rootScope', '$http', '$resource', '$state', 'Posts', 'Post', 'HamburgerMenu', PostListCtrl]);
})();