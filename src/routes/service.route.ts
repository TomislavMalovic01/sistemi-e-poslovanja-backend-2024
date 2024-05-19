import { Router } from "express";
import { handleRequest } from "../util";
import { ServiceService } from "../services/service.service";
import { Code } from "typeorm";


export const ServiceRoute = Router()

ServiceRoute.get('/device/:id', (req, res) =>{
    const id = req.params.id as any as number
    handleRequest(res, ServiceService.getAllServicesByDevice(id))
})

ServiceRoute.get('/code/:code', (req, res) =>{
    const code = req.params.code
    handleRequest(res, ServiceService.getAllServicesByCode(code))
})