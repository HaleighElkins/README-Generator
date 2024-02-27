const fs = require('fs');
// This is to inculde the file script
const inquirer = require('inquirer');
// This is to make sure we use the inquirer that we installed. 
const util = require("util");
const generateREADME = require("./utils/readmeGenerator")
// This is to make sure the README file is built 
const writeFileAsync = util.promisify(fs.writeFile);




// Prompts for the README file. Starting with the Title of the README

inquirer
.prompt([
    // type: "input" is used for the user to type in what they need.

    // WHEN I enter my project title
{
    type:"input",
    message:"Please type in the title of your README.",
    name:"title",
},
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
{
    type:"input",
    message:"Please enter the description of your APP.",
    name:"discription",
},
{
    type:"input",
    message:"Please provide the installation process if there is any.",
    name:"instal",
},
{
    type:"input",
    message:"Please describe what the usage if this app is for.",
    name:"usage",
},
{   
    type:"input",
    message:"Have you used any comtributiors to this project?",
    name:"contributior",
},
{
    type:"input",
    message:"Are there any tests inculded in this project?",
    name:"tests",
},
// type: "list" comes with inquirer and it has the option for list to pop up for the user to choose from

//WHEN I choose a license for my application from a list of options
{
    type:"list",
    message:"Plase choose which license you will be using,",
    name:"license",
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
    // I found some of the licenses on the github docs
},
// WHEN I enter my GitHub username, this is added to the section of the README entitled Questions, with a link to my GitHub profile
{
    type:"input",
    message:"Please add your github username for any questions the user might have.",
    name:"qithub",
},
// WHEN I enter my email address, his is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
{
    type:"input",
    message:"Please enter your email for any extra questions the user might have.",
    name:"email",
},
])




// The next part if for the async function, to then start using the utils folder where the skeleton README file is located. 
async function init() {
 try {

    // This is to ask the user all the prompts and to generate the responses in the coressponding README file
    const answers = await promptUser();
    const generate = generateReadme(answers);

    // Next is to send the generated Readme to the dist directory (distribution directory) which is a folder for all the created Reames. 
    await writeFileAsync('.dist/READMe.md');
        console.log('Successfully wrote to README.md');
 }
//  This is to finish out the funciton and to console.log any errors. 
    catch (err) {
        console.log(err);
    }
}
init();