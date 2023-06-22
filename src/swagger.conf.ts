//1. Importar la biblioteca de trabajo 
import { version } from "os";
import swaggerJSDoc from "swagger-jsdoc";

export const swaggerOptions={
    definition:{
        openapi:"3.0.0",
        info:{
            title:"API de la IPS AteneaIPS",
            description:"En esta API tenemos la funcionalidad que soporta la operación de IPS AteneaIPS",
            version:"1.1.1.1"
        },

        servers:{
            url:"http:localhost:3000",
            description:"Servidor local de documentacion"
        }
    },

    apis:["scr/index.ts", "./swagger/*.swagger.ts"]
}

export const swaggerSpec=swaggerJSDoc(swaggerOptions) 