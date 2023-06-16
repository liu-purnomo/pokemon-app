import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="col-md-2 bg-warning d-flex flex-column vh-100">
      <div className="text-center mt-4">
        <h4 className="text-success">Pokedex</h4>
      </div>
      <hr />
      <ul className="nav flex-column">
        <li className="nav-item">
          <NavLink className="nav-link text-dark" to="/">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-dark" to="/add-pokemon">
            Add
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-dark" to="/fire">
            Fire
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-dark" to="/water">
            Water
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-dark" to="/grass">
            Grass
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
