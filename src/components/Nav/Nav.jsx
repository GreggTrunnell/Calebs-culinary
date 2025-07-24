import { NavLink } from 'react-router-dom';

function Nav() {

  return (

    <nav>
      <div className="btn-group" role="group">
        <NavLink className="btn btn-success" to="/">Home</NavLink>
        <NavLink className="btn btn-success" to="/services">Services</NavLink>
        <NavLink className="btn btn-success" to="/about">About</NavLink>
      </div>
    </nav>
  );
}

export default Nav;
