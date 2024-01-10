// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    'What is the name of your application?',
    'What does your application do?',
    'Add an installation step?',
    'What is your application used for?',
    'Who are the contributors of the project?'
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.registerPrompt('loop', require('inquirer-loop')(inquirer));

    inquirer
        .prompt([
            {
                type: 'input',
                name: 'title',
                message: questions[0]
            },
            {
                type: 'input',
                name: 'description',
                message: questions[1]
            },
            {
                type: 'input',
                name: 'usage',
                message: questions[3]
            },
            {
                type: 'input',
                name: 'contributions',
                message: questions[4]
            },
            {
                type: 'rawlist',
                name: 'license',
                message: questions[5],
                choices: ['MIT', 'Apache 2.0', 'GPL v3', 'MPL 2.0', 'BSD 3']
            },
            {
                type: 'loop',
                name: 'installation',
                message: questions[2],
                questions: [
                    {
                        type: 'name',
                        name: 'step',
                        message: 'Add the step:'
                    }
                ]
            }
        ]).then((answers) => {
            console.log(answers);
        });
}

// Function call to initialize app
init();
