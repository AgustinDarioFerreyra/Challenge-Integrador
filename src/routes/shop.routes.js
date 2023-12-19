const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.send('Esta es la vista de Shop'));
router.get('/item/:id', (req, res) => res.send('Esta es la vista del item seleccionado'));
router.post('/item/:id/add', (req, res) => res.send('Esta es la vista para agregar un nuevo item'));
router.get('/cart', (req, res) => res.send('Esta es la vista del carrito de compras'));
router.post('/cart', (req, res) => res.send('Esta es la ruta para agregar un nuevo item al carrito'));


module.exports = router;