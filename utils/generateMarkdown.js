// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(confirmLicense, license) {
  if (confirmLicense === true) {
    return `![Static Badge](https://img.shields.io/badge/License-${license}-blue)`
  } else {
    return '';
  };
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(confirmLicense, license) {
  if (confirmLicense === true) {
    return `[${license}](https://choosealicense.com/licenses/${license}/)`;
  } else {
    return '';
  };
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(confirmLicense, license) {
  if (confirmLicense === true) {
    return `## License\n\nThis project is licensed under the ${renderLicenseLink(license)} License.\n\n## Badges\n\n${renderLicenseBadge(license)}`;
  } else {
    return '';
  };
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

    # Description

    ${data.description}

    # Table Of Contents

    - [Installation](#installation)
    - [Usage](#usage)
    - [Credits](#credits)
    - [How To Contribute](#how-to-contribute)
    - [License](#license)
    - [Badges](#badges)

    # Installation
    
    ## Dependancies Required

    ${data.dependancies}

    ## Installing this project

    ${data.install}
    
    # Usage
    
    In this section, you should write a description of instructions on how to use your application.
    To add a screenshot, create an assets/images folder in your repository and place your screenshot in it. 
    Then, using the relative filepath, add it to your README. Don't forget to use Markdown Language!
    
    # Contributors
    
    ${data.contributors}
    
    # How To Contribute
    
    In this section, you want to give instructions on how others can contribute to your project.
    
    ${renderLicenseSection(data.license)}
`;
}

export default generateMarkdown;
