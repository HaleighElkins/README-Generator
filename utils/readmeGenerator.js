
// // WHEN I click on the links in the Table of Contents, I am taken to the corresponding section of the README

// This function is to generate the README file with the answered prompts. 
function generateReadme(data) {
    return `
    
# Project Title 
 ${data.title}

## Description 
 ${data.description}



 ## Table of Contents 

# Installation
 ${data.instal}

## Usage
 ${data.usage}

## Contributing 
 ${data.contributior}

## Tests 
 ${data.tests}

## License
 ${data.license}


## Questions  
   If you have any questions about this app please reach out:
* GitHub: ${data.github}
* Email: ${data.email}

 `;
}

// exporting the readmeGenerator
module.exports = readmeGenerator;