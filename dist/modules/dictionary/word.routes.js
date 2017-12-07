"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var validate = require("express-validation");
var dictionaryController = require("./word.controller");
var auth_service_1 = require("../../services/auth.service");
var word_validations_1 = require("./word.validations");
var routes = express_1.Router();
routes.post('/', auth_service_1.authJwt, auth_service_1.authRole('Admin'), validate(word_validations_1.default.createWord), dictionaryController.createWord);
routes.get('/', dictionaryController.getDictionary);
routes.get('/:id', dictionaryController.getWordById);
routes.patch('/:id', auth_service_1.authJwt, auth_service_1.authRole('Admin'), validate(word_validations_1.default.updateWord), dictionaryController.updateWord);
routes.delete('/:id', auth_service_1.authJwt, auth_service_1.authRole('Admin'), dictionaryController.deleteWord);
exports.default = routes;