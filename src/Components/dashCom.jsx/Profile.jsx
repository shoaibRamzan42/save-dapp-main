import React ,{useState} from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";


const Profile = () => {
    const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <div className="item-center font-custom flex mt-24 justify-center ">
        <Col xs={12} md={6} lg={6}>
          <div className="signUpForm">
          <div className="flex items-center gap-2 mb-3">
            <p className="signUpFormTitle m-0">Your Wallet Adress</p>
            <button><svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-[#4bd258]" viewBox="0 0 20 20" fill="currentColor">
  <path d="M9 2a2 2 0 00-2 2v8a2 2 0 002 2h6a2 2 0 002-2V6.414A2 2 0 0016.414 5L14 2.586A2 2 0 0012.586 2H9z" />
  <path d="M3 8a2 2 0 012-2v10h8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
</svg></button>
</div>

            <p>0xb66b5ea81a14ea8aD13ea7276C3023e809C03672</p>
            <div className="flex items-center gap-2 mb-3">
            <p className="signUpFormTitle m-0">Private Key</p>
            <button><svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-[#4bd258]" viewBox="0 0 20 20" fill="currentColor">
  <path d="M9 2a2 2 0 00-2 2v8a2 2 0 002 2h6a2 2 0 002-2V6.414A2 2 0 0016.414 5L14 2.586A2 2 0 0012.586 2H9z" />
  <path d="M3 8a2 2 0 012-2v10h8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
</svg></button></div>

<p className=" ">b66b5ea81a14ea8aD13ea7276C3023e809C03b5ea81a14ea8aD13ea7276C3023e809C0</p>
{/* 
            <Form>
              <Form.Group className="mb-3" >
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

             
            </Form> */}
            <Link to='/Dashboard'>
            <button onClick={()=> setOpenModal(true)}  className="submitbtn">
                Back to Dashboard
              </button>
              </Link>
          </div>
        </Col>
      </div>
    
    </>
  );
};

export default Profile;
