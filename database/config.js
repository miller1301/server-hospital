const mongoose = require('mongoose');

const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.DB_CNN);

        console.log('DB online');
    } catch (error) {
        console.log('Error');
        throw new Error('Error en la conexión de la base de datos');
    }
}


module.exports = {
    dbConnection
}
