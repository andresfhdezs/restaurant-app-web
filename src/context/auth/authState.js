import React, { useReducer, useContext } from 'react';
import { FirebaseContext } from '../../firebase'
import AuthContext from './authContext';
import AuthReducer from './authReducer';


import {
    OBTENER_USUARIO,
    LOGIN_EXITOSO,
    LOGIN_ERROR,
    CERRAR_SESION
} from '../../types';

const AuthState = props => {
    const initialState = {
        autenticado: null,
        usuario: null,
        cargando: true
    }

    const [state, dispatch] = useReducer(AuthReducer, initialState);

    // Context con las operaciones de firebase
    const { firebase } = useContext(FirebaseContext)

    // Retorna el usuario autenticado
    const usuarioAutenticado = async () => {

        try {
            // console.log(respuesta);
            const usuario = firebase.auth.currentUser
            dispatch({
                type: OBTENER_USUARIO,
                payload: usuario
            });

        } catch (error) {
            console.log(error.response);
            dispatch({
                type: LOGIN_ERROR
            })
        }
    }

    // Cuando el usuario inicia sesión
    const iniciarSesion = datos => {

        firebase.auth.signInWithEmailAndPassword(datos.email, datos.password)
            .then(() => {
                usuarioAutenticado()
                dispatch({
                    type: LOGIN_EXITOSO
                });
            })
            .catch((error) => {
                // Handle Errors here.
                dispatch({
                    type: LOGIN_ERROR,
                    payload: error
                })
            });
    }

    // Cierra la sesión del usuario
    const cerrarSesion = () => {
        firebase.auth.signOut().then(function () {
            dispatch({
                type: CERRAR_SESION
            })
        })
    }

    return (
        <AuthContext.Provider
            value={{
                autenticado: state.autenticado,
                usuario: state.usuario,
                mensaje: state.mensaje,
                cargando: state.cargando,
                iniciarSesion,
                usuarioAutenticado,
                cerrarSesion
            }}
        >{props.children}

        </AuthContext.Provider>
    )
}
export default AuthState;
