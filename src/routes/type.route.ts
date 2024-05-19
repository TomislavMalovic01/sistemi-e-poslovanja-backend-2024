import { Router } from "express";
import { TypeService } from "../services/type.service";
import { Timestamp } from "typeorm";
import { timeStamp } from "console";
import { handleRequest } from "../util";



export const TypeRoute = Router()

TypeRoute.get('/',  (req, res) => {
    handleRequest(res, TypeService.getAllTypes())
})