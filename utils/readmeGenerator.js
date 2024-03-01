// I tried useing the starter code that was given to me for the badges but it just wasn't working properly. I used Stackover Flow to figure out a different and easier way to add in a badge without having to use 4 different functions for something that only needed 3 lines. 


// This function is to generate the README file with the answered prompts.
function generateReadme(data) {
    const licenseBadge = data.license
      ? `![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)<br />`
      : '';
  
    return `
  ${licenseBadge}
  
  # Project Title
  ${data.title}
  
  ## Description
  ${data.discription}
  
  ---
  
  ## Table of Contents
  * [Usage](#Usage)
  * [Installation](#Installation)
  * [Contributing](#Contributing)
  * [Tests](#Tests)
  * [License](#License)
  * [Questions](#Questions)
  
  ---
  
  ## Usage
  ${data.usage}
  
  ---
  
  ## Installation
  ${data.install}
  
  ## Contributing
  - ${data.contributor}
  
  ## Tests
  ${data.tests}
  
  ## License
  ${licenseBadge}
  This application is covered by the ${data.license} license.
  
  ## Questions
  If you have any questions about this app, please reach out:
  * GitHub: [${data.github}](https://github.com/${data.github})
  * Email: ${data.email}
  `;
  }
  
  // exporting the readmeGenerator
  module.exports = generateReadme;
  