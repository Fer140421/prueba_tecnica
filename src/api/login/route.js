export async function POST(request) {
  const body = await request.json().catch(() => null);

  if (!body) {
    return new Response(
      JSON.stringify({ mensaje: "Datos inválidos" }),
      { status: 400 }
    );
  }

  const { ci, correo, password } = body;

  if (!ci || !correo || !password) {
    return new Response(
      JSON.stringify({ mensaje: "Campos obligatorios" }),
      { status: 400 }
    );
  }

  if (correo === "admin@correo.com" && password === "123456") {
    return new Response(
      JSON.stringify({
        mensaje: "Inicio de sesión correcto",
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  return new Response(
    JSON.stringify({ mensaje: "Credenciales incorrectas" }),
    { status: 401 }
  );
}
