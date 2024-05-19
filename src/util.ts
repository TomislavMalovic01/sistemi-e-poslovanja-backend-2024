
import { Response } from "express";
import { Types } from "mysql2";
import { TypeService } from "./services/type.service";
import { Timestamp } from "typeorm";

export  async function handleRequest(res : Response, callback : Promise<any>,code : number = 500){
    try { 
        res.json(await callback)
    } catch (e) {
        res.status(code).json({
            message : e.message,
            timesamp : new Date()

        })
    }
}