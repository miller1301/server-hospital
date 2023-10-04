const { Router } = require('express');
const { getUsuarios } = require('../controllers/users.controller');

const router = Router();

router.get('', getUsuarios)

module.exports = router;
