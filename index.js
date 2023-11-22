const express = require('express');
require('dotenv').config();
const cors = require('cors');

const { dbConnection } = require('./database/config');

// Crear servidor express
const app = express();

// configurar Cors
app.use(cors());

// Lecuta y parseo del body
app.use( express.json() );

// Base de datos
dbConnection();


// Routes
app.use('/api/usuarios', require('./routes/users.route'));
app.use('/api/login', require('./routes/auth.route'));

app.listen(process.env.PORT, () => {
    console.log('Server Init Port', process.env.PORT);
})