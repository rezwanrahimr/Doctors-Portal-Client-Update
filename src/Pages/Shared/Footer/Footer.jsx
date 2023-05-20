import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-neutral text-neutral-content">
        <div>
          <span className="footer-title">Services</span>
          <Link to="" className="link link-hover">
            Design
          </Link>
          <Link to="" className="link link-hover">
            Marketing
          </Link>
          <Link to="" className="link link-hover">
            Advertisement
          </Link>
          <Link to="" className="link link-hover">
            Branding
          </Link>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <Link to="" className="link link-hover">
            About us
          </Link>
          <Link to="" className="link link-hover">
            Contact
          </Link>
          <Link to="" className="link link-hover">
            Jobs
          </Link>
          <Link to="" className="link link-hover">
            Press kit
          </Link>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <Link to="" className="link link-hover">
            Terms of use
          </Link>
          <Link to="" className="link link-hover">
            Privacy policy
          </Link>
          <Link to="" className="link link-hover">
            Cookie policy
          </Link>
        </div>
      </footer>
      <div className="text-center">
        <p>Copyright © 2023 - All right reserved by Doctors Portal </p>
      </div>
    </div>
  );
};

export default Footer;
