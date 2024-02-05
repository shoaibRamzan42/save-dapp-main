import React from "react";




import { Button, Modal } from 'flowbite-react';
import { useState } from 'react';
import { Link } from "react-router-dom";

function Component( {openModal , setOpenModal }) {
 

  return (
    <>
      <Modal className="w-[45%] px-24 bg-transparent mt-24  ml-[29rem]" show={openModal} onClose={() => ()=> setOpenModal(false)}>

        <Modal.Body className="bg-black">
          <div  className="space-y-6">
            <p className="text-base leading-relaxed text-white dark:text-gray-400">
              With less than a month to go before the European Union enacts new consumer privacy laws for its citizens,
              companies around the world are updating their terms of service agreements to comply.
            </p>
            
          </div>
        </Modal.Body>
        <Modal.Footer className="bg-black flex gap-2 text-white">
          <Button className="bg-[#1de990]" onClick={() => setOpenModal(false)}><Link to='/Dashboard'>I accept </Link></Button>
          <Button color="gray" onClick={() => setOpenModal(false)}>
           <Link to="/register"> Decline </Link>
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Component;