import { Request, Response } from "express";

export class UserController {
  public addNewUser(req: Request, res: Response) {
    res.json({ name: "Adem" });
  }

  public getUsers(req: Request, res: Response) {
    res.json({ name: "Adem" });
  }

  public getUserById(req: Request, res: Response) {
    res.json({ ok: "true" });
  }

  public updateUser(req: Request, res: Response) {
    res.json({ ok: "true" });
  }

  public deleteUser(req: Request, res: Response) {
    res.json({ ok: "true" });
  }
}
