const inquirer = require("inquirer");
const fs = require("fs");

const questions = [
  {
    name: "teamName",
    type: "input",
    message: "What is the name of your team?",
  },
  {
    name: "fileName",
    type: "input",
    message: "What do you want to name your HTML file?",
  },
  //   questions for manager
  {
    name: "managerName",
    type: "input",
    message: "Please enter the team manager's name.",
  },
  {
    name: "managerID",
    type: "input",
    message: "Please enter the team manager's ID.",
  },
  {
    name: "managerEmail",
    type: "input",
    message: "Please enter the team manager's email.",
  },
  {
    name: "managerOfficeNum",
    type: "input",
    message: "Please enter the team manager's Office Number.",
  },
  //   looping questions
  {
    name: "addTeamNum",
    type: "list",
    message:
      "What Would you like to do next?(choose another team member to add or quit)",
    choices: ["Software Engineer", "Intern", "Quit the Application"],
  },
  //   questions for software engineer
  {
    name: "engineerName",
    type: "input",
    message: "Please enter the Engineer's name.",
  },
  {
    name: "engineerID",
    type: "input",
    message: "Please enter the Engineer's ID.",
  },
  {
    name: "engineerEmail",
    type: "input",
    message: "Please enter the Engineer's email.",
  },
  {
    name: "engineerGithub",
    type: "input",
    message: "Please enter the Engineer's Github Username.",
  },
  // questions for interns
  {
    name: "internName",
    type: "input",
    message: "Please enter the Intern's name.",
  },
  {
    name: "internID",
    type: "input",
    message: "Please enter the Intern's ID.",
  },
  {
    name: "internEmail",
    type: "input",
    message: "Please enter the Intern's email.",
  },
  {
    name: "internSchool",
    type: "input",
    message: "Please enter the Intern's school.",
  },
];
