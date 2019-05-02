app.controller('indexController', ['$scope','indexFactory',($scope,indexFactory) =>{

    /**
     *  const conncetionOptions ={
     *      reconnectionAttempts: 3,
        reconnectionDelay: 600,
     *  };
     */


    indexFactory.conenctSocket('http://localhost:3000',{
        reconnectionAttempts: 3,
        reconnectionDelay: 600,

    }).then((socket)=>{
        console.log('Bağlantı Başarılı',socket);
    }).catch((err)=>{
        console.log(err);
    });

}]);