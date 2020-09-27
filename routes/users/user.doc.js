/**
 * @api {post} /users/login Login
 * @apiName Login
 * @apiGroup User
 *
 * @apiExample Example usage:
 *
 *     body:
 *     {
 *      "username": "jajson",
 *      "password": "my-super-secret-password"
 *     }
 *
 *
 * @apiSuccess {Int} id id of the User.
 * @apiSuccess {String} firstName  Firstname of the User.
 * @apiSuccess {String} lastName  Lastname of the User.
 * @apiSuccess {String} username  username of the User.
 * @apiSuccess {String} role  role of the User.
 * @apiSuccess {String} email  Lastname of the User.
 *
 */

/**
 * @api {post} /users/register Register
 * @apiName Register
 * @apiGroup User
 *
 * @apiExample Example usage:
 *
 *     body:
 *     {
 *      "firstName": "jajson",
 *      "lastName": "Patrick",
 *      "username": "my-username",
 *      "email": "my-email@gmail.com",
 *      "password": "my-super-secret-password"
 *     }
 *
 *
 * @apiSuccess {String} message  Registration successful confirmation
 *
 */

/**
 * @api {get} /users/ GetAll
 * @apiName GetAll
 * @apiGroup User
 * @apiHeader {String} JWT access token.
 *
 *
 * @apiSuccess {Json} UserList  Json list of all Users
 *
 */