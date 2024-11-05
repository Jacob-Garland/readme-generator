// TODO: Include packages needed for this application
import fs from 'fs';
import inquirer from 'inquirer';
import generateMarkdown from './utils/generateMarkdown.js';

// TODO: Create an array of questions for user input
const questions = [
    {type: 'input', name: title, message: "What is your project title?"},
    {type: 'input', name: description, message: "Give a brief description. i.e.: motivation, purpose"},
    {type: 'input', name: install, message: "Give a brief explanation of installation instructions."},
    {type: 'input', name: authors, message: "Who are the authors? Should include yourself, sources of code, collaborators, resources, etc."},
    {type: 'confirm', name: confirmLicense, message: "Would you like to add a license to your project README?", default: true},
    {type: 'list', name: license, message: "What license will your project need?", choices: ['agpl-3.0', 'gpl-3.0', 'lgpl-3.0', 'mpl-2.0', 'apache-2.0', 'mit', 'bsl-1.0', 'unlicense']},
];

// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFile(`README.md`, data, (err) => {if (err) throw err});
    console.log('Successfully generated a README.md!');
};

// TODO: Create a function to initialize app
function init() {
    console.log('Program has started...');
    inquirer.prompt(questions)
    .then((answers) => {
        generateMarkdown(answers);
        writeToFile()
    });
    
}

// Function call to initialize app
init();
