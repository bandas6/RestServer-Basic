const { Router } = require('express');
const { usuarioGet, usurioPut, usuarioPost, usuarioDelete } = require('../controllers/users');

const router = Router();


router.get('/',  usuarioGet);

router.put('/:id',  usurioPut);

router.post('/', usuarioPost);

router.delete('/', usuarioDelete);

router.patch('/', );













module.exports = router;