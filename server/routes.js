'use strict';

const ArModelsController = require('./controllers/armodels.controller');
const AWSController = require('./controllers/aws.controller');
const MaterialController = require('./controllers/material.controller');
//const UsersController = require('./controllers/users.controller');

const router = require('koa-router')();

// AR Models
router.get('/armodels', ArModelsController.getModels);
router.post('/armodels', ArModelsController.postModel);
router.delete('/armodels/:id', ArModelsController.deleteModel);

// Material Models
router.get('/materials', MaterialController.getMaterials);
router.post('/materials', MaterialController.postMaterial);
router.delete('/materials/:id', MaterialController.deleteMaterial);

// Generate html and send to AWS
router.post('/generate', AWSController.sendAWS);

module.exports = router;
