const bcrypt = require('bcryptjs');
const db = require('models/');

module.exports = {
    getAll,
    getById,
    create,
    update,
    delete: _delete
};

async function getAll() {
    return await db.Post.findAll();
}

async function getById(id) {
    return await getPost(id);
}

async function create(params) {

    if (await db.Post.findOne({ where: { title: params.title, id_course : params.id_course } })) {
        throw 'Post "'+ params.title +'" for Course "' + params.id_course + '" arleady exists';
    }

    if (await db.Post.findOne({ where: { id_course: params.id_course, position: params.position } })) {
        throw 'Post for Course "'+ params.id_course +'" in position "' + params.position + '" arleady exists';
    }

    await db.Post.create(params);
}

async function update(id, params) {
    //TODO : Update Post
}

async function _delete(id) {
    const post = await getPost(id);
    await post.destroy();
}

async function getPost(id) {
    const post = await db.Post.findByPk(id);
    if (!post) throw 'Post not found';
    return post;
}