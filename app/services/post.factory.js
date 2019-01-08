(function() {
    var postFactory = function($http) {

        var factory = {};
        var apiUrl = 'http://jsonplaceholder.typicode.com/';

        factory.getPosts = function() {
            return $http.get(apiUrl + 'posts');
        };

        return factory;
    };

    postFactory.$inject = ['$http'];

    angular.module('postApp').factory('postFactory',
        postFactory);

}());