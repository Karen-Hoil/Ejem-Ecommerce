const connection = require("../database");

const obtenerCategorias = (req,res) => {
    connection.query('SELECT * FROM categorias', (error,results) =>{
        if(error){
            console.error("Error al obtener la categoria", error);
            res.status(500).json({
                error: "Error al obtener categorias",
            });
        } else{
            res.json(results);
        }
    });
};

const crearCategorias =(req, res) => {
    const {nombre} = req.body; //req.body porque lo envias en el cuerpo de la pagina
    connection.query('INSERT INTO categorias (nombre) VALUES (?)', [nombre], (error, results) =>{
        if(error){
            console.error("Error al agregar categoria", error);
            res.status(500).json({error:"Error al agregar categoria"});
        }else{
            res.json({message: "Categoria agregada"});
        }
    });
}

module.exports = {
    obtenerCategorias,
    crearCategorias,
}

