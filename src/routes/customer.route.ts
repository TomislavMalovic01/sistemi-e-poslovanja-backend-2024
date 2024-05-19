import { Router } from "express"
import { CustomerService } from "../services/customer.service"
import { handleRequest } from "../util"

export const CustomerRoute = Router()

CustomerRoute.get('/' , (req, res) => {
    handleRequest(res, CustomerService.getAllCostumers())
})