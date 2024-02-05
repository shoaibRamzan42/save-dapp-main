import React from "react";
import { ChartBarIcon } from "@heroicons/react/24/solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faChartArea } from "@fortawesome/free-solid-svg-icons";

import {
  Card,
  
  Typography,
  
  CardBody,
 
  Avatar,
  
} from "@material-tailwind/react";

const TABLE_HEAD = ["TOKEN", "Price", "Market Cap ",  "TVL", "MARKET"];

const TABLE_ROWS = [
  {
    img:"https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/512/Ethereum-ETH-icon.png",
    name: "Ethereum",
    adress:"ETH",
    amount: "$2,301.06",
    date: "	2024-02-02 14:07",

  
    accountNumber: "$15,465",
    
  },
  {
    img:"https://cdn-icons-png.freepik.com/512/1490/1490849.png",
    adress:"BTC",
    name: "Bitcoin",
    amount: "$42,872.87",
   date: "	2024-07-02 14:07",
 
    accountNumber: "$1.93M",
   
  },
  {
    img:"https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/512/Tether-USDT-icon.png",
    name: "Tether USDt",
    adress:"USDT",
   
    amount: "$0.9998",
   date: "	2024-09-02 14:07",
    
  
    accountNumber: "$4.15M",
 
  },
  {
    img:"https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/512/Binance-Coin-BNB-icon.png",
    name: "BNB",
    adress:"BNB",
   
    amount: "$306.41",
   date: "	2024-02-02 14:07",
   
  
    accountNumber: "$67,787",
    
  },
  {
    img:"https://upload.wikimedia.org/wikipedia/en/b/b9/Solana_logo.png",
    name: "Solona",
    adress:"SOL",
   
    amount: "$97.44",
   date: "	2024-02-02 14:07",
   
  
    accountNumber: "$910",
   
  },
 
];

const Section3 = () => {
  return (
    <>
      <div className="w-full h-screen bg-[#121420]  font-custom  px-12 py-6">
        <Card className="h-full w-full bg-[#1C1E32]">
          <CardBody className="overflow-scroll example px-0">
            <table className="w-full min-w-max table-auto text-left">
              <thead >
             
                <tr>
                
                  {TABLE_HEAD.map((head) => (
                    
                    <th
                      key={head}
                      className=" text-white border-b border-[#1C1E32]   p-2"
                    >
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-bold text-[#999cb3] leading-none "
                      >
                        {head}
                      </Typography>
                      
                    </th>
                    
                  ))}
                </tr>
              </thead>
              <tbody className="bg-[#242842]  ">
                {TABLE_ROWS.map(
                  (
                    {
                      img,
                      name,
                      adress,
                      amount,
                      date,
                     
                      account,
                      accountNumber,
                      expiry,
                    },
                    index
                  ) => {
                    const isLast = index === TABLE_ROWS.length - 1;
                    const classes = isLast ? "p-4" : "p-4  text-white";

                    return (
                      <tr key={name}>
                        <td className={classes}>
                        <div className="flex items-center gap-3">
                        <Avatar
                          src={img}
                          alt={name}
                          size="md"
                          className="   object-contain p-1"
                        />

                        <div className="flex gap-2">
                        
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-bold text-white m-0 capitalize text-[14px]"
                          >
                             {name}
                          </Typography>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-bold m-0 text-[#999cb3] text-[14px]"
                          >
                            {adress}
                          </Typography>
                          </div>
                        </div>
                           
                            {/* <Typography
                              variant="large"
                              color=""
                              className="font-bold text-[#1de990] capitalize text-[21px] "
                            >
                              {name}
                            </Typography> */}
                         
                        </td>
                        <td className={classes}>
                          <Typography
                            variant="small"
                            color="white"
                            className="font-normal text-[16px] text-[#D0D0DA]"
                          >
                            {amount}
                          </Typography>
                        </td>
                        <td className={classes}>
                          <Typography
                            variant="small"
                            color="white"
                            className="font-normal text-[16px] text-[#D0D0DA]"
                          >
                            {date}
                          </Typography>
                        </td>
                      
                        <td className={classes}>
                          <div className="flex items-center gap-3">
                            
                            <div className="flex flex-col">
                              <Typography
                                variant="small"
                                color="white"
                                className="font-normal text-[#D0D0DA] text-[16px]  capitalize"
                              >
                                 {accountNumber}
                              </Typography>
                             
                            </div>
                          </div>
                        </td>
                        <td className={classes}>
                          {/* <Tooltip content="Edit User"> */}
                            {/* <IconButton variant="text"> */}
                            <div>
                            <FontAwesomeIcon icon={faChartArea} className="text-[#1de990] h-8 w-8" />
     
     
    </div>

                            {/* </IconButton> */}
                          {/* </Tooltip> */}
                        </td>
                      </tr>
                    );
                  }
                )}
              </tbody>
            </table>
          </CardBody>
        </Card>
      </div>
    </>
  );
};

export default Section3;
