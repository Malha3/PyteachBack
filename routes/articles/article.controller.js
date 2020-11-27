const express = require('express');
const router = express.Router();
const Joi = require('joi');
const validateRequest = require('_middleware/validate-request');
const authorize = require('_middleware/authorize')
const articleService = require('./article.service');
const Role = require('_helpers/role');

// routes
router.post('/', authorize([Role.Admin, Role.Teacher]), articleSchema, createArticle);
router.post('/complete', authorize(), completeSchema, completeArticle);
router.get('/', authorize(), getAll);
router.get('/:id', authorize(), getById);
router.put('/:id', authorize([Role.Admin, Role.Teacher]), updateSchema, update);
router.delete('/:id', authorize([Role.Admin, Role.Teacher]), _delete);

module.exports = router;

// Schemas //
function articleSchema(req, res, next) {
    const schema = Joi.object({
        title: Joi.string().required(),
        description: Joi.string().required(),
        id_course: Joi.number().required(),
        body: Joi.string().required(),
        position: Joi.number().required(),
        imageUrl: Joi.string().optional(),
        videoUrl: Joi.string().optional(),
        isPublished: Joi.boolean().required(),
        isExercice: Joi.boolean().required(),
    });
    validateRequest(req, next, schema);
}

function completeSchema(req, res, next) {
    const schema = Joi.object({
        id_article: Joi.number().required(),
        id_user: Joi.number().required()
    });
    validateRequest(req, next, schema);
}

function updateSchema(req, res, next) {
    const schema = Joi.object({
        title: Joi.string().empty(''),
        description: Joi.string().empty(''),
        id_course: Joi.number().empty(''),
        body: Joi.string().empty(''),
        position: Joi.number().empty(''),
        imageUrl: Joi.string().empty(''),
        videoUrl: Joi.string().empty(''),
        isPublished: Joi.boolean().empty(''),
        isExercice: Joi.boolean().empty('')
    });
    validateRequest(req, next, schema);
}

// Actions //
function createArticle(req, res, next) {
    articleService.create(req.body)
        .then((article) => res.status(201).json({
            id: article.id_article,
            message: 'Article created successfully'
        }))
        .catch(next);
}

function update(req, res, next) {
    articleService.update(req.params.id, req.body)
        .then(article => res.json(article))
        .catch(next);
}

function completeArticle(req, res, next) {
    articleService.complete(req.body.id_article, req.body.id_user)
        .then(article => res.status(201).json({
            id_article: req.body.id_article,
            id_user: req.body.id_user,
            message: 'User completed article successfully'
        }))
        .catch(next);
}

function _delete(req, res, next) {
    articleService.delete(req.params.id)
        .then(() => res.json({ message: 'Article deleted successfully' }))
        .catch(next);
}

// Getters //
function getAll(req, res, next) {
    articleService.getAll()
        .then(users => res.json(users))
        .catch(next);
}

function getById(req, res, next) {
    articleService.getById(req.params.id)
        .then(user => res.json(user))
        .catch(next);
}
