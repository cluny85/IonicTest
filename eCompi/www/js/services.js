angular.module('starter.services', [])

.factory('Mensajes', function() {
  // Might use a resource here that returns a JSON array
  
  // Some fake testing data
  var mensajes = [{
    id: 0,
    title: 'Aviso doble fila',
    text: 'Por favor, su coche obstaculiza la salida de mi vehiculo. Proceda a moverlo lo antes posible. Gracias',
    times: 3
  }, {
    id: 1,
    title: 'Aviso policía',
    text: 'Por favor, su coche obstaculiza la salida de mi vehiculo. Proceda a moverlo lo antes posible. Gracias',
    times: 3
  }, {
    id: 2,
    title: 'Aviso robo',
    text: 'Por favor, su coche obstaculiza la salida de mi vehiculo. Proceda a moverlo lo antes posible. Gracias',
    times: 5
  }, {
    id: 3,
    title: 'Aviso grúa',
    texto: 'Por favor, su coche obstaculiza la salida de mi vehiculo. Proceda a moverlo lo antes posible. Gracias',
    times: 3
  }, {
    id: 4,
    title: 'Aviso custom',
    text: 'Escriba el texto que desea enviar al propietario del vehículo',
    times: 3
  }];

  return {
    all: function() {
      return mensajes;
    },
    remove: function(mensaje) {
      mensajes.splice(mensajes.indexOf(mensaje), 1);
    },
    get: function(mensajeId) {
      for (var i = 0; i < mensajes.length; i++) {
        if (mensajes[i].id === parseInt(mensajeId)) {
          return mensajes[i];
        }
      }
      return null;
    }
  }
})
.factory('Pushes', function() {
  // Might use a resource here that returns a JSON array
  
  // Some fake testing data
  var pushes = [{
    id: 0,
    title: 'Título aviso 1',
    text: 'Por favor, su coche obstaculiza la salida de mi vehiculo. Proceda a moverlo lo antes posible. Gracias'
  }, {
    id: 1,
    title: 'Título aviso 2',
    text: 'Por favor, su coche obstaculiza la salida de mi vehiculo. Proceda a moverlo lo antes posible. Gracias'
  }];

  return {
    all: function() {
      return pushes;
    },
    remove: function(push) {
      pushes.splice(pushes.indexOf(push), 1);
    },
    get: function(pushId) {
      for (var i = 0; i < pushes.length; i++) {
        if (pushes[i].id === parseInt(pushId)) {
          return pushes[i];
        }
      }
      return null;
    }
  }
})
.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
  }, {
    id: 2,
    name: 'Andrew Jostlin',
    lastText: 'Did you get the ice cream?',
    face: 'https://pbs.twimg.com/profile_images/491274378181488640/Tti0fFVJ.jpeg'
  }, {
    id: 3,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
  }, {
    id: 4,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'https://pbs.twimg.com/profile_images/491995398135767040/ie2Z_V6e.jpeg'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  }
})

/**
 * A simple example service that returns some data.
 */
.factory('Friends', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  // Some fake testing data
  var friends = [{
    id: 0,
    name: 'Ben Sparrow',
    notes: 'Enjoys drawing things',
    face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    notes: 'Odd obsession with everything',
    face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
  }, {
    id: 2,
    name: 'Andrew Jostlen',
    notes: 'Wears a sweet leather Jacket. I\'m a bit jealous',
    face: 'https://pbs.twimg.com/profile_images/491274378181488640/Tti0fFVJ.jpeg'
  }, {
    id: 3,
    name: 'Adam Bradleyson',
    notes: 'I think he needs to buy a boat',
    face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
  }, {
    id: 4,
    name: 'Perry Governor',
    notes: 'Just the nicest guy',
    face: 'https://pbs.twimg.com/profile_images/491995398135767040/ie2Z_V6e.jpeg'
  }];


  return {
    all: function() {
      return friends;
    },
    get: function(friendId) {
      // Simple index lookup
      return friends[friendId];
    }
  }
});
