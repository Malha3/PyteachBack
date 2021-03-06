const express = require('express');
const router = express.Router();
const Joi = require('joi');
const validateRequest = require('_middleware/validate-request');
const authorize = require('_middleware/authorize')
const categoryService = require('./category.service');
const Role = require('_helpers/role');

// Routes (sécurisé par token)
router.post('/', authorize([Role.Admin, Role.Teacher]), categorySchema, createCategory);
router.get('/', authorize(), getAll);
router.get('/:id', authorize(), getById);
router.put('/:id', authorize([Role.Admin, Role.Teacher]), updateSchema, update);
router.delete('/:id', authorize([Role.Admin, Role.Teacher]), _delete);

module.exports = router;

// Schema Validation //
function categorySchema(req, res, next) {
    const schema = Joi.object({
        title: Joi.string().required(),
        description: Joi.string().required(),
    });
    validateRequest(req, next, schema);
}

function updateSchema(req, res, next) {
    const schema = Joi.object({
        title: Joi.string().empty(''),
        description: Joi.string().empty('')
    });
    validateRequest(req, next, schema);
}

// Actions //
function createCategory(req, res, next) {
    categoryService.create(req.body)
        .then((category) => res.status(201).json({
            id: category.id_cat,
            message: 'Catégorie created successfully'
        }))
        .catch(next);
}

function update(req, res, next) {
    categoryService.update(req.params.id, req.body)
        .then(category => res.json(category))
        .catch(next);
}

function _delete(req, res, next) {
    categoryService.delete(req.params.id)
        .then(() => res.json({ message: 'Category deleted successfully' }))
        .catch(next);
}

// Getters //
function getAll(req, res, next) {
    categoryService.getAll()
        .then(categories => res.json(categories))
        .catch(next);
}

function getById(req, res, next) {
    categoryService.getById(req.params.id)
        .then(category => res.json(category))
        .catch(next);
}
