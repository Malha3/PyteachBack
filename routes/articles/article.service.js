const bcrypt = require('bcryptjs');
const db = require('models/');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

module.exports = {
    getAll,
    getById,
    create,
    update,
    complete,
    delete: _delete
};

async function getAll() {
    return await db.Article.findAll();
}

async function getById(id) {
    return await getArticle(id);
}

async function create(params) {

    if (await db.Article.findOne({ where: { title: params.title, id_course : params.id_course } })) {
        throw 'Article "'+ params.title +'" for Course "' + params.id_course + '" arleady exists';
    }

    if (await db.Article.findOne({ where: { id_course: params.id_course, position: params.position } })) {
        throw 'Article for Course "'+ params.id_course +'" in position "' + params.position + '" arleady exists';
    }

    return db.Article.create(params);
}

async function update(id, params) {
    const article = await getArticle(id);

    // Verifications doublons
    const titleChanged = params.title && article.title !== params.title;
    const idCourseChanged = params.id_course && article.id_course !== parseInt(params.id_course);
    const posChanged = params.position && article.position !== parseInt(params.position);

    if(!titleChanged) params.title = article.title;
    if(!idCourseChanged) params.id_course = article.id_course;
    if(!posChanged) params.position = article.position;

    if ((titleChanged || idCourseChanged) && await db.Article.findOne({ where: { title: params.title, id_course : params.id_course } })) {
        throw 'Article "'+ params.title +'" for Course "' + params.id_course + '" arleady exists';
    }

    if (posChanged && await db.Article.findOne({ where: { id_course: params.id_course, position: params.position } })) {
        throw 'Article for Course "'+ params.id_course +'" in position "' + params.position + '" arleady exists';
    }
    // End verifications

    Object.assign(article, params);
    await article.save();

    return article.get();
}

async function complete(articleId, userId) {
    const article = await getArticle(articleId);
    const user = await getUser(userId);

    if (!article) throw 'Article non trouvé';
    if (!user) throw 'Utilisateur non trouvé';

    article.addUser(user);
    return article
}

async function _delete(id) {
    const article = await getArticle(id);
    await article.destroy();
}

// Getters
async function getArticle(id) {
    const article = await db.Article.findByPk(id, {
        include: [{
            model: db.Course,
            as: 'course'
        }]
    });

    if (!article) throw 'Article non trouvé';

    const previousArticle = await db.Article.findOne({
        where: {
            id_course: article.id_course,
            position: {
                [Op.lt]: article.position,
            }
        }
    });

    const nextArticle = await db.Article.findOne({
        where: {
            id_course: article.id_course,
            position: {
                [Op.gt]: article.position,
            }
        }
    });

    if(previousArticle !== null) article.setDataValue("previousArticle", previousArticle.id_article);
    if(nextArticle !== null) article.setDataValue("nextArticle", nextArticle.id_article);
    return article;
}

async function getUser(id) {
    const user = await db.User.findByPk(id);
    if (!user) throw 'User not found';
    return user;
}
