import RegisterForm from "@/components/forms/register/RegisterForm";
import Link from "next/link";

function RegisterPage() {
  return (
    <div className="flex flex-col">
      <section className="bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <h1 className="font-display text-4xl text-white tracking-wide">
            CREAR CUENTA
          </h1>
          <p className="text-white/60 mt-2 text-sm">
            Registrate para empezar a comprar en nuestra tienda
          </p>
        </div>
      </section>

      <section className="flex-1 flex items-center justify-center px-4 sm:px-6 py-12">
        <div className="w-full max-w-md">
          <RegisterForm />
          <p className="text-center text-sm text-muted mt-6">
            ¿Ya tenés cuenta?{" "}
            <Link
              href="/auth/login"
              className="text-primary font-semibold hover:text-primary-light transition-colors"
            >
              Iniciá sesión
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}

export default RegisterPage;
