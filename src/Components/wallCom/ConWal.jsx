import React ,{useState} from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Component from "./Popup";


const Wall = () => {
    const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <div className="item-center flex justify-center ">
        <Col xs={12} md={6} lg={6}>
          <div className="signUpForm">
            <p className="signUpFormTitle">Create your Safe Wallet</p>

            <Form>
              <Form.Group className="mb-3" >
                <Form.Check
                  type="checkbox"
                  label="I understand that i'm creating a secure web3 wallet"
                  className="checkbox"
                />
              </Form.Group>

              <div className="checkboxes">
                <Form.Check type="checkbox" />
                <p className="formTexts m-0">
                  I agree to{" "}
                  <Link
                    style={{ color: "#1de990" }}
                    className="text-decoration-none"
                  >
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link
                    style={{ color: "#1de990" }}
                    className="text-decoration-none"
                  >
                    Privacy Policy
                  </Link>
                </p>
              </div>

             
            </Form>
            <button onClick={()=> setOpenModal(true)}  className="submitbtn">
                Create
              </button>
          </div>
        </Col>
      </div>
      <div className="flex items-center justify-center w-[220px]">
      <Component openModal={openModal} setOpenModal={setOpenModal}  />
      </div>
    </>
  );
};

export default Wall;
