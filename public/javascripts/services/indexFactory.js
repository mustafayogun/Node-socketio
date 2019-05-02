app.factory('indexFactory', [()=>{
    const conenctSocket =(url, options)=>{
        return new Promise((resolve, reject)=>{   //socket bağlantı servisi oluşturma
            const socket = io.connect(url, options);

            socket.on('connect',()=>{
                resolve(socket);
            });
            socket.on('conenct_eror',()=>{
                reject(new Eror('connect_eror'));
            });
        });
    };
    return{
        conenctSocket
    }

}])