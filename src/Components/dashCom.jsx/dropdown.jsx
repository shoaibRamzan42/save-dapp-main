import React from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from "react-router-dom";


const DropDown=()=>{return(
    <>
         <Dropdown>
      <Dropdown.Toggle className="duration-300  hover:bg-[#2e7935]  bg-[#1de990] font-custom font-semibold text-[#FAFAFA]   md:py-4 px-4 rounded-xl text-[16px] md:text-[16px] leading-4" variant="success" id="dropdown-basic ">
      0xb6...3672
      </Dropdown.Toggle>

      <Dropdown.Menu  >

      <Dropdown.Item > <Link className="no-underline text-white"  to="/Profile">  Profile </Link> </Dropdown.Item> 
        <Dropdown.Item >Setting</Dropdown.Item>
        <Dropdown.Item >LogOut</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    </>
)}

export default DropDown;