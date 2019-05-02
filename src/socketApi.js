const  socketio = require('socket.io')    ///soket ayarları
const  io =socketio();
const socketApi  = {};
socketApi.io=io;
io.on('connection',(socket)=>{
    console.log('Lolo Bağlandı')

});

module.exports=socketApi