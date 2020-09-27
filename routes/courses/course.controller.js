const express = require('express');
const router = express.Router();
const Joi = require('joi');
const validateRequest = require('_middleware/validate-request');
const authorize = require('_middleware/authorize')
const courseService = require('./course.service');

// routes
router.post('/createOne', courseSchema, createCourse);
router.get('/', authorize(), getAll);
router.get('/:id', authorize(), getById);
router.put('/:id', authorize(), updateSchema, update);
router.delete('/:id', authorize(), _delete);

module.exports = router;

// Schemas //
function courseSchema(req, res, next) {
    const schema = Joi.object({
        title: Joi.string().required(),
        description: Joi.string().required(),
        slug: Joi.string().required(),
        author_id: Joi.string().required(),
        tags: Joi.string().optional(),
        published: Joi.boolean().required(),
        id_cat: Joi.string().required()
    });
    validateRequest(req, next, schema);
}

function updateSchema(req, res, next) {
    const schema = Joi.object({
        firstName: Joi.string().empty(''),
        lastName: Joi.string().empty(''),
        username: Joi.string().empty(''),
        password: Joi.string().min(6).empty('')
    });
    validateRequest(req, next, schema);
}

// Actions //
function createCourse(req, res, next) {
    courseService.create(req.body)
        .then(() => res.json({ message: 'Course created successfully' }))
        .catch(next);
}

function update(req, res, next) {
    courseService.update(req.params.id, req.body)
        .then(category => res.json(category))
        .catch(next);
}

function _delete(req, res, next) {
    courseService.delete(req.params.id)
        .then(() => res.json({ message: 'Category deleted successfully' }))
        .catch(next);
}

// Getters //
function getAll(req, res, next) {
    courseService.getAll()
        .then(users => res.json(users))
        .catch(next);
}

function getById(req, res, next) {
    courseService.getById(req.params.id)
        .then(user => res.json(user))
        .catch(next);
}