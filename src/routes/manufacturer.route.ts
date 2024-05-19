import { Router } from "express";
import { handleRequest } from "../util";
import { ManufacturerService } from "../services/manufacturer.service";

export const ManufacturerRoute = Router()

ManufacturerRoute.get('/' , (req, res) => {
    handleRequest(res, ManufacturerService.getAllManufacturer())
})