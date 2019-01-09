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
            .when('/chat', {
                controller: 'ChatController',
                templateUrl: 'app/views/chat.html'
            })
            .otherwise({ redirectTo: '/posts' });
    })

    app.directive('onEnter', function() {
        return function(scope, element, attrs) {
            element.bind("keydown keypress", function(event) {
                if (event.which === 13) {
                    scope.$apply(function() {
                        scope.$eval(attrs.onEnter);
                    });

                    event.preventDefault();
                }
            });
        };
    });

}());