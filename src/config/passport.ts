import { Strategy, ExtractJwt } from "passport-jwt"

const opts={
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey:process.env.SECRET_KEY,
}

const miEstrategia:Strategy=new Strategy(
    opts,
    (payload: { id: any; username: any },done: (arg0: null, arg1: boolean) => any)=>{
        const usuario={
            id:payload.id,
            username:payload.username
        }
        if(usuario){
           // return done(null,usuario) //Si el usuario es válido
        }else{
            return done(null,false) //Si el usuario no es válido
        }

        
    }
)

export default miEstrategia