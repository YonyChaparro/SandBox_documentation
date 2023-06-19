//1. Importar la biblioteca de trabajo 
import swaggerJSDoc from "swagger-jsdoc";

const swaggerOptions={
    definition:{
        openapi:"3.0.0",
        info:{
            title:"API de la IPS AteneaIPS",
            description:"En esta API tenemos la funcionalidad que soporta la operación de IPS AteneaIPS"
        },

        servers:{
            url:"http:localhost:3000",
            description:"Servidor local de documentacion"
        }
    },

    apis:["scr/index.ts", "./swagger/*.swagger.ts"]
}