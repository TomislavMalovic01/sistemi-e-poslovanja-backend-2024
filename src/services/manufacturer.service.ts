import { IsNull } from "typeorm";
import { AppDataSource } from "../db";
import { Manufacturer } from "../entities/Manufacturer";

const repo = AppDataSource.getRepository(Manufacturer)

export class ManufacturerService{

        static async getAllManufacturer(){
           return await repo.find({
                select : {
                    manufacturerId : true,
                    name : true,
                    createdAt : true,
                    updatedAt : true
                },
                where:{
                    deletedAt : IsNull()
                }
            })
    
        
    }
}