import React, {useContext} from 'react';
import AuthContext from '../../context/auth/authContext';



const Nav = () => {

    // Extraer la información de autenticación
    const authContext = useContext(AuthContext);
    const { usuario, cerrarSesion  } = authContext;

    // useEffect(() => {
    //     usuarioAutenticado();
    //     // eslint-disable-next-line
    // }, []);



    return ( 
        <header className="app-header">
            {usuario ? <p className="nombre-usuario">Hola <span>{usuario.email} </span> </p> : null}
            

            <nav className="nav-principal">
                <button 
                    className="btn btn-blank cerrar-sesion"
                    onClick={() => cerrarSesion() }
                >Cerrar Sesión</button>
            </nav>
        </header>
     );
}
 
export default Nav;