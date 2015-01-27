angular.module('starter.controllers', [])

.controller('IntroCtrl', function($scope, $state, $ionicSlideBoxDelegate, AppState) {
 
  // Called to navigate to the main app
  $scope.startApp = function() {
    $state.go('tab.main');
  };
  $scope.next = function() {
    $ionicSlideBoxDelegate.next();
  };
  $scope.previous = function() {
    $ionicSlideBoxDelegate.previous();
  };

  // Called each time the slide changes
  $scope.slideChanged = function(index) {
    $scope.slideIndex = index;
  };
})

.controller('MainCtrl', function($scope, $state, $cordovaBarcodeScanner, Pushes) {
  $scope.pushes = Pushes.all();
  $scope.remove = function(push) {
    Pushes.remove(push);
  }
  
  $scope.scanBarcode = function() {
      //$state.go('tab.main-mensajes',{'code': "abc"});
      
      $cordovaBarcodeScanner.scan().then(function(imageData) {
          alert(imageData.text);          
          console.log("Barcode Format -> " + imageData.format);
          console.log("Cancelled -> " + imageData.cancelled);

          //href="#/tab/main/imageData.text"
          $state.go('tab.main-mensajes',{'code': imageData.text});
      }, function(error) {
          console.log("An error happened -> " + error);
      });

  };  
})
.controller('MensajesCtrl', function($scope, $stateParams, Mensajes) {
  //$stateParams.code;
  $scope.mensajes = Mensajes.all();
  $scope.enviarMensaje = function (mensajeId) {
    var toSend = Mensajes.get(mensajeId);
    if (toSend) {
      //TODO envia mensaje al server
      alert("Enviando mensaje a: "+$stateParams.code);
    } else{
      //TODO puede ser mensaje custom
    };
  }  
})

.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
