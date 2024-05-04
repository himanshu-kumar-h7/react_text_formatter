import PropTypes from "prop-types";
import Form from "./Form";
import { useState } from "react";

function Navbar(props) {
  const [search, setSearch] = useState("");
  const showWords = (event) => {
    setSearch(event.target.value);
  };
  const searchWord = (event) => {
    event.preventDefault();

    const words = props.text.split(/\s+/);
    if (words.includes(search)) {
      alert("Text found");
    } else alert("Text not found");
  };

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                {props.Home}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                {props.Contact}
              </a>
            </li>
          </ul>
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              onClick={props.handleMode1}
              id="flexSwitchCheckDefault"
            />
          </div>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              onChange={showWords}
              placeholder={props.Search}
              aria-label="Search"
            />

            <button
              className="btn btn-outline-success"
              onClick={searchWord}
              type="submit"
            >
              {props.Searchbutton}
            </button>
            <div className="form-check form-switch" ></div>
          </form>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  Home: PropTypes.string.isRequired,
  Contact: PropTypes.string,
};

Navbar.defaultProps = {
  title: "Enter Title",
  Home: "Enter Home",
  Contact: "Phone num",
};

export default Navbar;
