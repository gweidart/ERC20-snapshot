/*****************************************************************************************************************************
*
*        .o.       ooooo        ooooooooo.   ooooo   ooooo       .o.            oooooooooo.         .o.         .oooooo.   
*       .888.      `888'        `888   `Y88. `888'   `888'      .888.           `888'   `Y8b       .888.       d8P'  `Y8b  
*      .8"888.      888          888   .d88'  888     888      .8"888.           888      888     .8"888.     888      888 
*     .8' `888.     888          888ooo88P'   888ooooo888     .8' `888.          888      888    .8' `888.    888      888 
*    .88ooo8888.    888          888          888     888    .88ooo8888.         888      888   .88ooo8888.   888      888 
*   .8'     `888.   888       o  888          888     888   .8'     `888.        888     d88'  .8'     `888.  `88b    d88' 
*  o88o     o8888o o888ooooood8 o888o        o888o   o888o o88o     o8888o      o888bood8P'   o88o     o8888o  `Y8bood8P'  
*                                                                                                                          
*                                                                                                                          
*                                                                                                                          
*
*cusdt-LINK, t.me/GweiDart
*****************************************************************************************************************************/

"use strict";

const abi = [
  {
    constant: true,
    inputs: [],
    name: "name",
    outputs: [
      {
        name: "",
        type: "string"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "decimals",
    outputs: [
      {
        name: "",
        type: "uint8"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        name: "_owner",
        type: "address"
      }
    ],
    name: "balanceOf",
    outputs: [
      {
        name: "balance",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "symbol",
    outputs: [
      {
        name: "",
        type: "string"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "from",
        type: "address"
      },
      {
        indexed: true,
        name: "to",
        type: "address"
      },
      {
        indexed: false,
        name: "value",
        type: "uint256"
      }
    ],
    name: "Transfer",
    type: "event"
  }
];

module.exports.getABI = () => {
  return abi;
};
