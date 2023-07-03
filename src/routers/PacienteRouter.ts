import { Router, Request, Response } from "express";
import PacienteController from "../controllers/PacienteController";


//Enrutamiento... En la página de express podeos encontrar todo lo requerido para enrutamientos


class PacienteRouter{
    router:Router
    pacienteController:PacienteController
    

    constructor(){
        this.router=Router()
        this.pacienteController=new PacienteController()
        this.routes()

    }

    private routes():void{
        this.router.get(
			'/pacientes', 
            (req:Request, res:Response)=>{
                this.pacienteController.obtenerPacientes(req,res)
            }
		)

		this.router.post(
			'/crear_paciente', 
            (req:Request, res:Response)=>{
                this.pacienteController.crearPaciente(req,res)
            } 
			
		)
    }
}

const miRouter=new PacienteRouter()
export default miRouter.router