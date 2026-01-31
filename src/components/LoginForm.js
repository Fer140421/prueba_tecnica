"use client";

export default function LoginForm({ onSubmit }) {
  return (
    <div className="card bg-dark border-primary shadow-lg">
      <div className="card-body p-4">
        <div className="text-center mb-4">
          <h3 className="text-white fw-bold">Bienvenido</h3>
        </div>
        
        <form onSubmit={onSubmit}>
          <div className="mb-3">
            <label className="form-label text-white fw-bold">
              <i className="bi bi-person-badge me-2 text-primary"></i>CI
            </label>
            <input 
              type="text" 
              id="ci" 
              className="form-control bg-dark text-white border-primary" 
              placeholder="Ingresa tu CI"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label text-white fw-bold">
              <i className="bi bi-envelope me-2 text-primary"></i>Correo
            </label>
            <input 
              type="email" 
              id="correo" 
              className="form-control bg-dark text-white border-primary" 
              placeholder="ejemplo@correo.com"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label text-white fw-bold">
              <i className="bi bi-lock me-2 text-primary"></i>Contraseña
            </label>
            <input 
              type="password" 
              id="password" 
              className="form-control bg-dark text-white border-primary" 
              placeholder="••••••••"
              required
            />
          </div>

          <button className="btn btn-primary w-100 mt-3 py-2 fw-bold">
            <i className="bi bi-box-arrow-in-right me-2"></i>
            Iniciar sesión
          </button>
    
        </form>
      </div>
    </div>
  );
}