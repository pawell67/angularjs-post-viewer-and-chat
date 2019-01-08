(function() {

    var app = angular.module('postApp', ['ngRoute', 'ui.bootstrap']);

    app.config(function($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'PostController',
                templateUrl: 'app/views/posts.html'
            })
            .when('/:postId', {
                controller: 'PostController',
                templateUrl: 'app/views/post.html'
            })
            .otherwise({ redirectTo: '/' });
    })

}());