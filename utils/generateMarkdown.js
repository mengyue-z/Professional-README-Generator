// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  ![Badge]('')
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let readmeDraft = 

  `# ${answers.title}
  
  ## Project Description
  
  ${answers.description}
  
  ## Table of Contents
  
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [License](#license)
  * [Questions](#questions)
  
  ## Installation
  
  ${answers.installation}
  
  ## Usage
  
  ${answers.description}
  
  ## Contributing
  
  ${answers.usageInfo}
  
  ## Tests
  
  ${answers.test}
  
  ## License 
  
  ${answers.license}
  
  ## Questions
  
  // link to my github bio http://github.com - xxx
  // email address with instructions on how to reach me with additional questions ${answers.email}
  
  `

  return readmeDraft;
}

module.exports = generateMarkdown;
