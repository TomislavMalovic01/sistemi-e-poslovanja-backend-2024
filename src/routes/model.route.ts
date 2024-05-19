import { Router } from "express";
import { handleRequest } from "../util";
import { ModelService } from "../services/model.service";

export const ModelRoute = Router()

ModelRoute.get('/',(req, res) => {
    handleRequest(res, ModelService.getAllModels())
})