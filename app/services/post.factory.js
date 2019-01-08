(function() {
    var postFactory = function($http) {

        var factory = {};
        var apiUrl = 'http://jsonplaceholder.typicode.com/';

        factory.getPosts = function() {
            return $http.get(apiUrl + 'posts');
        };

        factory.getPost = function(postId) {
            return $http.get(apiUrl + 'posts/' + postId);
        }

        factory.getAuthor = function(authorId) {
            return $http.get(apiUrl + 'users/' + authorId);
        }

        factory.getComments = function(postId) {
            return $http.get(apiUrl + 'comments?postId=' + postId);
        }

        return factory;
    };

    postFactory.$inject = ['$http'];

    angular.module('postApp').factory('postFactory',
        postFactory);

}());