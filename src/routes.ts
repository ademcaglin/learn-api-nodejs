import { Request, Response, NextFunction } from "express";
import { UserController } from "./controllers/userController";
import { requireJsonContent } from "./utils/middlewares";

export class Routes {
  public userController: UserController = new UserController();

  public routes(app): void {
    app.route("/").get((req: Request, res: Response) => {
      res.status(200).send({
        message: "GET request successful"
      });
    });

    app
      .route("/users")
      .get((req: Request, res: Response, next: NextFunction) => {
        requireJsonContent(req, res, next)
      }, this.userController.getUsers)
      .post(this.userController.addNewUser);

    app
      .route("/user/:id")
      .get(this.userController.getUserById)
      .put(this.userController.updateUser)
      .delete(this.userController.deleteUser);
  }
}
