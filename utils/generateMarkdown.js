// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  var encodedLicense = encodeURIComponent(license)
  return `![badge](https://img.shields.io/badge/License-${encodedLicense}-green)`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license !== "None") {
    return `* [License](#license)`
} else {
  return '';
}
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license !== "None") {
    return `## License
    
  This project is licensed under the ${license}.` 
  } else {
    return ' ';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let readmeDraft = 

  `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Project Description
  
  ${data.description}
  
  ## Table of Contents
  
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  ${renderLicenseLink(data.license)}
  * [Questions](#questions)
  
  ## Installation
  
  ${data.installation}
  
  ## Usage
  
  ${data.description}
  
  ## Contributing
  
  ${data.usageInfo}
  
  ## Tests
  
  ${data.test}
  
  ${renderLicenseSection(data.license)}
  
  ## Questions
  
  If you have any questions, please don't hesitate to contact me at: ${data.email}.

  My github bio: http://github.com/${data.github}
 
  
  `

  return readmeDraft;
}

module.exports = generateMarkdown;
