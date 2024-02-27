const fs = require('fs');
// This is to inculde the file script
const inquirer = require('inquirer');
// This is to make sure we use the inquirer that we installed. 
const util = require("util");



const generateREADME = require("")
// This is to make sure the README file is built 







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
    name:"questions",
},
// WHEN I enter my email address, his is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
{
    type:"input",
    message:"Please enter your email for any extra questions the user might have.",
    name:"email",
},
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README





])




// The next part if for the response. This is what has the README file actually get built after the user fills out of the prompts. 
// I built a README and then copied it over and then put the responses in where needed. 

.then((response))=>
fs.writeFile('READMNE.md',
${response.title}
${response.discription}
$
$
$


// Err is for anything that wasn't fully filled out properly or ignored by the user. 
    err ? console.error(err) : console.log("NEW README")





)


