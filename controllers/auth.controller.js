const { response } = require("express");
const Usuario = require('../models/users.model');
const bcrypt = require('bcryptjs');
const { generarJWT } = require("../helpers/jwt.helper");

const login = async (req, res = response) => {
    const { email, password } = req.body;
    
    try {
        const usuarioDB = await Usuario.findOne({ email });

        // Verificar email
        if( !usuarioDB ) {
            return res.status(404).json({
                ok: false,
                msg: 'Email no encontrado'
            });
        }

        // Veriicar contraseña
        const validPassword = bcrypt.compareSync(password, usuarioDB.password);
        if( !validPassword ) {
            return res.status(400).json({
                ok: false,
                msg: 'Contraseña no válida'
            });
        }

        // Generar token
        const token = await generarJWT(usuarioDB.id);

        res.status(200).json({
            ok: true,
            token
        })
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        })    
    }
}

module.exports = {
    login
}