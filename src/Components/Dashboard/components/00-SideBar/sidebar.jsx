import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

import { BiPencil, BiTrashAlt } from "react-icons/bi";
import { BsSend, BsBoxSeam } from "react-icons/bs";
import { HiOutlineInbox } from "react-icons/hi";
import { HiBars3BottomRight } from "react-icons/hi2";
import { AiOutlineStar } from "react-icons/ai";
import { TbSettings2 } from "react-icons/tb";
import Navbar from "../NavBar/navbar";

import img from "../../img/etherum.png";

export default function Sidebar({ state, setState }) {
  const [showSub, setShowSub] = useState(false);

  return (
    <div className="main-layout">
      <Navbar setState={setState} state={state} />

      <section className="sidebar">
        {state ? (
          <div className="overlayer" onClick={() => setState(false)}></div>
        ) : (
          ""
        )}
        <div
          className={`col-11 col-sm-6 col-md-5 col-xl-3 sidebar__list ${
            state ? "small__sidebar" : ""
          }`}
        >
          <ul className="nav flex-column">
            <li className="">
              <span className="sidebar__text">Write to someone</span>
            </li>
            <li className="">
              <a className="sidebar__active" aria-current="page" href="#">
                <BiPencil className="sidebar__icon-dark" /> Compose
              </a>
            </li>
            <li className="">
              <span className="sidebar__text">Main</span>
            </li>
            <li>
              <Link
                className="d-flex align-items-center justify-content-between text-capitalize mb-4"
                to="/home"
                onClick={()=> setShowSub(!showSub)}
              >
                <div className="d-flex align-items-center">
                  <HiOutlineInbox className="sidebar__icon-active" /> All Inbox
                </div>

                <div className="">
                  <span className="sidebar__num">121</span>
                </div>
              </Link>

              {
                showSub && <div className="">
                <ul className="sidebar__sublist">
                  <li className="sidebar__sublist-active">
                    <img className="" src={img} alt="etherum" height={20} width={20}/>
                    <span className="sub-home">zemm21y@Save.com</span>
                  </li>
                  <li className="">
                    <img className="" src={img} alt="etherum" height={20} width={20}/>
                    <span className="sub-home">0x1eF7......236994f2a1E0</span>
                  </li>
                </ul>
              </div>
              }
            </li>
            <li>
              <Link
                className="d-flex align-items-center justify-content-between text-capitalize"
                to="/home"
              >
                <div className="d-flex align-items-center">
                  <AiOutlineStar className="sidebar__icon" /> Starred
                </div>
              </Link>
            </li>
            <li>
              <Link
                className="d-flex align-items-center justify-content-between text-capitalize"
                to="/home/sent"
              >
                <div className="d-flex align-items-center">
                  <BsSend className="sidebar__icon" /> Sent
                </div>
              </Link>
            </li>
            <li>
              <a
                className="d-flex align-items-center justify-content-between text-capitalize"
                href="#"
              >
                <div className="d-flex align-items-center">
                  <BsBoxSeam className="sidebar__icon" /> Archive
                </div>
              </a>
            </li>
            <li>
              <a
                className="d-flex align-items-center justify-content-between text-capitalize"
                href="#"
              >
                <div className="d-flex align-items-center">
                  <BiTrashAlt className="sidebar__icon" /> Trash
                </div>
              </a>
            </li>
            <li className="">
              <span className="sidebar__text">Other</span>
            </li>
            <li>
              <Link
                className="d-flex align-items-center justify-content-between text-capitalize"
                to="/home/settings"
              >
                <div className="d-flex align-items-center">
                  <TbSettings2 className="sidebar__icon" /> Settings
                </div>
              </Link>
            </li>
            <li>
              <a
                className="d-flex align-items-center justify-content-between text-capitalize"
                href="#"
              >
                <div className="d-flex align-items-center">
                  <TbSettings2 className="sidebar__icon" /> Help & Support
                </div>
              </a>
            </li>
            <li>
              <a
                className="d-flex align-items-center justify-content-between text-capitalize"
                href="#"
              >
                <div className="d-flex align-items-center">
                  <TbSettings2 className="sidebar__icon" /> Erase All Mail
                </div>
              </a>
            </li>
          </ul>
        </div>

        <div className="sidebar__body  mx-auto col-12 col-md-11 col-xl-9">
          <div className="m-1">
            <Outlet></Outlet>
          </div>
        </div>
      </section>
    </div>
  );
}
