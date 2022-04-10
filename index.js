
const inquirer = require('inquirer');
const fs = require('fs');
const generateMockup= require('./src/page-template');


function promptUser(){
    return inquirer.prompt([
    
    {name: 'title',
    message: 'What is the title of this homework? (Required)',
    validate: nameInput => {
      if (nameInput){
        return true
      } else{
        console.log('Please enter your project name!');
        return false;
      }
    },
    type: 'input'},
    {name: 'description',
    message: 'What is the application purpose?',
    type: 'input'},
    {name: 'usage',
    message: 'How do I use this application?',
    type: 'input'},
    {name: 'contribution',
    message: 'who contributed to this application?',
    type: 'input'},
    {name: 'username',
    message: 'What is your Github username?',
    type: 'input'},
    {name: 'email',
    message: 'What is your e-mail?',
    type: 'input'},
    {name: 'fileName',
    message: 'What do you want to name the readme file?',
    type: 'input'},
])};


function writeToFile(fileName, data) {
    fs.appendFile(`${fileName}.md`, data, 
    (err) => err ? console.error(err) : console.log(`${fileName}.md has been generated.`))
}


async function init() {
    let answers = await promptUser();
    writeToFile((answers.fileName),(generateMockup(answers)));
}

init();
