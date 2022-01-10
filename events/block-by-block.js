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

const FileHelper = require("../file-helper");
const Parameters = require("../parameters").get();

const range = (start, end) => {
  return Array(end - start + 1)
    .fill()
    .map((_, idx) => start + idx);
};

module.exports.tryBlockByBlock = async (contract, start, end, symbol) => {
  const blocks = range(start, end);
  console.log('blocks: ', blocks);
	
  let counter = 0;
  for await (const i of blocks) {
    counter++;
    console.log("%d% Block %d of %d", Math.floor((counter / (end - start)) * 100), i, end);

    const pastEvents = await contract.getPastEvents("Transfer", { fromBlock: i, toBlock: i });

    if (pastEvents.length) {
      console.info("Successfully imported ", pastEvents.length, " events");

      const file = Parameters.eventsDownloadFilePath.replace(/{token}/g, symbol).replace(/{blockNumber}/g, pastEvents[0].blockNumber);
      FileHelper.writeFile(file, pastEvents);
    }
  }
};
