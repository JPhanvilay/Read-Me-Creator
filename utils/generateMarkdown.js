// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
 if (license === "APACHE 2.0") {
  return `![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`;
 } else if (license === "MIT") {
  return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
 } else if (license === "GPL 3.0") {
  return `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`;
 } else if (license === "BSD 3") {
  return `![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)`;
 } else {
  return "";
 }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
 if (license === "APACHE 2.0") {
  return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
 } else if (license === "MIT") {
  return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
 } else if (license === "GPL 3.0") {
  return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
 } else if (license === "BSD 3") {
  return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
 } else {
  return "";
 }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
 if (license !== "none") {
  return `This project is licensed under ${license}`;
 }
 return "No licenses";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
 return `# ${data.title}
 ## ${renderLicenseSection(data.license)} ${renderLicenseLink(data.license)}
  ## Description
  ${data.description}
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Testing](#testing)
  - [Questions](#questions)
  
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## Contributing
  ${data.contributing}
  ## Testing 
  ${data.tests}
  ## Questions
  If you have any questions or concerns feel free to contact me below.
  <br>
  Github: http://github.com/${data.githubUsername}
  <br>
  Email: ${data.email}
`;
}

module.exports = generateMarkdown;
