/**
 * @api {post} /posts/createOne Create Post
 * @apiName CreatePost
 * @apiGroup Post
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
 * @apiSuccess {String} message  Creation confirmation.
 *
 */

/**
 * @api {get} /posts/ Get All Posts
 * @apiName GetAll
 * @apiGroup Post
 * @apiHeader {String} JWT access token.
 *
 * @apiSuccess {Json} PostsList  Json list of all Posts
 *
 */

/**
 * @api {delete} /posts/:id Delete Post
 * @apiName DeletePost
 * @apiGroup Post
 * @apiHeader {String} JWT access token.
 *
 * @apiParam {Number} id Post unique ID.
 *
 * @apiSuccess {String} message  Delete confirmation
 *
 */

/**
 * @api {get} /users/:id Request Post information
 * @apiName GetPost
 * @apiGroup Post
 * @apiHeader {String} JWT access token.
 *
 * @apiParam {Number} id Post unique ID.
 *
 * @apiSuccess {Int} id_post id of the Post.
 * @apiSuccess {String} title Title of the Post.
 * @apiSuccess {String} description Description of the Post
 * @apiSuccess {String} body Body of the Post.
 * @apiSuccess {Int} position Position of the Post in Course.
 * @apiSuccess {String} imageUrl URL of image of the Post (can be null).
 * @apiSuccess {String} videoUrl URL of video of the Post (can be null).
 * @apiSuccess {Boolean} isExercice  True if this Post is Exercice.
 * @apiSuccess {Boolean} isPublished  True if this post is Published, false if it's a draft.
 * @apiSuccess {Int} id_course  ID of course where this post belongs to.
 */