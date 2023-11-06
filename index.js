import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';


inquirer
  .prompt([
    {
        message: "Type in your URL: ",
        name: "URL",
    },
  ])
  .then((answers) => {
    const url = answers.URL;
    var qrImage = qr.image(url);
    qrImage.pipe(fs.createWriteStream("./assets/images/website-qr-code.png"));
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });