const express = require ("express");
const server = express();

//si en la req viene el usuario belen hace un next 
//sino en el res devuelve un statusCode(401)

function validarUsuario(req, res,next){
    if(req.query.user === "belen"){
        next();
    }
    res.status(401).json({error: "usuario no autorizado"});
}

//Middelware - se usa para todas las rutas
server.use(validarUsuario);

server.get("/ruta1", (req,res) => {
    res.send("accedio a la ruta 1");
})

server.listen(3000,() => {
    console.log("servidor iniciado");
})
