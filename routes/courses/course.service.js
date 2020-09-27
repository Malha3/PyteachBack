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
    return await db.Course.findAll();
}

async function getById(id) {
    return await getCourse(id);
}

async function create(params) {

    if (await db.Course.findOne({ where: { title: params.title } })) {
        throw 'Course "' + params.title + '" arleady exists';
    }

    if (await db.Course.findOne({ where: { slug: params.slug } })) {
        throw 'Course slug "' + params.slug + '" arleady exists';
    }

    await db.Course.create(params);
}

async function update(id, params) {
    const user = await getUser(id);

    // validate
    const usernameChanged = params.username && user.username !== params.username;
    if (usernameChanged && await db.User.findOne({ where: { username: params.username } })) {
        throw 'Username "' + params.username + '" is already taken';
    }

    // hash password if it was entered
    if (params.password) {
        params.hash = await bcrypt.hash(params.password, 10);
    }

    // copy params to user and save
    Object.assign(user, params);
    await user.save();

    return omitHash(user.get());
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