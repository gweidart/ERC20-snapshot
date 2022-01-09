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

const path = require("path");
const abi = require("./abi");

const parameters = {
  abi: abi.getABI(),
  configFileName: path.join(process.cwd(), "snapshot.config.json"),
  configQuestions: [
    {
      type: "input",
      name: "provider",
      message: "Enter the URL of web3 provider",
      default: "http://localhost:8545"
    },
    {
      type: "input",
      name: "contractAddress",
      message: "Enter your contract address"
    },
    {
      type: "input",
      name: "fromBlock",
      message: "Enter the block number to start from",
      default: 0
    },
    {
      type: "input",
      name: "toBlock",
      message: "Enter the block number to end at",
      default: "latest"
    },
    {
      type: "input",
      name: "blocksPerBatch",
      message: "Blocks per batch",
      default: 2500
    },
    {
      type: "input",
      name: "delay",
      message: "Delay per iteration (ms)",
      default: 0
    },
    {
      type: "input",
      name: "format",
      message: "Format -> csv, json, both",
      default: "both"
    },
    {
      type: "input",
      name: "checkIfContract",
      message: "Check addresses if they are contracts or wallets?",
      default: "yes"
    }
  ],
  knownTypes: path.join(process.cwd(), "/.cache/known-types.json"),
  outputFileNameCSV: path.join(process.cwd(), "./balances/{token}.csv"),
  outputFileNameJSON: path.join(process.cwd(), "./balances/{token}.json"),
  eventsDownloadFolder: path.join(process.cwd(), "./tx/{token}/"),
  eventsDownloadFilePath: path.join(process.cwd(), "./tx/{token}/{blockNumber}.json")
};

module.exports.get = () => {
  return parameters;
};
