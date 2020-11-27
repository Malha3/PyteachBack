const bcrypt = require('bcryptjs');
const db = require('models/');
const slugify = require('_helpers/slugify')

module.exports = {
    getAll,
    getBySlug,
    getById,
    create,
    update,
    suivre,
    delete: _delete
};

async function getAll() {
    return await db.Course.findAll({
        include: [{
            model: db.Category,
            as: 'category',
            attributes: ['title']
        }, {
            model: db.User,
            as: 'author',
            attributes: ['firstName', 'lastName']
        },
        ]
    });
}

async function getById(id) {
    return await getCourse(id);
}

async function getBySlug(slug) {
    return await getCourseBySlug(slug);
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

    return db.Course.create(params);
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

async function suivre(courseId, userId) {
    const course = await getCourse(courseId);
    const user = await getUser(userId);

    if (!course) throw 'Cours non trouvé';
    if (!user) throw 'Utilisateur non trouvé';

    course.addUser(user);
    return course
}

async function _delete(id) {
    const course = await getCourse(id);
    await course.destroy();
}

async function getCourseBySlug(slug) {
    const course = await db.Course.findOne({where: {slug: slug}});
    if (!course) throw 'Course not found';
    return course;
}

async function getCourse(id) {
    const course = await db.Course.findByPk(id, { include: { all: true, nested: true }});
    if (!course) throw 'Course not found';
    return course;
}

async function getUser(id) {
    const user = await db.User.findByPk(id);
    if (!user) throw 'User not found';
    return user;
}
