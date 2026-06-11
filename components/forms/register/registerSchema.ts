import { IRegisterFormValues } from "@/interfaces/user.interface";
import * as Yup from "yup";

export const registerInitialValues: IRegisterFormValues = {
  email: "",
  password: "",
  confirmPassword: "",
  name: "",
  address: "",
  phone: "",
};

export const registerValidationSchema = Yup.object({
  email: Yup.string()
    .email("Correo electronicom invalido.")
    .required("Correo electronico es obligatorio."),
  password: Yup.string()
    .min(6, "La contrasena debe tener al menos 6 caracteres.")
    .required("contrasena es obligatorio."),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password")],
    "Las contrasenas deben ser iguales.",
  ),
  name: Yup.string().required("Nombre es obligatorio."),
  address: Yup.string().required("Direccion es obligatorio"),
  phone: Yup.string()
    .matches(/^[0-9+\-\s()]+$/, "El telefono debe contener solo numeros")
    .required("Nombre es obligatorio."),
});
