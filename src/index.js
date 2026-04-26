const express = require('express');
const dotenv = require('dotenv');
const sequelize = require('./config/database.js');

dotenv.config()

const app = express()

//Middlewares
app.use(express.json())

//Ruta de prueba
app.get("/health", (req, res) => {
    res.status(200).json({
        message: "Servidor corriendo"
    });
});

const PORT = process.env.PORT || 3000

sequelize.authenticate()
    .then(() => {
        console.log("Conexion a la base de datos exitosa");

        app.listen(PORT, () => {
            console.log(`Servidor corriendo en el puerto ${PORT}`);
        });

    }).catch((error) => {
        console.error('Error al conectar la base de datos: ', error);
    });
