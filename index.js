let inquirer = require("inquirer");
let fs = require("fs");
let generateMarkdown = require("./utils/generateMarkdown");
const { fetchAsyncQuestionPropertyQuestionProperty } = require("inquirer/lib/utils/utils");


let questions = [
    {
      type: "input",
      name: "title",
      message: "What is the title of your project?"
    },
    {
      type: "input",
      name: "description",
      message: "Briefly describe your project",
    },
    {
      type: "input",
      name: "installation",
      message: "What does the user need to know to install the application?",
    },
    {
      type: "input",
      name: "usage",
      message: "What does the user need to know to use this application?",
    },
    {
        type:"input",
        name: "guidelines",
        message: "What are the contribution guidlines?",
    },
    {
        type: "input",
        name: "test",
        message: "What are the test instructions?",
    },
    {
      type: "list",
      name: "license",
      message: "Choose a license.",
      choices: ["MIT", "ISC", "Apache", "zLib"],
    },
    {
      type: "input",
      name: "github",
      message: "What is your github username?",
    },
    {
        type: "input",
        name: "email",
        message: "What is your email?",
    },
  ];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            throw err;
        } 
        else {
            console.log("README complete!");
        };
    });
};

// function to initialize program
function init() {
    inquirer.prompt(questions).then(responses =>{
        if (responses.quit === true) {
            return writeToFile("README.md", generateMarkdown(responses));
        };
    });
};

// function call to initialize program
init();


