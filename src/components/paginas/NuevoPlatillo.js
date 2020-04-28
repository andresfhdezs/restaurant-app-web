import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const NuevoPlatillo = () => {

    const formik = useFormik({
        initialValues: {
            nombre: '',
            precio: '',
            categoria: '',
            imagen: '',
            descripcion: ''
        },
        validationSchema: Yup.object({
            nombre: Yup.string()
                .min(3, "Los platillos deben tener al menos 3 caracteres")
                .required('El nombre del platillo es obligatorio'),
            precio: Yup.number()
                .min(1, "Debes agregar un número")
                .required('El precio es obligatorio'),
            categoria: Yup.string()
                .required('La categoría es obligatoria'),
            descripcion: Yup.string()
                .min(20, "La descripción debe tener al menos 20 caracteres")
                .required('La descripción es obligatoria'),
        }),
        onSubmit: datos => {
            console.log(datos);
        }
    })

    return (
        <>
            <h1 className="text-3xl font-light mb-4">Agregar Platillo</h1>

            <div className="flex justify-center mt-10">
                <div className="w-full max-w-3xl">
                    <form
                        onSubmit={formik.handleSubmit} >
                        <div className="mb-4">
                            <label htmlFor="nombre" className="block text-gray-700 text-sm font-bold mb-2">Nombre</label>
                            <input
                                id="nombre"
                                type="text"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-light focus:outline-none focus:shadow-outline"
                                placeholder="Nombre platillo"
                                value={formik.values.nombre}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur} />
                        </div>
                        { formik.touched.nombre && formik.errors.nombre ? (
                            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                                <p className="font-bold">Hubo un error:</p>
                                <p>{ formik.errors.nombre }</p>
                            </div>
                        ) : null }

                        <div className="mb-4">
                            <label htmlFor="precio" className="block text-gray-700 text-sm font-bold mb-2">Precio</label>
                            <input
                                id="precio"
                                type="number"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-light focus:outline-none focus:shadow-outline"
                                placeholder="$1.000"
                                min="0"
                                value={formik.values.precio}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur} />
                        </div>

                        { formik.touched.precio && formik.errors.precio ? (
                            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                                <p className="font-bold">Hubo un error:</p>
                                <p>{ formik.errors.precio }</p>
                            </div>
                        ) : null }

                        <div className="mb-4">
                            <label htmlFor="categoria" className="block text-gray-700 text-sm font-bold mb-2">Categoría</label>
                            <select
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-light focus:outline-none focus:shadow-outline"
                                id="categoria"
                                name="categoria"
                                value={formik.values.categoria}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            >
                                <option value="">-- Seleccione una opción --</option>
                                <option value="desayuno">Desayuno</option>
                                <option value="comida">Comida</option>
                                <option value="cena">Cena</option>
                                <option value="bebida">Bebida</option>
                                <option value="postre">Postre</option>
                                <option value="ensalada">Ensalada</option>
                            </select>
                        </div>
                        { formik.touched.categoria && formik.errors.categoria ? (
                            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                                <p className="font-bold">Hubo un error:</p>
                                <p>{ formik.errors.categoria }</p>
                            </div>
                        ) : null }

                        <div className="mb-4">
                            <label htmlFor="imagen" className="block text-gray-700 text-sm font-bold mb-2">Imagen</label>
                            <input
                                id="imagen"
                                type="file"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-light focus:outline-none focus:shadow-outline"
                                value={formik.values.imagen}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur} />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="descripcion" className="block text-gray-700 text-sm font-bold mb-2">Descripción</label>
                            <textarea
                                id="descripcion"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-light focus:outline-none focus:shadow-outline h-40"
                                placeholder="Descripción del platillo"
                                value={formik.values.descripcion}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur} ></textarea>
                        </div>
                        { formik.touched.descripcion && formik.errors.descripcion ? (
                            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                                <p className="font-bold">Hubo un error:</p>
                                <p>{ formik.errors.descripcion }</p>
                            </div>
                        ) : null }

                        <input
                            type="submit"
                            className="bg-gray-800 hover:bg-gray-900 w-full mt-5 p-2 text-white uppercase font-bold"
                            value="Agregar platillo" />
                    </form>
                </div>
            </div>
        </>
    )
}

export default NuevoPlatillo