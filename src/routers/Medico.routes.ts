import { Router, request,response } from "express";

import MedioController from "../controllers/medicoController";

class MedicoRouter{
    router:Router
    medicoController: MedioController

    constructor(){
        this.router=Router()
        this.medicoController= new this.medicoController()
        this.routers()
    }

    private routers():void{

        this.router.get('/medicos',
        (req:Request, res:Response)=>{
            this.medicoController.obtenerMedicos(req,res)
        }
        )
    }
}

export default MedicoRouter