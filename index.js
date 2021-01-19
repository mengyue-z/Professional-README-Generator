
// TODO: Include packages needed for this application
const fs = require('fs');
var inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is your project title?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please write a short description of your project',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Please enter installation instructions for your project',
  },
  {
    type: 'input',
    name: 'usageInfo',
    message: 'Please enter usage information for your project',
  },
  {
    type: 'input',
    name: 'contribution',
    message: 'Please enter contribution guidelines for your project',
  },
  {
    type: 'input',
    name: 'test',
    message: 'Please enter test instructions for your project',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Please choose the license for your project',
    choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense']
  },
  {
    type: 'input',
    name: 'github',
    message: 'What is your Github username?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
  },
];


// Create a function to write README file
function writetoFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) throw err;
    console.log('Generating README File...');
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    writetoFile("ExampleREADME.md",generateMarkdown(answers))
  });
}

// Function call to initialize app
init();