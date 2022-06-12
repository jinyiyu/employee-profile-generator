const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const getAnswers = require("./utils/getAnswers");

const generalQuestions = [
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
];

const managerQuestions = [
  {
    name: "name",
    type: "input",
    message: "Please enter the team manager's name.",
  },
  {
    name: "id",
    type: "input",
    message: "Please enter the team manager's ID.",
  },
  {
    name: "email",
    type: "input",
    message: "Please enter the team manager's email.",
  },
  {
    name: "officeNum",
    type: "input",
    message: "Please enter the team manager's Office Number.",
  },
];

const loopingQuestions = [
  {
    name: "employeeRole",
    type: "list",
    message:
      "What Would you like to do next?(choose another team member to add or quit)",
    choices: [
      { key: "Software Engineer", value: "software engineer" },
      { key: "Intern", value: "intern" },
      { key: "Quit the Application", value: "quit" },
    ],
  },
];
const softwareQuestions = [
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
];

const internQuestions = [
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

const init = async () => {
  // ask general questions
  //   const { teamName, fileName } = await getAnswers(generalQuestions);
  //   const managerAnswers = await getAnswers(managerQuestions);
  //   const manager1 = new Manager(managerAnswers);
  //   console.log(manager1);

  // start the loop - in the loop check using if conditions
  const { employeeRole } = await getAnswers(loopingQuestions);
  if (employeeRole === "software engineer") {
    // if ask questions - creat new instance - push in team array
    console.log("engineer");
  } else if (employeeRole === "intern") {
    console.log("intern");
  } else {
    console.log("quit");
  }

  // if quit the exit the loop - while (let looping true -  false)
  // reander HTML
  //   write html to file
};

init();
