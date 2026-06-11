"use client";

import { useFormik } from "formik";
import { loginInitialValues, loginValidationSchema } from "./loginSchema";
import { loginUser } from "@/services/auth.service";
import { useAuth } from "@/contexts/AuthContext";

const inputClassName =
  "w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm outline-none focus:border-accent transition-colors placeholder:text-muted";
const labelClassName = "text-sm font-medium text-foreground mb-1.5";
const errorClassName = "text-danger text-xs mt-1";

function LoginForm() {
  const { setDataUser } = useAuth();

  const formik = useFormik({
    initialValues: loginInitialValues,
    validationSchema: loginValidationSchema,
    onSubmit: async (values) => {
      const loginResponse = await loginUser(values);
      setDataUser(loginResponse);
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="bg-surface border border-border rounded-xl p-8 shadow-sm space-y-5"
    >
      <div className="text-center mb-2">
        <h2 className="font-display text-2xl text-foreground tracking-wide">
          BIENVENIDO
        </h2>
        <p className="text-muted text-sm mt-1">
          Ingresá tus credenciales para continuar
        </p>
      </div>

      <div className="flex flex-col">
        <label htmlFor="login-email-input" className={labelClassName}>
          Email
        </label>
        <input
          id="login-email-input"
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
        <label htmlFor="login-password-input" className={labelClassName}>
          Contraseña
        </label>
        <input
          id="login-password-input"
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

      <button
        type="submit"
        className="w-full bg-primary hover:bg-primary-light text-white font-semibold py-3 rounded-lg text-sm transition-colors"
      >
        Iniciar sesión
      </button>
    </form>
  );
}

export default LoginForm;
