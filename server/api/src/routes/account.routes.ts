import router from "express-promise-router";

import AccountController from "../controllers/account.controller";
import RouterHelper from "../helpers/route.helper";
import tokenMiddleware from "../middlewares/token.middleware";
import AccountSchema from "../schemas/account.schema";
const { login, register, update } = AccountSchema;

const AccountRoutes = router();

AccountRoutes.route("/login").post([RouterHelper.validateBody(login)], AccountController.loginWithEmailAndPassword);
AccountRoutes.route("/register").post([RouterHelper.validateBody(register)], AccountController.register);

AccountRoutes.use(tokenMiddleware);

AccountRoutes.route("/logout").post([], AccountController.logout);
AccountRoutes.route("/info").get([], AccountController.getInfo);
AccountRoutes.route("/update").patch([RouterHelper.validateBody(update)], AccountController.update);

export default AccountRoutes;
