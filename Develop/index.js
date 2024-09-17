// Include the required packages
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');  // Assuming this file is in the same directory

// Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Provide a short description of your project:',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What are the installation instructions?',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Provide instructions and examples for use:',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license for your project:',
    choices: ['MIT', 'GPL-3.0', 'Apache-2.0', 'BSD-3-Clause', 'None'],
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'How can others contribute to this project?',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'What are the test instructions?',
  },
  {
    type: 'input',
    name: 'github',
    message: 'What is your GitHub username?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
  },
];

// Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log('README.md file has been generated!')
  );
}

// Create a function to initialize the app
function init() {
  inquirer.prompt(questions).then((answers) => {
    // Generate markdown using the answers
    const markdown = generateMarkdown(answers);
    // Write the generated README to a file
    writeToFile('README.md', markdown);
  });
}

// Function call to initialize app
init();
