import React from "react";
import { Card, Typography } from "@material-tailwind/react";

const TABLE_HEAD = ["", "", "",  ];

const TABLE_ROWS = [
  {
    image:"https://i.kym-cdn.com/photos/images/newsfeed/001/688/970/a72.jpg",
    cname:"d..",
    aname:"/WETH",
    num:  "#1",
    name: "$0.1011",
    job: "21.15%",
   
  },
  {
    image:"https://s2.coinmarketcap.com/static/img/coins/200x200/7689.png",
    cname:"G..",
    aname:"/WETH",
    num: "#2",
    name: "$0.00000423",
    job: "7399%",
   
  },
  {
    image:"https://thumb.ac-illust.com/c1/c11b8929abd72d2a9f18c3be9b8a5265_t.jpeg",
    cname:"C..",
    aname:"/WETH",
    num: "#3",
    name: "$69.56766",
    job: "17.6%",
   
  },
  {
    image:"https://s2.coinmarketcap.com/static/img/coins/200x200/5994.png",
    cname:"P..",
    aname:"/WETH",
    num: "#4",
    name: "$0.009045",
    job: "3.09%",
 
  },
  {
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNKctOUQyNmO0TDp6c0yHratPefstP-gA5vw&usqp=CAU",
    cname:"LBR",
    aname:"/WETH",
    num: "#5",
    name: "$0.4365",
    job: "14.25%",
   
  },
  {
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNKctOUQyNmO0TDp6c0yHratPefstP-gA5vw&usqp=CAU",
    cname:"LBR",
    aname:"/WETH",
    num: "#6",
    name: "$0.4365",
    job: "14.25%",
   
  }, {
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNKctOUQyNmO0TDp6c0yHratPefstP-gA5vw&usqp=CAU",
    cname:"LBR",
    aname:"/WETH",
    num: "#7",
    name: "$0.4365",
    job: "14.25%",
   
  },
];

function Section4() {
  return (
    <div className="px-12 py-6 flex gap-3  font-custom mb-0">
    
      <Card className="h-[280px] example   bg-[#242842] w-[40%] overflow-scroll">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <div className="flex gap-2 mb-4 pt-4 pl-4 text-white items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="w-6 h-6 text-red-600"
              >
                <path
                  fill-rule="evenodd"
                  d="M13.5 4.938a7 7 0 1 1-9.006 1.737c.202-.257.59-.218.793.039.278.352.594.672.943.954.332.269.786-.049.773-.476a5.977 5.977 0 0 1 .572-2.759 6.026 6.026 0 0 1 2.486-2.665c.247-.14.55-.016.677.238A6.967 6.967 0 0 0 13.5 4.938ZM14 12a4 4 0 0 1-4 4c-1.913 0-3.52-1.398-3.91-3.182-.093-.429.44-.643.814-.413a4.043 4.043 0 0 0 1.601.564c.303.038.531-.24.51-.544a5.975 5.975 0 0 1 1.315-4.192.447.447 0 0 1 .431-.16A4.001 4.001 0 0 1 14 12Z"
                  clip-rule="evenodd"
                />
              </svg>

              <h3 className="mb-0 font-custom font-medium text-[20px]">Hot Coins</h3>
              <svg
                class="h-5 w-5 text-[#999cb3]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </thead>
          <tbody className="">
            {TABLE_ROWS.map(({ num,image,cname,aname, name, job,  }, index) => (
              <tr key={name} className="">
                <td className="py-2 px-4 mb-0 flex gap-2">
                  <Typography
                    variant="small"
                    color="white"
                    className="font-normal mb-0"
                  >
                    {num}
                  </Typography>
                  <img className="h-6 w-6 rounded-full " src={image}/>
                  <Typography
                    variant="small"
                    color="white"
                    className="font-semibold mb-0 text-[14px]"
                  >
                    {cname}
                  </Typography>
                  <Typography
                    variant="small"
                    color="white"
                    className="font-semibold mb-0 text-[#999cb3] text-[12px]"
                  >
                    {aname}
                  </Typography>
                </td>
                <td className="py-2 px-4">
                  <Typography
                    variant="small"
                    color="white"
                    className="font-normal mb-0 text-[#17c671] text-[13px]"
                  >
                    {name}
                  </Typography>
                </td>
                <td className="py-2 px-4">
                  <Typography
                    variant="small"
                    color="white"
                    className="font-normal mb-0 text-[#17c671] text-[13px] "
                  >
                    {job}
                  </Typography>
                </td>
              
                
              </tr>
              
              
              
            ))}
          </tbody>
        </table>
      </Card>
 

      <Card className="h-[280px] example   bg-[#242842] w-[40%] overflow-scroll">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <div className="flex gap-2 mb-4 pt-4 pl-4 text-white items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="w-6 h-6 text-red-600"
              >
                <path
                  fill-rule="evenodd"
                  d="M13.5 4.938a7 7 0 1 1-9.006 1.737c.202-.257.59-.218.793.039.278.352.594.672.943.954.332.269.786-.049.773-.476a5.977 5.977 0 0 1 .572-2.759 6.026 6.026 0 0 1 2.486-2.665c.247-.14.55-.016.677.238A6.967 6.967 0 0 0 13.5 4.938ZM14 12a4 4 0 0 1-4 4c-1.913 0-3.52-1.398-3.91-3.182-.093-.429.44-.643.814-.413a4.043 4.043 0 0 0 1.601.564c.303.038.531-.24.51-.544a5.975 5.975 0 0 1 1.315-4.192.447.447 0 0 1 .431-.16A4.001 4.001 0 0 1 14 12Z"
                  clip-rule="evenodd"
                />
              </svg>

              <h3 className="mb-0 font-custom font-medium text-[20px]">Hot Latest</h3>
              <svg
                class="h-5 w-5 text-[#999cb3]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </thead>
          <tbody className="">
            {TABLE_ROWS.map(({ num,image,cname,aname, name, job,  }, index) => (
              <tr key={name} className="">
                <td className="py-2 px-4 mb-0 flex gap-2">
                  <Typography
                    variant="small"
                    color="white"
                    className="font-normal mb-0"
                  >
                    {num}
                  </Typography>
                  <img className="h-6 w-6 rounded-full " src={image}/>
                  <Typography
                    variant="small"
                    color="white"
                    className="font-semibold mb-0 text-[14px]"
                  >
                    {cname}
                  </Typography>
                  <Typography
                    variant="small"
                    color="white"
                    className="font-semibold mb-0 text-[#999cb3] text-[12px]"
                  >
                    {aname}
                  </Typography>
                </td>
                <td className="py-2 px-4">
                  <Typography
                    variant="small"
                    color="white"
                    className="font-normal mb-0 text-[#17c671] text-[13px]"
                  >
                    {name}
                  </Typography>
                </td>
                <td className="py-2 px-4">
                  <Typography
                    variant="small"
                    color="white"
                    className="font-normal mb-0 text-[#17c671] text-[13px] "
                  >
                    {job}
                  </Typography>
                </td>
              
                
              </tr>
              
              
              
            ))}
          </tbody>
        </table>
      </Card>

     


      
    </div>
  );
}

export default Section4;
