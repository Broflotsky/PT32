import LoginForm from "@/components/forms/login/LoginForm";
import Link from "next/link";

function LoginPage() {
  return (
    <div className="flex flex-col">
      <section className="bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <h1 className="font-display text-4xl text-white tracking-wide">
            INICIAR SESIÓN
          </h1>
          <p className="text-white/60 mt-2 text-sm">
            Accedé a tu cuenta para gestionar tus compras
          </p>
        </div>
      </section>

      <section className="flex-1 flex items-center justify-center px-4 sm:px-6 py-12">
        <div className="w-full max-w-md">
          <LoginForm />
          <p className="text-center text-sm text-muted mt-6">
            ¿No tenés cuenta?{" "}
            <Link
              href="/auth/register"
              className="text-primary font-semibold hover:text-primary-light transition-colors"
            >
              Registrate aquí
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}

export default LoginPage;
