// Function used to run as a test to generate a sample
let fs = require('fs');
let generateMarkdown = require('./generateMarkdown.js');

function GenerateSample () {
    let sample = {
        title: 'Musify',
        description: 'Streamlines the music listening process.',
        installation: 'Clone repository into folder of your choice, Open command window in cloned repository, Run test command listed below',
        usage: 'Listening to popular music, Sharing music with friends, Listening to music concurrently with other users',
        license: 'MIT',
        tests: 'npm run test',
        fullName: 'John Doe',
        contributors: 'John Doe',
        github: 'JohnDoe123',
        email: 'johndoe123@email.com'
    }

    fs.writeFile(`./output/SAMPLE.md`, generateMarkdown(sample), (err) => {
        if (err) throw err;
        console.log('sample successfully generated! check the output folder!');
    })
}

GenerateSample();