/**
 * @api {post} /articles Create Article
 * @apiName CreateArticle
 * @apiGroup Article
 *
 * @apiExample Example usage:
 *     body:
 *        {
 *           "title": "Les bases de Django",
 *           "description": "Apprenez les bases de Django",
 *           "id_course": "3",
 *           "body": "<p>Some HTML</p>",
 *           "position": "1",
 *           "isPublished": false,
 *           "isExercice": false
 *       }
 *
 * @apiSuccess (Success 201) {String} message  Creation confirmation.
 *
 */

/**
 * @api {get} /articles/ Get All Articles
 * @apiName GetAll
 * @apiGroup Article
 * @apiHeader {String} JWT access token.
 *
 * @apiSuccess {Json} ArticlesList  Json list of all Articles
 *
 */

/**
 * @api {delete} /articles/:id Delete Article
 * @apiName DeleteArticle
 * @apiGroup Article
 * @apiHeader {String} JWT access token.
 *
 * @apiParam {Number} id Article unique ID.
 *
 * @apiSuccess {String} message  Delete confirmation
 *
 */

/**
 * @api {get} /articles/:id Request article information
 * @apiName GetArticle
 * @apiGroup Article
 * @apiHeader {String} JWT access token.
 *
 * @apiParam {Number} id Article unique ID.
 *
 * @apiSuccess {Int} id_Article id of the Article.
 * @apiSuccess {String} title Title of the Article.
 * @apiSuccess {String} description Description of the Article
 * @apiSuccess {String} body Body of the Article.
 * @apiSuccess {Int} position Position of the Article in Course.
 * @apiSuccess {String} imageUrl URL of image of the Article (can be null).
 * @apiSuccess {String} videoUrl URL of video of the Article (can be null).
 * @apiSuccess {Boolean} isExercice  True if this Article is Exercice.
 * @apiSuccess {Boolean} isPublished  True if this Article is Published, false if it's a draft.
 * @apiSuccess {Int} id_course  ID of course where this Article belongs to.
 *
 */
