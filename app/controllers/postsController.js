(function() {

    var PostsController = function($scope, $log, postFactory) {
        $scope.posts = [];
        $scope.filteredPosts = [];
        $scope.postsPerPage = 9;
        $scope.curPage = 1;
        $scope.maxPages = 13;
        $scope.numberOfPages = function() {
            return Math.ceil($scope.posts.length / $scope.postsPerPage)
        }

        function init() {
            postFactory.getPosts()
                .then(function(response) {
                    $scope.posts = response.data;
                    $scope.$watch('curPage + maxPages', function() {
                        var begin = (($scope.curPage - 1) * $scope.postsPerPage),
                            end = begin + $scope.postsPerPage;
                        $scope.filteredPosts = $scope.posts.slice(begin, end);
                    })
                }, function(data, status, headers, config) {
                    $log.log(data.error + ' ' + status);
                });
        }

        init();
    };

    PostsController.$inject = ['$scope', '$log', 'postFactory'];

    angular.module('postApp')
        .controller('PostsController', PostsController);

}());