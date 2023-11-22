const { Router } = require('express');
const { getUsuarios, crearUsuario, actualizarUsuario, borrarUsuario } = require('../controllers/users.controller');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos.middleware');
const { validarJWT } = require('../middlewares/validar-jwt.middleware');

const router = Router();

router.get('/', validarJWT, getUsuarios);

router.post('/', 
    [
        check('nombre', 'El nombre es requerido').not().isEmpty(),
        check('password', 'La contraseña es requerida').not().isEmpty(),
        check('email', 'El email es requerido').isEmail(),
        validarCampos,
    ], 
    crearUsuario
);

router.put('/:id',
    [
        validarJWT,
        check('nombre', 'El nombre es requerido').not().isEmpty(),
        check('email', 'El email es requerido').isEmail(),
        check('role', 'El rol es requerido').not().isEmpty(),
        validarCampos
    ], 
    actualizarUsuario
);

router.delete('/:id', validarJWT, borrarUsuario);

module.exports = router;
