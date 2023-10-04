const express = require('express');
require('dotenv').config();
const cors = require('cors');

const { dbConnection } = require('./database/config');

// Crear servidor express
const app = express();

// configurar Cors
app.use(cors());

// Base de datos
dbConnection();


// Routes
app.get('/', (req, res) => {
    res.json({
        ok: true,
        msg: "Hola mundo"
    })
})


app.listen(process.env.PORT, () => {
    console.log('Server Init Port', process.env.PORT);
})