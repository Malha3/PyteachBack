const config = require('config/config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('models/');

module.exports = {
    getAll,
    getById,
    create,
    update,
    delete: _delete
};

async function create(params) {
    if (await db.Category.findOne({ where: { title: params.title } })) {
        throw 'Category title "' + params.title + '" already exists';
    }

    return db.Category.create(params);
}

async function update(id, params) {
    const category = await getCategory(id);

    const categoryTitleChanged = params.title && category.title !== params.title;
    if (categoryTitleChanged && await db.User.findOne({ where: { title: params.title } })) {
        throw 'Category title "' + params.title + '" is already taken';
    }

    Object.assign(category, params);
    await category.save();

    return category.get();
}

async function _delete(id) {
    const category = await getCategory(id);
    await category.destroy();
}

// Getter

async function getAll() {
    return await db.Category.findAll();
}

async function getById(id) {
    return await getCategory(id);
}

async function getCategory(id) {
    const category = await db.Category.findByPk(id);
    if (!category) throw 'Category not found';
    return category;
}
