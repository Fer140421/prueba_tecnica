import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark border-bottom">
      <div className="container-fluid">
        <div className="navbar-nav mx-auto">
          <Link className="nav-link text-white fw-bold px-4" href="/menu">
            <i className="bi bi-house-door me-2"></i>
            Home
          </Link>
          <Link className="nav-link text-white fw-bold px-4" href="/menu/about">
            <i className="bi bi-info-circle me-2"></i>
            About
          </Link>
        </div>
        <Link className="btn btn-outline-danger btn-sm" href="/login">
          <i className="bi bi-box-arrow-right me-1"></i>
          Cerrar Sesion
        </Link>
      </div>
    </nav>
  );
}