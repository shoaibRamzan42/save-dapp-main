import React, { useState } from "react";

import { BsArrowLeftShort, BsThreeDotsVertical } from "react-icons/bs";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdOutlineMoveToInbox } from "react-icons/md";

import { IoArrowUndoOutline, IoArrowRedoOutline } from "react-icons/io5";
import { FaMinus } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

import face from "../../img/face.png"
import i from "../../img/I.png"
import b from "../../img/B.png"
import link from "../../img/Link.png"
import arrow from "../../img/arrow.png"

export default function Details() {
  const [mailForm, setMailForm] = useState(false);
  return (
    <>
      <section className="detailsand">
        <div className="row">
          <div className="detailsand__head d-flex">
            <div className="col-6 ps-3">
              <BsArrowLeftShort className="mail__list-i" />
            </div>
            <div className="col-6 d-flex justify-content-end pe-3">
              <MdOutlineMoveToInbox className="mail__list-i" />
              <RiDeleteBin6Line className="mx-3 mail__list-i" />
              <BsThreeDotsVertical className="mail__list-i" />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <div className="mail__list detailsand__list">
              <div className="col-12 mail__list-body detailsand__body d-md-flex justify-content-between">
                <div className="col-lg-3 col-xxl-3 mail__list-body--user detailsand__user d-flex align-items-center">
                  <div className="d-flex">
                    <h4 className="mail__list-text detailsand__text">hi</h4>
                  </div>
                  <h3 className="mail__list-name">support</h3>
                </div>

                <div className="col-lg-7 pt-3 mb-2 mb-md-auto pt-md-0 my-auto text-start text-md-end me-lg-4">
                  <button onClick={() => setMailForm(!mailForm)} className="detailsand__btn detailsand__btn-active">
                    <IoArrowUndoOutline className="d-inline detailsand__btn-i" />
                    reply
                  </button>
                  <button className="detailsand__btn mx-sm-4 mx-3">
                    <IoArrowRedoOutline className="d-inline detailsand__btn-i" />
                    reply all
                  </button>
                  <button className="detailsand__btn mt-3 mt-sm-0">
                    <IoArrowRedoOutline className="d-inline detailsand__btn-i" />
                    forward
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row ms-sm-4">
          <div className="col-12">
            <div className="col-lg-6 ms-4 ms-sm-0">
              <p className="detailsand__desc">
                Use “/ai subject/question/etc” to use AI
              </p>

              <p className="detailsand__desc detailsand__desc-m">
                Save is a secure and decentralized email service that leverages
                encryption and blockchain technology to enable Web 3
                Deposit. With Save, users can send and receive emails
                directly between their MetaMask wallets, ensuring the privacy
                and security of their messages.
              </p>
            </div>

            <div className="col-lg-10">
              <div className="detailsand__location">
                <ul>
                  <li>
                    <span>to:</span> 0x1eF7........236994f2a1E0
                  </li>
                  <li>
                    <span>from:</span> 0x1eF7........236994f2a1E0
                  </li>
                  <li>
                    <span>time: October 22 2022</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {
        mailForm &&
        <div className="mail_Form">

          <div className="mail_header">
            <p className="mb-0">New Message</p>
            <div className="d-flex align-items-center gap-2">
              <FaMinus style={{cursor: 'pointer'}} onClick={() => setMailForm(!mailForm)} />
              <RxCross2 style={{cursor: 'pointer'}} onClick={() => setMailForm(!mailForm)} />
            </div>
          </div>
          <div className="inp_boxes">
            <div className="inside_inp">
              <p className="box_text mb-0">0x1eF7....6994f2a1E0</p>
            </div>
          </div>

          <div className="inp_boxes">
            <div className="inside_inp">
              <p className="box_text mb-0">0x1eF7....6994f2a1E0</p>
            </div>
          </div>

          <input type="text" name="" id="" className="inp_field" placeholder="Subject" />
          <textarea name="" id="" className="text_area" />

          <div className="btn_icons">
            <img src={face} alt="" />
            <img src={i} alt="" />
            <img src={b} alt="" />
            <img src={link} alt="" />
            <button className="send_btn">
              <p className="mb-0">Send</p>
              <img src={arrow} alt="" />
            </button>
          </div>

        </div>
      }
    </>
  );
}
