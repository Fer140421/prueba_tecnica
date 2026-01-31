export async function POST() {
  return new Response(
    JSON.stringify({
      mensaje: "Acceso Correcto",
    }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}