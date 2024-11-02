// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (confirmLicnese === true) {
    return `![Static Badge](https://img.shields.io/badge/License-${license}-blue)`
  } else {
    return '';
  };
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (confirmLicense === true) {
    return `[${license}](https://choosealicense.com/licenses/${license}/)`;
  } else {
    return '';
  };
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch (license) {
    case 'mit':
      return `## License\n\nThis project is licensed under the ${renderLicenseLink(license)} License.\n\n## Badges\n\n${renderLicenseBadge(license)}`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

    ## Description

    ${data.description}

    ## Table Of Contents

    - [Installation](#installation)
    - [Usage](#usage)
    - [Credits](#credits)
    - [How To Contribute](#how-to-contribute)
    - [License](#license)
    - [Badges](#badges)

    ## Installation

    ### Dependancies

    ### Installing

    ${data.install}

    ## Usage

    In this section, you would write a description and instructions of how to use your application.
    To add a screenshot, create an assets/images folder in your repository and upload your screenshot to it. 
    Then, using the relative filepath, add it to your README. Don't forget to use Markdown Language!

    ## Credits

    ${data.authors}

    ## How To Contribute
    

    ${renderLicenseSection(license)}
`;
}

export default generateMarkdown;
