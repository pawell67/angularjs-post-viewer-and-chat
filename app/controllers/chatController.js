(function() {

    var ChatController = function($scope) {
        $scope.messages = [];
        $scope.message = null;

        function init() {
            //pobieramy wiadomości z api za pomocą serwisu
            //ja zamockuje
            $scope.messages = [{
                from: 'Janusz',
                type: 'received',
                timestamp: '2019-01-09 08:41',
                content: 'Good morning everyone!'
            }, {
                from: 'Andrzej',
                type: 'received',
                timestamp: '2019-01-09 08:42',
                content: 'Hello, how are you guys?'
            }];
            setTimeout(function() {
                displayCurrentMessages()
            }, 500)
        };

        $scope.sendMessage = function() {
            if (!$scope.message.length) {
                return;
            }
            //dla uproszczenia (bo nie mamy api) pominiemy serwisy 
            $scope.messages.push({
                from: 'Paweł',
                type: 'send',
                timestamp: getCurrentDate(),
                content: $scope.message
            })
            $scope.message = '';
        };

        $scope.$watch('messages.length', function() {
            displayCurrentMessages();
        });

        $scope.toggleChat = function() {
            var chatToggler = document.getElementById('chat-toggler');
            var chatHeader = document.getElementById('chat-header');
            var chatBody = document.getElementById('chat-body');
            var chatFooter = document.getElementById('chat-footer');

            if (chatToggler.classList.contains('fa-window-minimize')) {
                chatBody.style.display = 'none';
                chatFooter.style.display = 'none';
            } else {
                chatBody.style.display = 'block';
                chatFooter.style.display = 'block';
            }
            chatToggler.classList.toggle('fa-window-minimize');
            chatToggler.classList.toggle('fa-window-maximize');
            chatHeader.classList.toggle('chat-minimalized');
        };

        function displayCurrentMessages() {
            var container = document.getElementById('chat-messages');

            if (container) {
                while (container.firstChild) {
                    container.removeChild(container.firstChild);
                }
                for (var message of $scope.messages) {
                    container.appendChild(createMessage(message));
                }
            }
            var messages = document.getElementsByClassName('message');
            if (messages.length) {
                messages[messages.length - 1].scrollIntoView();
            }
        };

        function createMessage(message) {
            var messageTmeplate = document.createElement('div');
            messageTmeplate.classList.add('message');
            messageTmeplate.classList.add(message.type);
            var messageBody = document.createElement('div');
            messageBody.classList.add('message-body');
            messageBody.textContent = message.content;
            var messageFooter = document.createElement('div');
            messageFooter.classList.add('message-footer');
            messageFooter.textContent = message.from + " " + message.timestamp;
            messageTmeplate.append(messageBody);
            messageTmeplate.append(messageFooter);
            return messageTmeplate;
        };

        function getCurrentDate() {
            var now = new Date();
            var year = now.getFullYear();
            var month = now.getMonth() + 1;
            var day = now.getDate();
            var hour = now.getHours();
            var minutes = now.getMinutes();
            var times = [year, month, day, hour, minutes];
            for (var i = 0; i < times.length; i++) {
                if (times[i] < 10) {
                    times[i] = '0' + times[i];
                }
            }
            var date = `${times[0]}-${times[1]}-${times[2]}  ${times[3]}:${times[4]}`
            return date;
        };

        init();
    }
    ChatController.$inject = ['$scope'];

    angular.module('postApp')
        .controller('ChatController', ChatController);

}());