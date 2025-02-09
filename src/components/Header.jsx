import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div className="container">
        <div className="flex">
          <div className="img-container">
            <img src="public\img\Logo.jpeg" alt="Logo" />
          </div>
          <nav>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about-us">About us</NavLink>
              </li>
              <li>
                <NavLink to="/feed">Feed</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
