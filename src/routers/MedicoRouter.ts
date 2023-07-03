import { Router, request,response } from "express";

import MedicoController from "../controllers/MedicoController";

class MedicoRouter{
    router:Router
    medicoController: MedicoController

    constructor(){
        this.router=Router()
        this.medicoController= new MedicoController()
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