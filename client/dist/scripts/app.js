(function() {
    function config($stateProvider, $locationProvider) {
        $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false
            });
        
        $stateProvider
            .state('home', {
                url: '/',
                controller: 'HomeCtrl as home',
                templateUrl: '/templates/home.html'
            })
        
            // Posts Index
            .state('posts', {
                url: '/posts',
                controller: 'PostListCtrl as postList',
                templateUrl: '/templates/posts/index.html'
            })
            
            // Posts New
            .state('new', {
              url: '/posts/new',
              controller: 'PostAddCtrl as postAdd',
              templateUrl: '/templates/posts/new.html'
            })
        
            // Posts Edit
            .state('edit', {
              url: '/posts/:id/edit',
              controller: 'PostUpdateCtrl as postUpdate',
              templateUrl: '/templates/posts/edit.html'
            })
            // Posts Show
            .state('show', {
              url: '/posts/:id',
              controller: 'PostShowCtrl as postShow',
              templateUrl: '/templates/posts/show.html'
            })
            .state('projects', {
                url: '/projects',
                controller: 'ProjectsCtrl as projects',
                templateUrl: '/templates/projects.html'
            });
    }
    
    angular
        .module('jq2016Revamp', ['ui.router', 'ngResource', 'ngtimeago'])
        .config(config);
})();