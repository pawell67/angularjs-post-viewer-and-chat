(function() {

    var PostController = function($scope, $log, postFactory) {
        $scope.posts = [];

        function init() {
            postFactory.getPosts()
                .then(function(response) {
                    $scope.posts = response.data;
                }, function(data, status, headers, config) {
                    $log.log(data.error + ' ' + status);
                });
        }

        init();
    };

    PostController.$inject = ['$scope', '$log', 'postFactory'];

    angular.module('postApp')
        .controller('PostController', PostController);

}());