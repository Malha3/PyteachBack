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
 * @apiSuccess {String} message  Course created successfully 
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
