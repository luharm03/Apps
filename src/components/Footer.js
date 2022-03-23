import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-left">
          APPS
          <p>
            <Link className="menu ch" to="/productCart">
              Product
            </Link>
            <br />
            <Link className="menu ch" to="/">
              News
            </Link>
            <br />
            <Link className="menu" to="/">
              Contact
            </Link>
            <br />
            <Link className="menu" to="/productCart">
              Your Cart
            </Link>
          </p>
        </div>
        <div className="footer-right"></div>
      </div>
    </>
  );
};
export default Footer;
