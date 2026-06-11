"use client";

import { useFormik } from "formik";
import {
  registerInitialValues,
  registerValidationSchema,
} from "./registerSchema";
import { registerUser } from "@/services/auth.service";

const inputClassName =
  "w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm outline-none focus:border-accent transition-colors placeholder:text-muted";
const labelClassName = "text-sm font-medium text-foreground mb-1.5";
const errorClassName = "text-danger text-xs mt-1";

function RegisterForm() {
  const formik = useFormik({
    initialValues: registerInitialValues,
    validationSchema: registerValidationSchema,
    onSubmit: async (values, { resetForm }) => {
      registerUser(values);
      resetForm();
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="bg-surface border border-border rounded-xl p-8 shadow-sm space-y-5"
    >
      <div className="text-center mb-2">
        <h2 className="font-display text-2xl text-foreground tracking-wide">
          REGISTRO
        </h2>
        <p className="text-muted text-sm mt-1">
          Completá tus datos para crear tu cuenta
        </p>
      </div>

      <div className="flex flex-col">
        <label htmlFor="register-name-input" className={labelClassName}>
          Nombre
        </label>
        <input
          id="register-name-input"
          type="text"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          className={inputClassName}
          placeholder="Tu nombre"
        />
        {formik.errors.name ? (
          <p className={errorClassName}>{formik.errors.name}</p>
        ) : null}
      </div>

      <div className="flex flex-col">
        <label htmlFor="register-email-input" className={labelClassName}>
          Email
        </label>
        <input
          id="register-email-input"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          type="email"
          className={inputClassName}
          placeholder="tu@email.com"
        />
        {formik.errors.email ? (
          <p className={errorClassName}>{formik.errors.email}</p>
        ) : null}
      </div>

      <div className="flex flex-col">
        <label htmlFor="register-password-input" className={labelClassName}>
          Contraseña
        </label>
        <input
          id="register-password-input"
          type="password"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          className={inputClassName}
          placeholder="••••••••"
        />
        {formik.errors.password ? (
          <p className={errorClassName}>{formik.errors.password}</p>
        ) : null}
      </div>

      <div className="flex flex-col">
        <label
          htmlFor="register-confirm-password-input"
          className={labelClassName}
        >
          Confirmar contraseña
        </label>
        <input
          id="register-confirm-password-input"
          type="password"
          name="confirmPassword"
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
          className={inputClassName}
          placeholder="••••••••"
        />
        {formik.errors.confirmPassword ? (
          <p className={errorClassName}>{formik.errors.confirmPassword}</p>
        ) : null}
      </div>

      <div className="flex flex-col">
        <label htmlFor="register-address-input" className={labelClassName}>
          Dirección
        </label>
        <input
          id="register-address-input"
          type="text"
          name="address"
          value={formik.values.address}
          onChange={formik.handleChange}
          className={inputClassName}
          placeholder="Calle, número, ciudad"
        />
        {formik.errors.address ? (
          <p className={errorClassName}>{formik.errors.address}</p>
        ) : null}
      </div>

      <div className="flex flex-col">
        <label htmlFor="register-phone-input" className={labelClassName}>
          Celular
        </label>
        <input
          id="register-phone-input"
          type="tel"
          name="phone"
          value={formik.values.phone}
          onChange={formik.handleChange}
          className={inputClassName}
          placeholder="300 000 0000"
        />
        {formik.errors.phone ? (
          <p className={errorClassName}>{formik.errors.phone}</p>
        ) : null}
      </div>

      <button
        type="submit"
        className="w-full bg-primary hover:bg-primary-light text-white font-semibold py-3 rounded-lg text-sm transition-colors"
      >
        Crear cuenta
      </button>
    </form>
  );
}

export default RegisterForm;
