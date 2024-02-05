import "./Login.css";
import { Col, Container, Form, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import weSave from "../../../Assets/login/email.png";
import message from "../../../Assets/login/message.png";
import dec from "../../../Assets/login/decrypt.png";
import ai from "../../../Assets/login/ai.png";
import "../Register/Register.css";
import Footer from "../../Commons/Footer/Footer";
import Header from "../../Commons/Header/Header";
const Login = () => {
  const navigate = useNavigate()
  const handleLogin = (e) =>{
    e.preventDefault();
    navigate('/home')
  }
  return (
    <>
      <Header></Header>
      <div className="signinpage">
        <Container>
          <Row>
            <Col xs={12} md={6} lg={6}>
              <div className="">
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
              <div className="signInForm">
                <p className="signUpFormTitle">Log in to Save</p>

                <p className="formTexts">
                  <small>
                    Don't have an account?
                    <Link to="/register" className="text-decoration-none text-[#1de990] hover:text-[#2e7935] ">
                      {" "}
                      Create an account here
                    </Link>
                  </small>
                </p>

                <Form onSubmit={handleLogin}> 
                  <div className="inputGroup">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="inpField"
                      placeholder="Username"
                      required
                    />
                    <p className="Save"></p>
                  </div>

                  <div className="passFieldslogin">
                    <input
                      type="password"
                      name="password"
                      id="password"
                      className="inpField"
                      placeholder="Password"
                      required
                    />
                  </div>
                  <Link className="text-decoration-none forgot">
                    Forgot Password
                  </Link>
                  <Link  >
                  <button type="submit  " className="submitbtn ">
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
    </>
  );
};

export default Login;
