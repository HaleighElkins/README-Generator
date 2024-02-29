// This function is to generate the README file with the answered prompts.
function generateReadme(data) {
    return `


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
${data.license}

## Questions
If you have any questions about this app, please reach out:
* GitHub: [${data.github}](https://github.com/${data.github})
* Email: ${data.email}
`;
}

// exporting the readmeGenerator
module.exports = generateReadme;
