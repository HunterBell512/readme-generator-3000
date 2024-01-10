const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js')

const questions = [
    'What is the name of your application?',
    'What does your application do?',
    'List the installation steps (Enter as comma separated list):',
    'What is your application used for? (Enter as comma separated list)',
    'Who are the contributors of the project? (Enter as comma separated list)',
    'Which license would you like to use?',
    'Enter some test commands you can use (Enter as comma separated list):',
    'What is your first and last name?',
    'What is your GitHub username?',
    'What is your email address?'
];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) throw err;
        console.log('readme successfully generated to the output folder!');
    })
}

function init() {
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
                name: 'installation',
                message: questions[2]
            },
            {
                type: 'input',
                name: 'usage',
                message: questions[3]
            },
            {
                type: 'input',
                name: 'contributors',
                message: questions[4]
            },
            {
                type: 'rawlist',
                name: 'license',
                message: questions[5],
                choices: ['MIT', 'Apache 2.0', 'GNU GPL v3', 'MPL 2.0', 'BSD 3-Clause']
            },
            {
                type: 'input',
                name: 'tests',
                message: questions[6]
            },
            {
                type: 'input',
                name: 'fullName',
                message: questions[7]
            },
            {
                type: 'input',
                name: 'github',
                message: questions[8]
            },
            {
                type: 'input',
                name: 'email',
                message: questions[9]
            }
        ]).then((answers) => {
            console.log(answers);
            writeToFile(`./output/README.md`, generateMarkdown(answers));
        });
}
// Function call to initialize app
init();
