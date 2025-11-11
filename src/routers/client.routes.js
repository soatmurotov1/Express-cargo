import { create, getAll, getOne, update, deleted } from "../controller/client.controller.js";
import { Router } from "express";


const clientRouter = Router()


clientRouter.post("/", create)
clientRouter.get("/", getAll)
clientRouter.get("/:id", getOne)
clientRouter.put("/:id", update)
clientRouter.delete("/:id", deleted)


export default clientRouter

