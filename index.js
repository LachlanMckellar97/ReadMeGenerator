
const fs = require("fs");
const inquirer = require("inquirer");
const axios = require("axios");

const apiKey = "4944f48d1540deb12af5a52f2d194e082808b281 "; // insert your GitHub API key inside the quotation marks

const markdown = require("./utils/generateMarkdown.js")

const questions = [
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?' 
    },
    {
        type: 'input',
        name: 'repoName',
        message: 'What is the NAME of your GitHub repository?' 
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the TITLE of your project.' 
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a description of the project.'
    },
    {
        type: "input",
        name: "installation",
        message: "Write a guide for Installation."
    },
    {
        type: "input",
        name: "usage",
        message: "Describe the usage of this application."
    },
    {
        type: "list",
        name: "license",
        message: "Chose the license that applies.",
        choices: [
            "Apache License 2.0",
            "Academic Free License v3.0",
            "GNU General Public License v3.0",
            "ISC",
            "MIT License",
            "Mozilla Public License 2.0",
            "Open Software License 3.0",
            "The Unlicense"
        ]
    },
    {
        type: "input",
        name: "contributing",
        message: "Who has contributed to this application?"
    },
    {
        type: 'input',
        name: 'owner',
        message: 'Who is the OWNER of this application?' 
    },
    {
        type: 'input',
        name: 'year',
        message: 'What YEAR was this application released?' 
    }
];

function writeToFile(answers, response) {
    fs.writeFile("your-new-README.md", markdown(answers, response), function(err) {
        if (err) {
            return console.log(err)
        }
        console.log(`successfully created "${answers.title}" README.md for ${answers.username}`)
    });
}

function init() {
    inquirer
        .prompt(questions)
        .then(function(answers) {
            console.log("collected user info", answers);
            const queryUrl = `https://api.github.com/users/${answers.username}?access_token=${apiKey}`
            axios
                .get(queryUrl)
                .then(function(response) {
                    writeToFile(answers, response);
                })
        });
}

init();