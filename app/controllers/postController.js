(function() {

    var PostController = function($scope, $log, $routeParams, postFactory) {
        var postId = $routeParams.postId;
        $scope.post = null;
        $scope.author = null;
        $scope.comments = null;

        function init() {
            postFactory.getPost(postId)
                .then(function(response) {
                    $scope.post = response.data;
                    console.log($scope.post)
                    postFactory.getAuthor($scope.post.userId)
                        .then(function(response) {
                            $scope.author = response.data;
                            console.log($scope.author)
                        }, function(data, status, headers, config) {
                            $log.log(data.error + ' ' + status);
                        });
                }, function(data, status, headers, config) {
                    $log.log(data.error + ' ' + status);
                });

            postFactory.getComments(postId)
                .then(function(response) {
                    $scope.comments = response.data;
                    console.log($scope.comments)
                }, function(data, status, headers, config) {
                    $log.log(data.error + ' ' + status);
                });
        }

        init();
    };

    PostController.$inject = ['$scope', '$log', '$routeParams', 'postFactory'];

    angular.module('postApp')
        .controller('PostController', PostController);

}());