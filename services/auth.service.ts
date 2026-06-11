import { ILoginFormValues } from "@/components/forms/login/loginSchema";
import { IRegisterFormValues } from "@/interfaces/user.interface";

export const registerUser = async (userData: IRegisterFormValues) => {
  try {
    const responseRegister = await fetch(
      "http://localhost:3005/users/register",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(userData),
      },
    );
    if (responseRegister.ok) {
      return responseRegister.json();
    } else {
      alert("Ups no pudimos registrarte.");
      throw new Error("Registro fallido");
    }
  } catch (error) {
    throw new Error(error as string);
  }
};

export const loginUser = async (userData: ILoginFormValues) => {
  try {
    const responseRegister = await fetch("http://localhost:3005/users/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    if (responseRegister.ok) {
      return responseRegister.json();
    } else {
      alert("Ups no pudimos registrarte.");
      throw new Error("Logueo fallido");
    }
  } catch (error) {
    throw new Error(error as string);
  }
};
