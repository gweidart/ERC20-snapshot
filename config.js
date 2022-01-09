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

const fs = require("fs");
const inquirer = require("inquirer");

const Parameters = require("./parameters").get();

const { promisify } = require("util");
const writeFileAsync = promisify(fs.writeFile);
const fileExists = promisify(fs.exists);

module.exports.checkConfig = async () => {
  const exists = await fileExists(Parameters.configFileName);

  if (exists) {
    return;
  }

  const config = await inquirer.prompt(Parameters.configQuestions);
  await writeFileAsync("./snapshot.config.json", JSON.stringify(config, null, 2));
  console.info("Configuration file was successfully created. Please run the program again.");
  process.exit();
};

module.exports.getConfig = () => {
  try {
    const contents = fs.readFileSync(Parameters.configFileName);
    return JSON.parse(contents);
  } catch (e) {
    console.error("Configuration file was not found.");
  }
};
