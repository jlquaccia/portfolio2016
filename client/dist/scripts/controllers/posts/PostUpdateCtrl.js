(function() {
  function PostUpdateCtrl($scope, $resource, Post, $state, $stateParams) {
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
  }
  
  angular
    .module('jq2016Revamp')
    .controller('PostUpdateCtrl', ['$scope', '$resource', 'Post', '$state', '$stateParams', PostUpdateCtrl])
})();