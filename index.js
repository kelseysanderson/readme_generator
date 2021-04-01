const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");
const inquirer = require('inquirer');
const fileName = 'README.md';
let readmeContent = "";

const questions = [
    {
      type: 'input',
      message: 'What is the title of your project? ',
      name: 'title',
    },
    {
      type: 'input',
      message: `Enter a description of your project: `,
      name: 'description',
    },
    {
      type: 'input',
      message: 'Please enter Installation Details: ',
      name: 'installation',
    },
    {
      type: 'input',
      message: 'Please enter usage details: ',
      name: 'usage',
    },
    {
      type: 'list',
      message: 'What license are you using?',
      name: 'license',
      choices: ['MIT', 'GPLv3', 'Apache-2.0', 'No License Included']
    },
    {
      type: 'input',
      message: 'Who contributed to this project? ',
      name: 'contributions',
    },
    {
      type: 'input',
      message: 'What are the test instructions? ',
      name: 'tests',
    },
    {
      type: 'input',
      message: 'Please enter your GitHub username: ',
      name: 'github',
    },
    {
      type: 'input',
      message: 'Please enter your email: ',
      name: 'email',
    },
  ]

function writeMarkdown (fileName, data) {
  fs.writeFile(fileName, data, (err) =>
  err ? console.log(err) : console.log('Successfully created README.md')
  );
};

function init() {
  inquirer.prompt(questions).then(questions => {
    readmeContent = generateMarkdown(questions)
    writeMarkdown('README.md', readmeContent);
  });
}

init();

