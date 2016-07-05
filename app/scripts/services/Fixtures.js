(function() {
    function Fixtures() {
        var Fixtures = {};
        var projects = [
            {
                title: 'Bloc Chat',
                imageUrl: '/assets/images/projects/bloc_chat.png',
                description: 'Coming soon: an actual description.'
            },
            
            {
                title: 'Bloc Jams',
                imageUrl: '/assets/images/projects/bloc_jams.png',
                description: 'Coming soon: an actual description.'
            },
            
            {
                title: 'The Music Project',
                imageUrl: '/assets/images/projects/artist_recommendations.png',
                description: 'Coming soon: an actual description.'
            },
            
            {
                title: 'Markitoff',
                imageUrl: '/assets/images/projects/markitoff.png',
                description: 'Coming soon: an actual description.'
            },
            
            {
                title: 'Simply Put Your Way',
                imageUrl: '/assets/images/projects/simply-put-your-way.png',
                description: 'Coming soon: an actual description.'
            },
            
            {
                title: 'Festival Quiz',
                imageUrl: '/assets/images/projects/festival-quiz.png',
                description: 'Coming soon: an actual description.'
            },
            
            {
                title: 'Wikiland',
                imageUrl: '/assets/images/projects/wikiland.png',
                description: 'Coming soon: an actual description.'
            }
        ];
        
        Fixtures.getProjects = function() {
            return projects;
        };
        
        return Fixtures;
    }
    
    angular
        .module('jq2016Revamp')
        .factory('Fixtures', [Fixtures]);
})();