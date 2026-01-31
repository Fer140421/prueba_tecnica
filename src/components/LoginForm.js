"use client";

export default function LoginForm({ onSubmit, error }) {
  return (
    <div className="card border-primary">
      <div className="card-body p-4">
        <h4 className="text-center text-primary mb-4">Inicio de sesión</h4>
        {error && <div className="alert alert-danger py-2">{error}</div>}
        <form onSubmit={onSubmit}>
          <div className="mb-3">
            <label className="form-label">CI</label>
            <input
              type="text"
              name="ci"
              className="form-control"
              placeholder="Ingrese su CI"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Correo</label>
            <input
              type="email"
              name="correo"
              className="form-control"
              placeholder="correo@ejemplo.com"
            />
          </div>
          <div className="mb-4">
            <label className="form-label">Contraseña</label>
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Ingrese su contraseña"
            />
          </div>
          <button className="btn btn-primary w-100">Iniciar sesión</button>
        </form>
      </div>
    </div>
  );
}
