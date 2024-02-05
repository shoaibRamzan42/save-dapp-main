import React from "react";

const Section2 = () => {
  return (
    <>
      <div className="px-12 flex justify-between font-custom py-6">
        <div className="flex flex-col gap-2">
          <div className="flex gap-2 items-center  ">
            <h1 className="text-[21px] text-[#D0D0DA] ">Portfolio</h1>
            <button>
              <svg
                class="h-6 w-6 text-[#1de990]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                />
              </svg>
            </button>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex flex-col gap-1 uppercase">
              <p className="text-[#999cb3] mb-0 text-[15px] ">Deposited</p>
              <h1 className="text-[#F5F5FF] text-[24px] ">$0</h1>
            </div>
            <div className="flex flex-col gap-1 uppercase">
              <p className="text-[#999cb3] mb-0 text-[15px] ">Monthly yield</p>
              <h1 className="text-[#F5F5FF] text-[24px] ">$0</h1>
            </div>
            <div className="flex flex-col gap-1 uppercase">
              <p className="text-[#999cb3] mb-0 text-[15px] ">Daily yield</p>
              <h1 className="text-[#F5F5FF] text-[24px] ">$0</h1>
            </div>
            <div className="flex flex-col gap-1 uppercase">
              <p className="text-[#999cb3] mb-0 text-[15px] ">avg.apy</p>
              <h1 className="text-[#F5F5FF] text-[24px] ">0%</h1>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-end gap-2">
        <div className="flex justify-end">
          <h1 className="text-[21px] text-[#D0D0DA] ">Platform</h1>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex flex-col gap-1 uppercase">
              <button className="text-[#999cb3] gap-1  flex mb-0 text-[15px] ">TVL<svg class="h-5 w-5 text-[#999cb3]"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
</svg></button>
              <h1 className="text-[#F5F5FF] text-[24px] ">$186.85M</h1>
            </div>
            <div className="flex flex-col gap-1 uppercase">
              <p className="text-[#999cb3] mb-0 text-[15px] ">vaults</p>
              <h1 className="text-[#F5F5FF] text-[24px] ">606</h1>
            </div>
           
          </div>
        </div>
      </div>
    </>
  );
};

export default Section2;
