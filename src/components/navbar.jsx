import axios from "axios";

const Navbar = () => {

  const Logout = async () => {
    try {
      await axios.delete("http://localhost:4001/logout");
      window.location.href = "/";
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <nav
      className="navbar is-light"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <a
            className="navbar-item"
            href="https://transformation.waskita.co.id/"
          >
            <img
              src="../../public/Waskita_Karya.svg.png"
              width="80"
              height="100"
              alt="Logo"
            />
          </a>

          <a
            href="/"
            role="button"
            className="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <a href="/" className="navbar-item">
              Home
            </a>
          </div>

          <div className="navbar-end">
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">Docs</a>

              <div className="navbar-dropdown">
                <a className="navbar-item">Overview</a>
                <a className="navbar-item">Elements</a>
                <a className="navbar-item">Components</a>
                <hr className="navbar-divider" />
                <div className="navbar-item">Version 0.9.4</div>
              </div>
            </div>

            <div className="navbar-item">
              <div className="buttons">
                <button onClick={Logout} className="button is-light">
                  Log out
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
