const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController');

router.get('/', clienteController.getAllClientes);
router.get('/add', clienteController.addCliente);
router.post('/add', clienteController.createCliente);
router.get('/edit/:id', clienteController.getClienteById);
router.post('/edit/:id', clienteController.updateCliente);
router.get('/delete/:id', clienteController.deleteCliente);

module.exports = router;
