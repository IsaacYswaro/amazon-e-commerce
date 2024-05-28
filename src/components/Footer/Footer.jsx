import React from "react";
import classes from "./Footer.module.css";
import { RiExpandUpDownFill } from "react-icons/ri";
import { IoGlobeOutline } from "react-icons/io5";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className={classes.footer}>
      <div className={classes.topDiv}>
        <p onClick={scrollToTop}>Back to top</p>
      </div>
      <div className={classes.footerContent}>
        <div className={classes.footerColumn}>
          <h3>Get to Know Us</h3>
          <ul>
            <li className={classes.footer_link}>
              <a href="https://www.amazon.jobs/en/">Careers</a>
            </li>
            <li className={classes.footer_link}>
              <a href="https://email.aboutamazon.com/l/637851/2020-10-29/pd87g?utm_source=gateway&utm_medium=amazonfooters&utm_campaign=newslettersubscribers&utm_content=amazonnewssignup">
                Amazon Newsletter
              </a>
            </li>
            <li className={classes.footer_link}>
              <a href="#">About Amazon</a>
            </li>
            <li className={classes.footer_link}>
              <a href="#">Accessibility</a>
            </li>
            <li className={classes.footer_link}>
              <a href="#">Amazon Newsletter</a>
            </li>
            <li className={classes.footer_link}>
              <a href="#">Sustainability</a>
            </li>
            <li className={classes.footer_link}>
              <a href="#">Press Center</a>
            </li>
            <li className={classes.footer_link}>
              <a href="#">Investor Relations</a>
            </li>
            <li className={classes.footer_link}>
              <a href="#">Amazon Devices</a>
            </li>
            <li className={classes.footer_link}>
              <a href="#">Amazon Science</a>
            </li>
          </ul>
        </div>
        <div className={classes.footerColumn}>
          <h3>Make Money with Us</h3>
          <ul>
            <li className={classes.footer_link}>
              <a href="#">Sell on Amazon </a>{" "}
            </li>
            <li className={classes.footer_link}>
              <a href="#"> Sell apps on Amazon</a>{" "}
            </li>
            <li className={classes.footer_link}>
              <a href="#">Supply to Amazon </a>
            </li>
            <li className={classes.footer_link}>
              <a href="#">Protect & Build your Brand </a>
            </li>
            <li className={classes.footer_link}>
              <a href="#">Become an Affiliatte </a>
            </li>
            <li className={classes.footer_link}>
              <a href="#">Become a Delivery Driver</a>
            </li>
            <li className={classes.footer_link}>
              <a href="#">Start a Package Delivery Business</a>
            </li>
            <li className={classes.footer_link}>
              <a href="#">Advertise Your Products</a>
            </li>
            <li className={classes.footer_link}>
              <a href="#">Self-Publish with Us</a>
            </li>
            <li className={classes.footer_link}>
              <a href="#">Become an Amazon Hub Partner</a>
            </li>
            <li className={classes.footer_link}>
              <a href="#">› See More Ways to Make Money</a>
            </li>
          </ul>
        </div>
        <div className={classes.footerColumn}>
          <h3>Amazon Payment Products</h3>
          <ul>
            <li className={classes.footer_link}>
              <a href="#">Amazon Visa</a>
            </li>
            <li className={classes.footer_link}>
              <a href="#">Amazon Store Card</a>
            </li>
            <li className={classes.footer_link}>
              <a href="#">Amazon Secured Card</a>
            </li>
            <li className={classes.footer_link}>
              <a href="#">Amazon Business Card</a>
            </li>
            <li className={classes.footer_link}>
              <a href="#">Shop with Points</a>
            </li>
            <li className={classes.footer_link}>
              <a href="#">Credit Card Marketplace</a>
            </li>
            <li className={classes.footer_link}>
              <a href="#">Reload Your Balance</a>
            </li>
            <li className={classes.footer_link}>
              <a href="#">Gift Cards</a>
            </li>
            <li className={classes.footer_link}>
              <a href="#">Amazon Currency Converter</a>
            </li>
          </ul>
        </div>
        <div className={classes.footerColumn}>
          <h3>Let Us Help You</h3>
          <ul>
            <li className={classes.footer_link}>
              <a href="#">Your Account</a>
            </li>
            <li className={classes.footer_link}>
              <a href="#">Your Orders</a>
            </li>
            <li className={classes.footer_link}>
              <a href="#">Shipping Rates & Policies</a>
            </li>
            <li className={classes.footer_link}>
              <a href="#">Amazon Prime</a>
            </li>
            <li className={classes.footer_link}>
              <a href="#">Returns & Replacements</a>
            </li>
            <li className={classes.footer_link}>
              <a href="#">Manage Your Content and Devices</a>
            </li>
            <li className={classes.footer_link}>
              <a href="#">Recalls and Product Safety Alerts</a>
            </li>
            <li className={classes.footer_link}>
              <a href="#">Help</a>
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <section className={classes.bottom_Container}>
        <div className={classes.bottomContent}>
          <div className={classes.footer_logo}>
            <img src="https://www.pngall.com/wp-content/uploads/15/Amazon-Logo-White-Transparent.png" />
          </div>
          <div className={classes.footer_english}>
            {" "}
            <IoGlobeOutline className={classes.glob} />
            English <RiExpandUpDownFill className={classes.arrow} />
          </div>
          <div className={classes.footer_flag}>
            {" "}
            <a href="">
              <img
                src="https://goodies.icons8.com/web/common/header/flags/us.svg"
                alt="flag"
              />
            </a>
            <p>United States</p>
          </div>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
