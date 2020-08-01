import { 
    OBTENER_USUARIO,
    LOGIN_EXITOSO,
    LOGIN_ERROR,
    CERRAR_SESION
} from '../../types';

export default (state, action) => {
    switch(action.type) {
        case LOGIN_EXITOSO:
            return {
                ...state,
                autenticado: true,
                mensaje: null,
                cargando: false
            }
        case OBTENER_USUARIO: 
            return {
                ...state,
                autenticado: true,
                usuario: action.payload, 
                cargando: false
            }
        case CERRAR_SESION:
        case LOGIN_ERROR:
            return {
                ...state,
                usuario: null,
                autenticado: null,
                // mensaje: action.payload, 
                cargando: false
            }
        
        default:
            return state;
    }
}