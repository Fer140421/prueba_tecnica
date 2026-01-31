export async function POST(request) {
  const body = await request.json();
  const { ci, correo, password } = body;

  if (!ci || !correo || !password) {
    return new Response(
      JSON.stringify({ mensaje: "Todos los campos son obligatorios" }),
      { status: 400 }
    );
  }

  if (ci === "123456" && correo === "admin@correo.com" && password === "123456") {
    return new Response(
      JSON.stringify({ mensaje: "Inicio de sesión correcto" }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  }

  return new Response(
    JSON.stringify({ mensaje: "Credenciales incorrectas" }),
    { status: 401 }
  );
}
