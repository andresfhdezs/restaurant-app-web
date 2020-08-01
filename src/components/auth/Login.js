import React, { useContext } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import AuthContext from '../../context/auth/authContext'

import { useNavigate } from 'react-router-dom'

export const Login = () => {

    const authContext = useContext(AuthContext);
    const { iniciarSesion } = authContext;

    // Hook para redireccionar
    const navigate = useNavigate()

    // Validación y leer los datos del formulario
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email('Ingrese un email valido')
                .required('El correo es obligatorio'),
            password: Yup.string()
                .min(6, "Debes agregar minimo 6 dígitos")
                .required('La contraseña es obligatoria')
        }),
        onSubmit: datos => {
            try {
                
                iniciarSesion(datos)

                //Redireccionar 
                navigate('/menu')
            } catch (error) {
                console.log(error)
            }
        }
    })

    // if(autenticado) {
    //     navigate('/menu')
    // }

    return (
        <>
            <h1 className="text-3xl font-light mb-4">Iniciar sesión</h1>

            <div className="flex justify-center mt-10">
                <div className="w-full max-w-3xl">
                    <form
                        onSubmit={formik.handleSubmit} >
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                            <input
                                id="email"
                                type="email"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="example@mail.com"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur} />
                        </div>
                        {formik.touched.email && formik.errors.email ? (
                            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                                <p className="font-bold">Hubo un error:</p>
                                <p>{formik.errors.email}</p>
                            </div>
                        ) : null}

                        <div className="mb-4">
                            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Contraseña</label>
                            <input
                                id="password"
                                type="password"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="******"
                                value={formik.values.precio}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur} />
                        </div>

                        {formik.touched.password && formik.errors.password ? (
                            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                                <p className="font-bold">Hubo un error:</p>
                                <p>{formik.errors.password}</p>
                            </div>
                        ) : null}

                        <input
                            type="submit"
                            className="bg-gray-800 hover:bg-gray-900 w-full mt-5 p-2 text-white uppercase font-bold"
                            value="Iniciar Sesión" />
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login
