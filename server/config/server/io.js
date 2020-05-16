const socketIo = require('socket.io');

module.exports = (sessionMiddleware, server) => {
  // Websocket notifications
  const getProfile = require('../../controllers/websockets/get-profile');
  console.log("before socket request");
  const io = socketIo(server);
  io.use(function(socket, next) {
    console.log("I am here");
    
      sessionMiddleware(socket.request, socket.request.res, next);
  });
  io.on('connection', socket => {
    console.log("here *****");
    
    if (!socket.request.session.passport) {
      return;
    }
    
    
    socket.request.session.passport.socket = socket.id;
    socket.request.session.save(() => {

      /**
      * Save the new socket id to the user's session stored in Redis
      * This ensures that on refresh, users still get websockets.
      */

      socket.on('login', () => {
        // Pass the user their user info for display on the frontend
        const id = socket.request.session.passport.user;
        getProfile(id).then(userObject => {
          socket.emit('loginResponse', userObject);
        });
      });

    });
  });

  return io;
};
