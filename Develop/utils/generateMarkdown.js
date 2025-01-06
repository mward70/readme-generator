// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license){
    return '';
  }
  return `![License: ${license}](https://img.shields.io/badge/License-${encodeURIComponent(license)}-blue.svg)`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {if (!license) {
  return '';
}
const licenseLinks = {
  MIT: 'https://opensource.org/licenses/MIT',
  Apache: 'https://www.apache.org/licenses/LICENSE-2.0',
  'GNU/GPL': 'https://www.gnu.org/licenses/gpl-3.0.en.html',
  BSD: 'https://opensource.org/licenses/BSD-3-Clause',
  'Creative Commons': 'https://creativecommons.org/licenses/',
};
return licenseLinks[license] || '';}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {if (!license) {
  return '';
}
const licenseLink = renderLicenseLink(license);
return `
## License

This project is licensed under the [${license}](${licenseLink}) license.
`;}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseSection = renderLicenseSection(data.license);

  return `# ${data.title}

${licenseBadge}

## Description
${data.description}

## Installation Instructions
${data.installation}

## Usage Information
${data.usage}

## Contribution Guidelines
${data.contribution}

## Test Instructions
${data.test}

${licenseSection}
`;
};

export default generateMarkdown;
