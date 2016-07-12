(function() {
  function Post($resource) {
    return $resource('http://localhost:4000/posts/:id.json', {}, {
      show: { method: 'GET' },
      update: { method: 'PUT', params: { id: '@id' } },
      delete: { method: 'DELETE', params: { id: '@id' } }
    });
  }
  
  angular
    .module('jq2016Revamp')
    .factory('Post', ['$resource', Post]);
})();