import { Console } from "console";
import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";
// import random from "superheroes";

inquirer
  .prompt([{
    message : "type the URL",
    name : "URL",
  },
  ])
  .then((answers) => {
    const url = answers.URL;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream('qrImg.png'));
 
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
