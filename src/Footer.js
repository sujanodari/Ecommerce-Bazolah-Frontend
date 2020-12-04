import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import HouseIcon from "@material-ui/icons/House";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";

function Footer() {
  return (
    <div>
      <footer className="footer-distributed">
        <div className="footer-left">
          <h3>
            Bazolah<span> Market Palace</span>
          </h3>

          <p className="footer-links">
            <Link to="/" className="footer-links-icons">
              <FacebookIcon fontSize="large" />
            </Link>
            <Link to="/" className="footer-links-icons">
              <InstagramIcon fontSize="large" />
            </Link>
            <Link to="/" className="footer-links-icons">
              <TwitterIcon fontSize="large" />
            </Link>
          </p>

          <p className="footer-company-name">
            @Biplab Acharya &copy; {new Date().getFullYear()}
          </p>
        </div>

        <div className="footer-center">
          <List component="nav" aria-label="main mailbox folders">
            <ListItem>
              <ListItemIcon>
                <HouseIcon />
              </ListItemIcon>
              <ListItemText primary="Sifal, Panahilty Marga KTM, NEPAL" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <PhoneIcon />
              </ListItemIcon>
              <ListItemText primary="+1 555 123456" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <EmailIcon />
              </ListItemIcon>
              <ListItemText primary="abc@gmailcom" />
            </ListItem>
          </List>
        </div>

        <div className="footer-right">
          <p className="footer-company-about">
            <span>About the company</span>
            Blozoah is a ecommerce for customers, who want to do online shopping
            &amp; home delivery.
          </p>

          <div classNameName="footer-icons">
            <Link to="/">
              <i className="fa fa-facebook"></i>
            </Link>
            <Link to="/">
              <i className="fa fa-twitter"></i>
            </Link>

            <Link to="/">
              <i className="fa fa-linkedin"></i>
            </Link>
            <Link to="/">
              <i className="fa fa-github"></i>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
