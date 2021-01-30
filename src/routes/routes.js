const express = require('express');
const router = express.Router();

const UsuarioController = require ('../controllers/usuarioController.js');
const EmpresaController = require ('../controllers/empresaController.js');
const ProdutoController = require ('../controllers/produtoController.js');
const RetiradaController = require ('../controllers/retiradaController.js');
//const RetiradaColaboradorController = require ('../controllers/retiradaController.js');
 
router.post('/usuario', UsuarioController.Insert);
router.post('/usuario/auth', UsuarioController.Auth);

router.get('/empresa', EmpresaController.Index);
router.post('/empresa', EmpresaController.Insert);

router.get('/produto', ProdutoController.Index);
router.get('/produto/:prod', ProdutoController.Detail);
router.post('/produto', ProdutoController.Insert);
router.put('/produto', ProdutoController.Update);

router.post('/produto/increase', ProdutoController.IncreaseQtd);

router.post('/retirada', RetiradaController.Insert);
//router.post('/retirada2', RetiradaColaboradorController.Insert);
 
module.exports = router;