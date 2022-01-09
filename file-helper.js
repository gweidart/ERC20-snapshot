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
const path = require("path");

const { promisify } = require("util");

const existsAsync = promisify(fs.exists);
const makeDirectoryAsync = promisify(fs.mkdir);
const readFileAsync = promisify(fs.readFile);
const writeFileAsync = promisify(fs.writeFile);

const ensureDirectoryExists = async directory => {
  try {
    await makeDirectoryAsync(directory, { recursive: true });
  } catch (err) {
    console.log(err);
  }
};

module.exports.ensureDirectory = async directory => {
  ensureDirectoryExists(directory);
};

module.exports.writeFile = async (filePath, data) => {
  await ensureDirectoryExists(path.dirname(filePath));
  await writeFileAsync(filePath, JSON.stringify(data, null, 2));
};

module.exports.parseFile = async filePath => {
  if (await existsAsync(filePath)) {
    const contents = await readFileAsync(filePath);
    return JSON.parse(contents.toString());
  }

  return null;
};
