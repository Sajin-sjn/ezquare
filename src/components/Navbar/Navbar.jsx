import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg main-nav">
      <div className="container">
        {/* LOGO BAR */}
        <a className="navbar-brand" href="/">
          <img src="static/images/logo.png" alt="meetub" className="img-fluid logo-b" />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="tf-ion-android-menu"></span>
        </button>

        {/* MAIN MENU */}
        <div className="collapse navbar-collapse text-center" id="navbarNavDropdown">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <a className="nav-link" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/login">Login</a>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown1"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Pages
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown1">
                <a className="dropdown-item" href="/about">About</a>
                <a className="dropdown-item" href="/pricing">Tickets</a>
                <a className="dropdown-item" href="/schedule">Schedule</a>
                <a className="dropdown-item" href="/login">Login</a>
                <a className="dropdown-item" href="/signup">Registration</a>
                <a className="dropdown-item" href="/error">404 Page</a>
                <a className="dropdown-item" href="/faq">Supports</a>
              </div>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown2"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Blog
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown2">
                <a className="dropdown-item" href="/blog">Blog</a>
                <a className="dropdown-item" href="/blog-single">Blog Single</a>
              </div>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/contact">Contact</a>
            </li>
          </ul>

          <a href="/pricing" className="btn btn-secondary btn-rounded mt-3 mt-lg-0">
            Get Ticket
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
