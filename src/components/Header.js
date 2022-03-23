import { Link } from "react-router-dom";
import { useState } from "react";
const Header = () => {
  let [nav, setNav] = useState(false);
  return (
    <>
      <div className="header">
        <div className="header-left logo">APPS</div>
        <div className={nav ? "nav header-right" : "header-right"}>
          <button
            className="mobile"
            onClick={() => {
              setNav(nav ? false : true);
            }}
          >
            <i class="fa fa-bars"></i>
          </button>
          <Link className="menu ch" to="/productCart">
            Product
          </Link>
          <Link className="menu ch" to="/">
            News
          </Link>
          <Link className="menu" to="/">
            Contact
          </Link>
          <Link className="menu" to="/">
            <i class="fa fa-trash" aria-hidden="true"></i>
          </Link>
        </div>
      </div>
    </>
  );
};
export default Header;
