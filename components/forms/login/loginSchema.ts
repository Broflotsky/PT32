//1. Declarar los types de los inputs de mi formulario.
//2. initialValues van a ser los valores iniciales de mi formulario
//3. validationSchema, este sera el encargado de validar mis campos del formulario.
//!4. onSubmit, la funcion que se ejecutara al clickear el boton del formulario.

import * as Yup from "yup";

export interface ILoginFormValues {
  email: string;
  password: string;
}

export const loginInitialValues: ILoginFormValues = {
  email: "",
  password: "",
};

export const loginValidationSchema = Yup.object({
  email: Yup.string()
    .email("Correo electronicom invalido.")
    .required("Correo electronico es obligatorio."),
  password: Yup.string()
    .min(6, "La contrasena debe tener al menos 6 caracteres.")
    .required("contrasena es obligatorio."),
});
