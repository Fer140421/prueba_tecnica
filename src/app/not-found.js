import Link from "next/link";

export default function NotFound() {
  return (
    <div className="vh-100 d-flex flex-column justify-content-center align-items-center bg-dark text-white">
      <div className="text-center">
        <h1 className="display-1 fw-bold text-white">404</h1>
        <h2 className="mb-3">Página no encontrada</h2>
        <p className="text-muted mb-4">
          Lo sentimos, la página que buscas no existe.
        </p>

        <Link href="/" className="btn btn-primary btn-lg">
          <i className="bi bi-house-door me-2"></i>
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}