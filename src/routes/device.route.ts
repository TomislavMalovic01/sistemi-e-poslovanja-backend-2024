import { Router } from "express"
import { DeviceService } from "../services/device.service"
import { handleRequest } from "../util"


export const DeviceRoute = Router()

DeviceRoute.get('/' , (req, res) => {
    handleRequest(res, DeviceService.getAllDevices())
})