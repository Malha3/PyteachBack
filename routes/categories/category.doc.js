/**
 * @api {post} /categories/ Create category
 * @apiName CreateCategory
 * @apiGroup Category
 *
 * @apiExample Example usage:
 *
 *     body:
 *     {
 *      "title": "basique",
 *      "description": "Dans cette catégorie nous apprendrez les bases de chaque cours ",
 *     }
 *
 *
 * @apiSuccess (Success 201) {String} message  Category created successfully 
 *
 */


 /**
 * @api {get} /categories/ Get All Categories
 * @apiName GetAll
 * @apiGroup Category
 * @apiHeader {String} JWT access token.
 *
 *
 * @apiSuccess {Json} CategoryList  Json list of all Categories
 *
 */


 /**
 * @api {get} /categories/:id Request Category information
 * @apiName GetCategory
 * @apiGroup Category
 * @apiHeader {String} JWT access token.
 *
 * @apiParam {Number} id Category unique ID.
 *
 * @apiSuccess {Int} id Id of the Category.
 * @apiSuccess {String} title  Title of the Category.
 * @apiSuccess {String} description  Description of the Category.
 * @apiSuccess {DATE} createdAt  created At creation date of the category.
 * @apiSuccess {DATE} updatedAt updated At category modification date.
 *
 */


 /**
 * @api {put} /categories/:id Update Category
 * @apiName Update Category
 * @apiGroup Category
 * @apiHeader {String} JWT access token.
 *
 * @apiParam {Number} id Category unique ID.
 *
 * @apiExample Example usage: Updating title
 *     body:
 *     {
 *      "title": "Avancée"
 *     }
 *
 *
 * @apiSuccess {Int} id Id of the Category.
 * @apiSuccess {String} title  Title of the Category.
 * @apiSuccess {String} description  Description of the Category.
 * @apiSuccess {DATE} createdAt  created At creation date of the category.
 * @apiSuccess {DATE} updatedAt updated At category modification date.
 *
 */


