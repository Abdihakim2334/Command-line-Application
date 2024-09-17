// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT':
      return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
    case 'GPL-3.0':
      return '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)';
    case 'Apache-2.0':
      return '![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)';
    case 'BSD-3-Clause':
      return '![License: BSD 3-Clause](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)';
    default:
      return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'MIT':
      return 'https://opensource.org/licenses/MIT';
    case 'GPL-3.0':
      return 'https://opensource.org/licenses/GPL-3.0';
    case 'Apache-2.0':
      return 'https://opensource.org/licenses/Apache-2.0';
    case 'BSD-3-Clause':
      return 'https://opensource.org/licenses/BSD-3-Clause';
    default:
      return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license || license === 'None') {
    return '';
  }
  return `## License

This project is licensed under the ${license} License. See the [License](${renderLicenseLink(license)}) for more details.

${renderLicenseBadge(license)}`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
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

## Installation
${data.installation}

## Usage
${data.usage}

${renderLicenseSection(data.license)}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
For any questions, please contact me via [GitHub](https://github.com/${data.github}) or email me at ${data.email}.
`;
}

module.exports = generateMarkdown;
