// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return 0;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return 0;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return 0;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let stepNum = 0;
  return `# ${data.title}

## Description
${data.description}
  
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Preview
![preview]('./assets/images/preview.png')
  
## Installation
${data.installation.map(elem => {
  stepNum += 1;
  return ((stepNum) + ". " + elem["steps"]);
}).join('\n')}
  
## Usage
${data.usage}

## Tests
Here are some tests to run to verify a proper install:
\`\`\`bash
${data.test}
\`\`\`

## Contributors
${data.contributions}

## Questions
If you have any questions, please reach out!
- Github: [${data.github}](https://github.com/${data.github})
- Email: [${data.email}](mailto:${data.email})

## License
${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;
