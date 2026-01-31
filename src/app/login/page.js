"use client";

import LoginForm from "@/components/LoginForm";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  async function validarSesion(e) {
    e.preventDefault();

    const ci = document.getElementById("ci").value;
    const correo = document.getElementById("correo").value;
    const password = document.getElementById("password").value;

    if (!ci || !correo || !password) {
      alert("Todos los campos son obligatorios");
      return;
    }

    const res = await fetch("/api/login", {
      method: "POST",
    });

    if (res.status === 200) {
      router.push("/menu");
    }
  }

  return (
    <div className="container-fluid vh-100 bg-dark text-white">
      <div className="
        row h-100 
        justify-content-center justify-content-md-start 
        align-items-center
      ">
        <div className="col-11 col-md-4 ms-md-5">
          <LoginForm onSubmit={validarSesion} />
        </div>
      </div>
    </div>
  );
}