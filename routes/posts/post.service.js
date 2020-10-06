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

    return db.Post.create(params);
}

async function update(id, params) {
    const post = await getPost(id);

    // Verifications doublons
    const titleChanged = params.title && post.title !== params.title;
    const idCourseChanged = params.id_course && post.id_course !== parseInt(params.id_course);
    const posChanged = params.position && post.position !== parseInt(params.position);

    if(!titleChanged) params.title = post.title;
    if(!idCourseChanged) params.id_course = post.id_course;
    if(!posChanged) params.position = post.position;

    if ((titleChanged || idCourseChanged) && await db.Post.findOne({ where: { title: params.title, id_course : params.id_course } })) {
        throw 'Post "'+ params.title +'" for Course "' + params.id_course + '" arleady exists';
    }

    if (posChanged && await db.Post.findOne({ where: { id_course: params.id_course, position: params.position } })) {
        throw 'Post for Course "'+ params.id_course +'" in position "' + params.position + '" arleady exists';
    }
    // End verifications

    Object.assign(post, params);
    await post.save();

    return post.get();
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