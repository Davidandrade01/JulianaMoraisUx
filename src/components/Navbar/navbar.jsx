import React from 'react';
import styles from './navbar.module.scss';

export default function Navbar() {
  return (
    <nav className={`${styles.box} navbar navbar-expand-lg`}>
      <div className="container-fluid">
        <a className="navbar-brand jm_logo" href="/">
          JULIANA MORAIS
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        
        {/* Removemos "bg-light" e adicionamos a classe "bgMobile" */}
        <div
          className={`collapse navbar-collapse justify-content-end ${styles.bgMobile}`}
          id="navbarNav"
        >
          <ul className="navbar-nav jm_btn_medium">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">
                About
              </a>
            </li>
            {/* Submenu (Dropdown) */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Case of Studies
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                   Sales Calculator 
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    + Saúde
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Open Data
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" tabIndex="-1" aria-disabled="true">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
