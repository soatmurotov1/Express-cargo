import { create, getAll, getOne, update, deleted } from "../controller/currency_type.controller.js";
import { Router } from "express";


const currentcy_typeRouter = Router()


currentcy_typeRouter.post("/", create)
currentcy_typeRouter.get("/", getAll)
currentcy_typeRouter.get("/:id", getOne)
currentcy_typeRouter.put("/:id", update)
currentcy_typeRouter.delete("/:id", deleted)


export default currentcy_typeRouter

