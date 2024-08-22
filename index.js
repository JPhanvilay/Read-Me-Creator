// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
 {
  type: "input",
  message: "What would you like to title your project?",
  name: "title",
 },
 {
  type: "input",
  message: "What is your project about? Be as descriptive as possible.",
  name: "description",
 },
 {
  type: "input",
  message:
   "Describe how to install your project and its dependecies. Provide clear instructions.",
  name: "installation",
 },
 {
  type: "input",
  message: "Provide instructions and examples for use.",
  name: "usage",
 },
 {
  type: "list",
  message: "What license would you like to use for your project?",
  name: "license",
  choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
 },
 {
  type: "input",
  message:
   "List how others have or can contribute to your project, if any, with links to their GitHub profiles.",
  name: "contributing",
 },
 {
  type: "input",
  message:
   "Write tests for your application if made. Then provide examples on how to run them here.",
  name: "tests",
 },
 {
  type: "input",
  message: "Provide GitHub username, otherwise leave blank.",
  name: "githubUsername",
 },
 {
  type: "input",
  message: "Provide an email address, otherwise leave blank.",
  name: "email",
 },
 {
  type: "input",
  message: "If any questions or concerns, state them here.",
  name: "questions",
 },
];

// TODO: Create a function to write README file
function writeToFile(fileName, userAnswers) {
 fs.writeFileSync(fileName, userAnswers);
}

// TODO: Create a function to initialize app
function init() {
 inquirer.prompt(questions).then((userAnswers) => {
  writeToFile("README.md", generateMarkdown({ ...userAnswers }));
 });
}

// Function call to initialize app
init();
