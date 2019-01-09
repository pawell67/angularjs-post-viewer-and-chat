(function() {

    var app = angular.module('postApp', ['ngRoute', 'ui.bootstrap']);

    app.config(function($routeProvider) {
        $routeProvider
            .when('/posts', {
                controller: 'PostsController',
                templateUrl: 'app/views/posts.html'
            })
            .when('/posts/:postId', {
                controller: 'PostController',
                templateUrl: 'app/views/post.html'
            })
            .otherwise({ redirectTo: '/posts' });
    })

}());