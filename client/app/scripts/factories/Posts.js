(function() {
  function Posts($resource) {
    return $resource('http://localhost:4000/posts.json', {}, {
      query: { method: 'GET', isArray: true },
      create: { method: 'POST' }
    });
  }
  
  angular
    .module('jq2016Revamp')
    .factory('Posts', ['$resource', Posts]);
})();