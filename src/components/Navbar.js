import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import loginContext from "../store/LoginContext";

function Navbar() {
  let logCtx = useContext(loginContext);
  if (logCtx.verifyConnecte())
    return (
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <NavLink
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
            to="/"
          >
            Accueil
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            end
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
            to="/cv"
          >
            CV
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
            to="/cv/add"
          >
            AjouterCV
          </NavLink>
        </li>
        <li className="nav-item">
          <a
            onClick={() => {
              logCtx.seDeconnecter();
            }}
          >
            Logout
          </a>
        </li>
      </ul>
    );
  else
    return (
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <NavLink
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
            to="/"
          >
            Accueil
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            end
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
            to="/cv"
          >
            CV
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
            to="/login"
          >
            Login
          </NavLink>
        </li>
      </ul>
    );
}

export default Navbar;
