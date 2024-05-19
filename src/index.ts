import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import { configDotenv } from 'dotenv'
import { AppDataSource } from './db'
import { ServiceService } from './services/service.service'
import { TypeRoute } from './routes/type.route'
import { State } from './entities/State'
import { StateRoute } from './routes/state.route'
import { Service } from './entities/Service'
import { ServiceRoute } from './routes/service.route'
import { Model } from './entities/Model'
import { ModelRoute} from './routes/model.route'
import { ManufacturerRoute } from './routes/manufacturer.route'
import { DeviceRoute } from './routes/device.route'
import { CustomerRoute } from './routes/customer.route'



const app = express()
app.use(express.json())
app.use(cors())
app.use(morgan('tiny')) //omogucava da formitra izlaz kako ce ispisivati nase https zahteve


configDotenv()
AppDataSource.initialize().then(() => {
    console.log('Connected to database')
    const port = process.env.SERVER_PORT || 4000 //prvo ce biti ucitana prva stavka a ako je nema onda ce biti port od 4000
    app.listen(port, () => {
        console.log("Listening on port" + port)
    })

}).catch((e) => console.log(e));
app.use('/api/customer', CustomerRoute)
app.use('/api/device', DeviceRoute)
app.use('/api/manufacturer', ManufacturerRoute)
app.use('/api/state', StateRoute)
app.use('/api/type', TypeRoute)
app.use('/api/service', ServiceRoute)
app.use('/api/model', ModelRoute)


app.get('/', async (req, res) => {
    res.json(await ServiceService.getAllServicesByCode('Q123'))
})

//pokupi sve tog tipa
app.get("*", (req, res) => {
    res.status(404).json({
        message: "Not found"
    })
})