const express = require ("express");
const server = express();

//si queremos implementar un middelware externo como body-parser
/**
 * Hay q tener instalada la dependencia
 * >>npm i body-parser
 * 
 * llamamos
 * >> const bodyParser = require ("body-parser");
 * 
 * utilizamos
 * >> server.use(bodyParser.json());
 * 
 * se puede acceder desde el body ej
 * req.body.nombre
 * 
 * >> server.post("/contact", (req,res) =>{
 * >>    console.log(req.body);
 * >>    res.json('contacto agregado!');      
 * >> });
 * 
 * MANEJO DE ERRORES
 * 
 * >> server.post('/contact', (req,res) => {
 * >>    const{nombre, apellido} = req.body;
 * >>    if (!nombre || apeliido){
 * >>       res.status(400)
 * >>       .json('falta información');
 * >>    }else{
 * >>       res.json('contacto agregado');
 * >>       }
 * >> });
 */


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
