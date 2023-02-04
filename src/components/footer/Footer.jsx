import "./Footer.css";
import footerLogo from "../../assets/images/header_logo.svg";
import { BsFillTelephoneFill } from "react-icons/bs";
import { HiMail } from "react-icons/hi";
const Footer = () => {
  return (
    <div className="fot">
      <div className="footer">
        <div className="footer_content">
          <div className="footer_text_card">
            <img className="footer_logo" src={footerLogo} alt="footer_logo" />
            <p className="footer_card_text">625 E Franklin Ave, Minneapolis</p>
            <p className="footer_card_text">MN 55404, USA</p>
            <p className="footer_card_text">
              @2022 saspik. All rights reserved.
            </p>
          </div>
          <div className="footer_text_card">
            <p className="footer_card_title">About us</p>
            <p className="footer_card_text">Our story</p>
            <p className="footer_card_text">Sustainability</p>
            <p className="footer_card_text">Craftsmanship</p>
          </div>
          <div className="footer_text_card">
            <p className="footer_card_title">Support</p>
            <p className="footer_card_text">FAQ’s</p>
            <p className="footer_card_text">Shipping & Retuens</p>
            <p className="footer_card_text">Warranty</p>
          </div>
          <div className="footer_text_card">
            <p className="footer_card_title">Contact us</p>
            <p className="footer_card_phone">
              <a className="footer_link" href="tel:1253211523">
                <BsFillTelephoneFill />
                ++ 1253 211 523
              </a>
            </p>
            <p className="footer_card_sms">
              <a
                className="footer_link"
                href="mailto:ismoilovshaxruz775@gmail.com"
              >
                <HiMail />
                hello@saspik.com
              </a>
            </p>
          </div>
        </div>

        <p className="footer_bottom_text">
          Privacy Policy Team Of Ues California Code
        </p>
      </div>
    </div>
  );
};
export default Footer;
