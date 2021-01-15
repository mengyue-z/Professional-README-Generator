
const fs = require('fs');

var inquirer = require('inquirer');

var questionList = [
    {
        type: 'input',
        name: 'project title',
        message: 'What is your project title?',
        default: false,
      },
    {
      type: 'input',
      name: 'description',
      message: 'Please write a short description of your project',
      default: false,
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Please enter installation instructions for your project',
      default: false,
    },
    {
      type: 'input',
      name: 'usage information',
      message: 'Please enter usage information for your project',
      default: false,
    },
    {
      type: 'input',
      name: 'contribution',
      message: 'Please enter contribution guidelines for your project',
      default: false,
    },
      {
        type: 'input',
        name: 'test instruction',
        message: 'Please enter test instructions for your project',
        default: false,
      },
      {
      type: 'list',
      name: 'license',
      message: 'Please choose the license for your project',
      choices: ['cake', 'fries'],
      then: function (answers) {
        return answers.comments !== 'Nope, all good!';
      },
    },
    {
      type: 'input',
      name: 'github username',
      message: 'What is your Github username?',
      default: false,
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?',
      default: false,
    },
  ];

  const {email} = questionList;
  // function to write README file
  function writetoFile(fileName,content) {
    fs.writeFile(fileName, content, (err) => {
      if (err) throw err;
      console.log('Generating README File...');
   });
  }




  inquirer.prompt(questionList).then((answers) => {
    console.log('\n Readme file contents');
    console.log(JSON.stringify(answers, null, '  '));
  });

// fs.writeFile('README.md', "123", (err) => {
//     if (err) throw err;
//     console.log('Generating README File...');
//   });

