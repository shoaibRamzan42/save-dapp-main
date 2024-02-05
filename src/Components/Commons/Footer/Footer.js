import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { FaFacebookF } from "react-icons/fa";
import tw from "../../../Assets/footer/twitter.png";
import insta from "../../../Assets/footer/insta.png";
import { Col, Container, Row } from "react-bootstrap";
import Logo from "../Footer/Logo1.png";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <Container fluid>
          <Row className="gx-3">
            <Col xs={12} md={6} lg={3}>
              <div>
                <Link to="/">
                <img src={Logo} alt="logo" className="max-w-[30%]" />
                </Link>
              </div>
            </Col>
            <Col xs={12} md={6} lg={2}>
              <div className="list-navs">
                <Link to="/" className="link hover:text-[#1de990]">
                  ABOUT
                </Link>
                <Link to="/" className="link hover:text-[#1de990]">
                  TEAM
                </Link>
                <Link to="/" className="link hover:text-[#1de990]">
                  CONTACT US
                </Link>
                <Link to="/" className="link hover:text-[#1de990]">
                  BLOGS
                </Link>
              </div>
            </Col>
            <Col xs={12} md={6} lg={3}>
              <div className="list-navs">
                <Link to="/" className="link uppercase hover:text-[#1de990]">
                  PRIVACY & TERMS OF SERVICE
                </Link>
                <Link to="/" className="link hover:text-[#1de990]">
                  COOKIE NOTICE
                </Link>
              </div>
            </Col>
            <Col xs={12} md={6} lg={4}>
              <div className="">
                <p className="social-title">SOCIALS</p>

                <div className="socials">
                  <div className="socIconContainer">
                    <div className="icon"></div>
                    <FaFacebookF className="f-icon" />
                  </div>

                  <div className="socIconContainer">
                    <div className="icon"></div>
                    <img src={tw} alt="" className="f-icon" />
                  </div>

                  <div className="socIconContainer">
                    <div className="icon"></div>
                    <img src={insta} alt="" className="f-icon" />
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="copyright">
        <p className="copyText">© 2022, Save LIMITED. ALL RIGHTS RESERVED.</p>
      </div>
    </>
  );
};

export default Footer;
