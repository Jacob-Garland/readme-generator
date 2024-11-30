// TODO: Include packages needed for this application
import fs from 'fs';
import inquirer from 'inquirer';
import generateMarkdown from './utils/generateMarkdown.js';

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
        message: 'Give a brief description. i.e.: motivation, purpose',
    },
    {
        type: 'input',
        name: 'install',
        message: 'Give a brief explanation of installation instructions.',
    },
    {
        type: 'input',
        name: 'dependancies',
        message: 'Give a brief description of dependancies, if applicable.'
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'Who are the contributors?',
    },
    {
        type: 'confirm',
        name: 'confirmLicense',
        message: 'Would you like to add a license to your project README?',
        default: true,
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license will your project need?',
        choices: ['agpl-3.0', 'gpl-3.0', 'lgpl-3.0', 'mpl-2.0', 'apache-2.0', 'mit', 'bsl-1.0', 'unlicense'],
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (err) => {if (err) throw err});
    console.log('Successfully created a readme file! Thank you for using the Readme Generator.');
    console.log('Check the finalProduct folder of this application for your readme.md');
    console.log('Program has ended...')
};

// TODO: Create a function to initialize app
function init() {
    console.log('Program has started...');
    inquirer.prompt(questions)
    .then((data) => {
        writeToFile("./finalProduct/readme.md", data);
    });
}

// Function call to initialize app
init();
