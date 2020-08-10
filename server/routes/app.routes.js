const router = require("express-promise-router")();
const { validateBody, schemas } = require("../helpers/route.helper");
const AppController = require("../controllers/app.controller");
const tokenMiddleware = require("../middlewares/token.middleware");

router.use(tokenMiddleware);

router.route("/test").post(AppController.testMethod);

module.exports = router;