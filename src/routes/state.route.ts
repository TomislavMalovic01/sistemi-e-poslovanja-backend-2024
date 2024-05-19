import { Router } from "express";
import { handleRequest } from "../util";
import { StateService } from "../services/state.service";


export const StateRoute = Router()

StateRoute.get('/', (req, res) => {
    handleRequest(res, StateService.getAllStates())
})