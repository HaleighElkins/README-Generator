const fs = require('fs');
const inquirer = require('inquirer');
// util is a folder for "utilities" so its holding the skleton readme I would like to use.
const util = require("util");

const generateREADME = require("./utils/readmeGenerator");
// This is to convert the fs function that returns as a promise.
const writeFileAsync = util.promisify(fs.writeFile);

// Prompts for the README file. Starting with the Title of the README
const prompts = [
    // type: "input" is used for the user to type in what they need.

    // WHEN I enter my project title
    {
        type: "input",
        message: "Please enter the title of your project.",
        name: "title",
    },
    // WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
    {
        type: "input",
        message: "Please enter the description of your project.",
        name: "discription",
    },
    {
        type: "input",
        message: "Please describe the usage of this project is used for.",
        name: "usage",
    },
    {
        type: "input",
        message: "Please provide the installation process if there is any.",
        name: "install",
    },
    {
        type: "input",
        message: "Have you used any contributors to this project?",
        name: "contributor",
    },
    {
        type: "input",
        message: "Are there any tests included in this project?",
        name: "tests",
    },
    // type: "list" comes with inquirer and it has the option for list to pop up for the user to choose from

    // WHEN I choose a license for my application from a list of options
    {
        type: "list",
        message: "Please choose which license you used:",
        name: "license",
        choices: [
            "M.I.T",
            "Apache",
            "Academic",
            "Creative Commons",
            "Microsoft",
            "Mozilla",
            "Open",
            "No License Used",
        ]
        // I found some of the licenses on the GitHub docs
    },
    // WHEN I enter my GitHub username, this is added to the section of the README entitled Questions, with a link to my GitHub profile
    {
        type: "input",
        message: "Please add your GitHub username for any questions the user might have.",
        name: "github",
    },
    // WHEN I enter my email address, this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
    {
        type: "input",
        message: "Please enter your email for any extra questions the user might have.",
        name: "email",
    },
];

// Call inquirer.prompt once with the prompts
inquirer.prompt(prompts).then(async (answers) => {
    try {
        const generatedREADME = generateREADME(answers);

        // Create the dist directory if it doesn't exist
        if (!fs.existsSync('./dist')) {
            // Creates the "dist" directory if it doesn't exist. It uses mkdirSync to create the directory.
            fs.mkdirSync('./dist');

        }

        // Write the README file to the dist directory
        await writeFileAsync('./dist/README.md', generatedREADME);

        console.log('Successfully wrote to README.md');
    } catch (err) {
        console.error(err);
    }
});
