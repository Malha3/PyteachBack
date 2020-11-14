/**
 * @api {post} /courses/ Create course
 * @apiName CreateCourse
 * @apiGroup Course
 *
 * @apiExample Example usage:
 *
 *     body:
 *     {
 *      "title": "Functions in language Python",
 *      "description": "vous apprendrez à créer vos propres fonctions et procédure",
 *      "slug": "",
 *      "author_id": "26",
 *      "tags": "",
 *      "published": "False",
 *      "id_cat": "001"
 *     }
 *
 *
 * @apiSuccess (Success 201) {String} message  Course created successfully 
 *
 */


/**
 * @api {get} /courses/ Get All Courses
 * @apiName GetAll
 * @apiGroup Course
 * @apiHeader {String} JWT access token.
 *
 *
 * @apiSuccess {Json} CourseList  Json list of all Courses
 *
 */


 /**
 * @api {get} /courses/:id Request Course information
 * @apiName GetCourse
 * @apiGroup Course
 * @apiHeader {String} JWT access token.
 *
 * @apiParam {Number} id Course unique ID.
 *
 * @apiSuccess {Int} id Id of the Course.
 * @apiSuccess {String} title  Title of the Course.
 * @apiSuccess {String} description  Description of the Course.
 * @apiSuccess {String} slug  Slug  the text identifier of a content.
 * @apiSuccess {String} author_id Author ID of the user who did the course.
 * @apiSuccess {String} tags  Tags a keyword or term associated with or assigned to the course.
 * @apiSuccess {String} published  Published course put online or not.
 * @apiSuccess {String} id_cat  ID of the category of the course.
 *
 */


 /**
 * @api {put} /courses/:id Update Course
 * @apiName Update Course
 * @apiGroup Course
 * @apiHeader {String} JWT access token.
 *
 * @apiParam {Number} id Course unique ID.
 *
 * @apiExample Example usage: Updating tags and published
 *     body:
 *     {
 *      "tags": "Function in Python",
 *      "published": "true"
 *     }
 *
 *
 * @apiSuccess {Int} id Id of the Course.
 * @apiSuccess {String} title  Title of the Course.
 * @apiSuccess {String} description  Description of the Course.
 * @apiSuccess {String} slug  Slug  the text identifier of a content.
 * @apiSuccess {String} author_id Author ID of the user who did the course.
 * @apiSuccess {String} tags  Tags a keyword or term associated with or assigned to the course.
 * @apiSuccess {String} published  Published course put online or not.
 * @apiSuccess {String} id_cat  ID of the category of the course.
 *
 */


 /**
 * @api {delete} /courses/:id Delete Course
 * @apiName DeleteCourse
 * @apiGroup Course
 * @apiHeader {String} JWT access token.
 *
 * @apiParam {Number} id Course unique ID.
 *
 * @apiSuccess {String} message  course deleted successfully
 *
 */
