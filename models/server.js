const express = require('express');
const cors = require('cors')


class Server {
    
    constructor (){
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios'

        //Middlewares
        this.middlewares();

        //Rutas de mi app
        this.routes()
    }

    middlewares(){
        //Directorio
        this.app.use(express.static('public'));

        //Cors
        this.app.use(cors());

        //lectura y parceo
        this.app.use(express.json());
    }

    routes(){
        this.app.use(this.usuariosPath, require('../routes/user'))
    }

    listen(){
        
        this.app.listen(this.port, ()=>{
            console.log('Servidor corriendo en puerto',this.port)
})
    }

}


module.exports = Server;