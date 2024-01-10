let SeparateList = require('./SeparateList.js');

// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT':
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](${renderLicenseLink(license)})`;
    case 'Apache 2.0':
      return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](${renderLicenseLink(license)})`;
    case 'GNU GPL v3':
      return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](${renderLicenseLink(license)})`;
    case 'MPL 2.0':
      return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](${renderLicenseLink(license)})`;
    case 'BSD 3-Clause':
      return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](${renderLicenseLink(license)})`;
    default:
      return '';
  }
}

// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'MIT':
      return 'https://opensource.org/licenses/MIT';
    case 'Apache 2.0':
      return 'https://opensource.org/licenses/Apache-2.0';
    case 'GNU GPL v3':
      return 'https://www.gnu.org/licenses/gpl-3.0';
    case 'MPL 2.0':
      return 'https://opensource.org/licenses/MPL-2.0';
    case 'BSD 3-Clause':
      return 'https://opensource.org/licenses/BSD-3-Clause';
    default:
      return '';
  }
}

// If there is no license, return an empty string
function renderLicenseSection(license, fullName) {
  let date = new Date();
  switch (license) {
    case 'MIT':
      return `Copyright (c) ${date.getFullYear()} ${fullName}
Licensed under the MIT license.`;
    case 'Apache 2.0':
      return `Copyright (c) ${date.getFullYear()} ${fullName} 
Licensed under the Apache 2.0 license.`;
    case 'GNU GPL v3':
      return `Copyright (c) ${date.getFullYear()} ${fullName} 
Licensed under the GNU GPL v3 license.`;
    case 'MPL 2.0':
      return `Copyright (c) ${date.getFullYear()} ${fullName} 
Licensed under the MPL 2.0 license.`;
    case 'BSD 3-Clause':
      return `Copyright (c) ${date.getFullYear()} ${fullName} 
Licensed under the BSD 3-Clause license.`;
    default:
      return '';
  }
}

function generateMarkdown(data) {
  return `${renderLicenseBadge(data.license)}
# ${data.title}

## Description
${data.description}
  
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Tests](#tests)
- [Contributors](#contributing)
- [Questions](#questions)
- [License](#license)

## Preview
![preview](./assets/images/preview.png)
  
## Installation
${SeparateList(data.installation, 'numeric')}
  
## Usage
${SeparateList(data.usage, 'bullet')}

## Tests
Here are some tests to run to verify a proper install:
\`\`\`bash
${SeparateList(data.tests)}
\`\`\`

## Contributors
${SeparateList(data.contributors, 'bullet')}

## Questions
If you have any questions, please reach out!
- Github: [${data.github}](https://github.com/${data.github})
- Email: [${data.email}](mailto:${data.email})

## License
${renderLicenseSection(data.license, data.fullName)}
`;
}

module.exports = generateMarkdown, renderLicenseBadge, renderLicenseSection;
