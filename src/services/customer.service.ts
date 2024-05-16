
import { AppDataSource } from "../db";
import { Customer } from "../entities/Customer";
import { IsNull } from "typeorm";


const repo = AppDataSource.getRepository(Customer)

export class CustomerService {

    static async getAllCostumers() {
        const data = await repo.find({
            select: {
                customerId: true,
                name: true,
                email: true,
                phone: true,
                taxId: true,
                createdAt: true,
                updatedAt: true
            },
            where: {
                deletedAt: IsNull()
            }
        })

        data.forEach(Customer => {
            delete Customer.deletedAt
        })
        return data
    }

}