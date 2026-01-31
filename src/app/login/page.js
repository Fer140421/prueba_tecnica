"use client";

import LoginForm from "@/components/LoginForm";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const [error, setError] = useState("");

  async function validarSesion(e) {
    e.preventDefault();
    setError("");

    const form = e.target;
    const ci = form.ci.value.trim();
    const correo = form.correo.value.trim();
    const password = form.password.value.trim();

    // VALIDACIÓN
    if (!ci || !correo || !password) {
      setError("Todos los campos son obligatorios");
      return;
    }

    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ci, correo, password }),
    });

    if (res.status === 200) {
      router.push("/menu");
    } else {
      setError("Credenciales incorrectas");
    }
  }

  return (
    <div className="container-fluid vh-100 bg-light">
      <div className="row h-100 align-items-center">
        <div className="col-11 col-sm-8 col-md-4 ms-md-5">
          <LoginForm onSubmit={validarSesion} error={error} />
        </div>
      </div>
    </div>
  );
}
