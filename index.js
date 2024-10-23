// TODO: Include packages needed for this application

import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './generateMarkdown.js';
import path from 'path';
// import { features } from 'process';

// TODO: Create an array of questions for user input

const questions = [
    {    
        type: 'input',
        name: 'title',
        message: "What is your project's name?",
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license does your project use?',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'none'],
    },
    {
        type: 'input',
        name: 'description',
        message: 'Briefly describe your project.',
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
    {
        type: 'input',
        name: 'installation',
        message: 'What command should be run to install dependencies?',
        default: 'npm i',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What do users need to know about this repository?',
    },
    {
        type: 'input',
        name: 'contriduting',
        message: 'How can users contribute to this repository?',
    },
    {
        type: 'input',
        name: 'test',
        message: 'What command should be run to run tests?',
        default: 'npm test',
    },
    {
        type: 'input',
        name: 'features',
        message: 'What features does your project have?'
    },
    {
        type: 'input',
        name: 'credits',
        message: 'With whom did you collaberate to create this project?'
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((inquireResponses) => {
        console.log('Generating README...');
        writeToFile('README.md', generateMarkdown({ ...inquireResponses}));
    });
}

// Function call to initialize app
init();
