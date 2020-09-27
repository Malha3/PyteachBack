const bcrypt = require('bcryptjs');
const db = require('models/');
const slugify = require('_helpers/slugify')

module.exports = {
    getAll,
    getById,
    create,
    update,
    delete: _delete
};

async function getAll() {
    return await db.Course.findAll();
}

async function getById(id) {
    return await getCourse(id);
}

async function create(params) {

    if(!params.slug && params.title){
        params.slug = slugify(params.title);
    }

    if (await db.Course.findOne({ where: { title: params.title } })) {
        throw 'Course "' + params.title + '" arleady exists';
    }

    if (await db.Course.findOne({ where: { slug: params.slug } })) {
        throw 'Course slug "' + params.slug + '" arleady exists';
    }

    await db.Course.create(params);
}

async function update(id, params) {
    const course = await getCourse(id);

    // Verifications doublons
    const titleChanged = params.title && course.title !== params.title;
    if (titleChanged && await db.Course.findOne({ where: { title: params.title } })) {
        throw 'Course title "' + params.title + '" arleady exists';
    }

    const slugChanged = params.slug && course.slug !== params.slug;
    if (slugChanged && await db.Course.findOne({ where: { slug: params.slug } })) {
        throw 'Course slug "' + params.slug + '" arleady exists';
    }
    // End verifications

    Object.assign(course, params);
    await course.save();

    return course.get();
}

async function _delete(id) {
    const course = await getCourse(id);
    await course.destroy();
}

async function getCourse(id) {
    const course = await db.Course.findByPk(id);
    if (!course) throw 'Course not found';
    return course;
}

function omitHash(user) {
    const { hash, ...userWithoutHash } = user;
    return userWithoutHash;
}