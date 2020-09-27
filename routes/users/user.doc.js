/**
 * @api {post} /users/login Login
 * @apiName Login
 * @apiGroup User
 *
 * @apiExample Example usage:
 *
 *     body:
 *     {
 *      "username": "Badis",
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
 * @api {get} /users/ Get All Users
 * @apiName GetAll
 * @apiGroup User
 * @apiHeader {String} JWT access token.
 *
 *
 * @apiSuccess {Json} UserList  Json list of all Users
 *
 */

/**
 * @api {get} /users/current Current
 * @apiName Current
 * @apiGroup User
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
 * @api {get} /users/:id Request User information
 * @apiName GetUser
 * @apiGroup User
 * @apiHeader {String} JWT access token.
 *
 * @apiParam {Number} id Users unique ID.
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
 * @api {delete} /users/:id Delete User
 * @apiName DeleteUser
 * @apiGroup User
 * @apiHeader {String} JWT access token.
 *
 * @apiParam {Number} id Users unique ID.
 *
 * @apiSuccess {String} message  Delete confirmation
 *
 */

/**
 * @api {put} /users/:id Update User
 * @apiName Update User
 * @apiGroup User
 * @apiHeader {String} JWT access token.
 *
 * @apiParam {Number} id Users unique ID.
 *
 * @apiExample Example usage: Updating first and lastName
 *     body:
 *     {
 *      "firstName": "Badis",
 *      "lastName": "MEDDOURI"
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