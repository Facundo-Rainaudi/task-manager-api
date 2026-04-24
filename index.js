const express = require('express')
const dotenv = require('dotenv')

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

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});