const express = require('express');
const router = express.Router();

const NotasController = require('./controllers/NotasController');

router.get('/notas', NotasController.buscarTodos);
router.get('/notas/:id', NotasController.buscarUm);
router.post('/notas', NotasController.inserir);
router.put('/notas/:id', NotasController.alterar);
router.delete('/notas/:id', NotasController.excluir);

module.exports = router;
