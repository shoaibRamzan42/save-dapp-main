
import React from "react";
import Logo from "../dashCom.jsx/Logo1.png"
import DropDown from "../dashCom.jsx/dropdown"


const Navbar = () => {
  return (
    <>
      <nav className="py-6 bg-transparent z-[1] lg:px-12 md:px-12 flex justify-between  items-center shadow-lg">
        <div className="flex gap-1 justify-btween items-center ">
        <img src={Logo} alt="logo" className="max-w-[5%]" />
          <ul className=" font-custom flex pt-3  gap-3 lg:gap-6 justify-center items-center   lg:text-[16px] md:text-[55%]  text-[#999CB3]   ">
          <button className=" animate flex justify-center items-center gap-1 tracking-widest hover:text-white hover:scale-110 ">
          <svg class="h-5 w-5 text-[#999CB3]"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"/>
</svg>

            Dashboard
          </button>
          <button className=" animate flex justify-center items-center gap-1 tracking-widest hover:text-white hover:scale-110 ">
          <svg class="h-5 w-5 text-[#999cb3]"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
</svg>

            Vaults
          </button>
          <button className=" animate flex justify-center items-center gap-1 tracking-widest hover:text-white hover:scale-110 ">
          <svg class="h-5 w-5 text-[#999cb3]"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="3" y1="21" x2="21" y2="21" />  <line x1="3" y1="10" x2="21" y2="10" />  <polyline points="5 6 12 3 19 6" />  <line x1="4" y1="10" x2="4" y2="21" />  <line x1="20" y1="10" x2="20" y2="21" />  <line x1="8" y1="14" x2="8" y2="17" />  <line x1="12" y1="14" x2="12" y2="17" />  <line x1="16" y1="14" x2="16" y2="17" /></svg>

            DAO <svg class="h-5 w-5 text-[999cb3]"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <polyline points="6 9 12 15 18 9" /></svg>
          </button>
          <button className=" animate flex justify-center items-center gap-1 tracking-widest hover:text-white hover:scale-110 ">
          <svg class="h-5 w-5 text-[#999cb3]"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
</svg>

            Resources <svg class="h-4 w-4 text-[#999cb3]"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <polyline points="6 9 12 15 18 9" /></svg>
          </button>
          
        </ul>
        
        </div>
       
          
          <div className="flex gap-3">
          <button className=" animate flex justify-center items-center gap-1 tracking-widest text-[#999CB3] hover:text-white hover:scale-110 ">
          <svg class="h-5 w-5 text-[#999cb3]"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"/>
</svg>

            Services
          </button>
          <button className=" animate flex justify-center items-center gap-1 tracking-widest text-[#999CB3] hover:text-white hover:scale-110 ">
          <svg class="h-5 w-5 text-[#999cb3]"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="6" y1="5" x2="6" y2="19" />  <line x1="18" y1="5" x2="18" y2="19" />  <line x1="2" y1="15" x2="22" y2="15" />  <path d="M3 8a7.5 7.5 0 0 0 3 -2a6.5 6.5 0 0 0 12 0a7.5 7.5 0 0 0 3 2" />  <line x1="12" y1="10" x2="12" y2="15" /></svg>

            Services
          </button>
        
          
          
           <DropDown />
          

          

          
         
          
          </div>
        
      </nav>
    </>
  );
};

export default Navbar;
