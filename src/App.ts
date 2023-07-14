import swaggerUi from 'swagger-ui-express'
import { swaggerSpec } from './swagger.conf'
import express,{Application, Request, Response} from 'express'
import passport from "./config/passport"
import dotenv from 'dotenv'
dotenv.config()
import PacienteRouter from './routers/PacienteRouter'
import MedicoRouter from './routers/MedicoRouter'
import CitaRoutes from './routers/Cita.routes'
import EspecialidadRoutes from './routers/Especialidad.routes'
import FormularioRoutes from './routers/Formulario.routes'
import cors from 'cors'
import rutas_auth from './routers/authRoutes'
import miEstrategia from "./config/passport"

/**
 * Clase pricipal de la API, Define las rutas de la API
 * @author Kelly Johanna Estupiñan Manrique
 * @description Clase Inicial de ejemplo para manejar rutas y documentacion
 */
class App{
	//Atributo
	public app:Application
	private server:any

	constructor(){
		/**
         * Express es la biblioteca para definir API en el ecosistema de Node.js
         */
		this.app=express()
		this.app.use(express.json())
		this.app.use(
			'/api-docs',
			swaggerUi.serve,
			swaggerUi.setup(swaggerSpec)
		)
		this.app.use(cors())
		this.routes()
		this.app.use('/auth',rutas_auth)
		passport.use(miEstrategia)
		this.app.use(passport.initialize()) 
		this.app.use('/',passport.authenticate('jwt',{session:false}) ,PacienteRouter)
		this.app.use('/',passport.authenticate('jwt',{session:false}) ,CitaRoutes)

	}
	private routes():void{
		  this.app.use('/',PacienteRouter)
			this.app.use('/',MedicoRouter)
			this.app.use('/',CitaRoutes)
			this.app.use('/',EspecialidadRoutes)
			this.app.use('/',FormularioRoutes)
	}
		/**
	 * Método para la iniciación del servidor, Aunque se define un método de apagado de servidor,
	 * se utiliza la biblioteca nodemon para automatizar el enciendido y apagado del servidor
	 */
	public start():void{

		this.server=this.app.listen(
			3000,
			()=>{console.log('El servidor está escuchando en el puerto 3000')}
		)
	}

	/**
	 * Método para apagar el servidor, tenga en cuenta el uso de la biblioteca nodemon para su automatización
	 */
	public close():void{
		this.server.close()
	}

}

export default App