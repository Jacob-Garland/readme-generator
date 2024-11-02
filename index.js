// TODO: Include packages needed for this application
import fs from 'fs';
import inquirer from 'inquirer';
import generateMarkdown from './utils/generateMarkdown';

// TODO: Create an array of questions for user input
const questions = [
    {type: 'input', name: title, message: "What is your project title?"},
    {type: 'input', name: description, message: "Give a brief description. i.e.: motivation, purpose"},
    {type: 'input', name: install, message: "Give a brief explanation of installation instructions."},
    {type: 'input', name: authors, message: "Who are the authors? Should include yourself, sources of code, collaborators, resources, etc."},
    {type: 'input', name: license, message: "What license will your project need?"},
    {type: 'input', name: restingPlace, message: "What's the directory path you're saving to?"},
];

// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFile('README.md', data, (err) => {if (err) return err});
    console.log('Successfully created a readme!');
};

// TODO: Create a function to initialize app
function init() {
    console.log('Program has started...');
    inquirer.prompt(questions)
    .then((answers) => {generateMarkdown(answers);});
}

// Function call to initialize app
init();
