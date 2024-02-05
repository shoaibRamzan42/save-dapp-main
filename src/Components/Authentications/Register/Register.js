import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Register.css";
import weSave from "../../../Assets/login/email.png";
import message from "../../../Assets/login/message.png";
import dec from "../../../Assets/login/decrypt.png";
import ai from "../../../Assets/login/ai.png";
import Header from "../../Commons/Header/Header";
import Footer from "../../Commons/Footer/Footer";
const Register = () => {
  return (
    <div>
      <Header></Header>
      <div className="signuppage">
        <Container>
          <Row>
            <Col xs={12} md={6} lg={6}>
              <div className="leftPartSignup">
                <p className="pageTitle">Save Enables Web 3 Deposit</p>

                <p className="pageDes">
                  Save is a secure and decentralized email service that
                  leverages encryption and blockchain technology to enable Web 3
                  Deposit. With Save, users can send and receive emails
                  directly between their MetaMask wallets, ensuring the privacy
                  and security of their messages.
                </p>
               
              </div>
            </Col>
            <Col xs={12} md={6} lg={6}>
              <div className="signUpForm">
                <p className="signUpFormTitle">Create your Save Account</p>

                <p className="formTexts">
                  <small>
                    Already have a Save account?{" "}
                    <Link  to="/login" className="text-decoration-none text-[#1de990] hover:text-[#2e7935] ">
                      Log In here
                    </Link>
                  </small>
                </p>

                <Form>
                  <div className="inputGroup">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="inpField"
                      placeholder="Username"
                    />
                    <p className="Save"></p>
                  </div>
                  <p className="permissionText">
                    You can use letters, numbers underscores, and dashes.
                  </p>

                  <div className="passFields">
                    <input
                      type="password"
                      name="password"
                      id="password"
                      className="inpField"
                      placeholder="Password"
                    />

                    <input
                      type="password"
                      name="repassword"
                      id="repassword"
                      className="inpField"
                      placeholder="Re-type Password"
                    />
                  </div>

                  <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check
                      type="checkbox"
                      label="I understand that i cannot reset my password and have stored it safely. WHh?"
                      className="checkbox"
                    />
                  </Form.Group>

                  <div className="checkboxes">
                    <Form.Check type="checkbox" />
                    <p className="formTexts m-0">
                      I agree to{" "}
                      <Link  style={{ color: '#1de990', }}  className="text-decoration-none">
                        Terms of Service
                      </Link>{" "}
                      and{" "}
                      <Link  style={{ color: '#1de990', }}  className="text-decoration-none">
                        Privacy Policy
                      </Link>
                    </p>
                  </div>
                  <Link to="/wallet " >
                  <button type="submit" className="submitbtn ">
                    CONTINUE
                  </button>
                  </Link>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Register;
