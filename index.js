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

#!/usr/bin/env node
"use strict";

const Balances = require("./balances");
const Config = require("./config");
const Events = require("./events/blockchain");
const Export = require("./export");

const start = async () => {
  await Config.checkConfig();
  const format = Config.getConfig().format;
  const result = await Events.get();

  console.log("Calculating balances of %s (%s)", result.name, result.symbol);
  const balances = await Balances.createBalances(result);

  console.log("Exporting balances");
  await Export.exportBalances(result.symbol, balances, format);
};

(async () => {
  try {
    await start();
  } catch (e) {
    console.error(e);
  }
})();
