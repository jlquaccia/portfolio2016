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
            .state('blog', {
                url: '/blog',
                controller: 'BlogCtrl as blog',
                templateUrl: '/templates/blog.html'
            })
            .state('projects', {
                url: '/projects',
                controller: 'ProjectsCtrl as projects',
                templateUrl: '/templates/projects.html'
            });
    }
    
    angular
        .module('jq2016Revamp', ['ui.router'])
        .config(config);
})();