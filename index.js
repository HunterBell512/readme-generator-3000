const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js')

const questions = [
    'What is the name of your application?',
    'What does your application do?',
    'Add an installation step?',
    'What is your application used for?',
    'Who are the contributors of the project?',
    'Which license would you like to use?',
    'Type a command you can use to test your application',
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
                choices: ['MIT', 'Apache 2.0', 'GPL v3', 'MPL 2.0', 'BSD 3.0']
            },
            {
                type: 'input',
                name: 'test',
                message: questions[6]
            },
            {
                type: 'input',
                name: 'github',
                message: questions[7]
            },
            {
                type: 'input',
                name: 'email',
                message: questions[8]
            },
            {
                type: 'loop',
                name: 'installation',
                message: questions[2],
                questions: [
                    {
                        type: 'name',
                        name: 'steps',
                        message: 'Add the step:'
                    }
                ]
            }
        ]).then((answers) => {
            console.log(answers);
            writeToFile('./output/README.md', generateMarkdown(answers));
        });
}

// Function call to initialize app
init();
