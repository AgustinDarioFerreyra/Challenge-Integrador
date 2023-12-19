const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.send('Esta es la vista de Home'));
router.get('/contact', (req, res) => res.send('Esta es la vista de Contact'));
router.get('/about', (req, res) => res.send('Esta es la vista de About'));
router.get('/faqs', (req, res) => res.send('Esta es la vista de Preguntas Frecuentes'));

module.exports = router;