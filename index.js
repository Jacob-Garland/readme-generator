// TODO: Include packages needed for this application
import fs from 'fs';
import inquirer from 'inquirer';

// TODO: Create an array of questions for user input
const questions = [
    {name: title, text: "What is your project title?"},
    {name: toc, text: "Do you need a table of contents? (for a longer readme)"},
    {name: install, text: "Do you need an installation section?"},
    {name: authors, text: "Who collaborated on this project? (to include yourself)"},
    {name: license, text: "What license will your project be using?"},
    {name: repo1, text: "Do you have a repository made already?"},
    {name: repo2, text: "What's the directory path you're saving to?"},
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    
    console.log('Successfully created a readme!');
};

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt([
            {
            type: 'input'
            }
        ])
}

// Function call to initialize app
init();
