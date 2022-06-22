const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const getAnswers = require("./utils/getAnswers");
const writeToFile = require("./utils/writeToFile");
const renderHTML = require("./utils/renderHTML");

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
      "What would you like to do next? (choose another team member to add or quit)",
    choices: [
      { key: "Software Engineer", value: "software engineer" },
      { key: "Intern", value: "intern" },
      { key: "Quit the Application", value: "quit" },
    ],
  },
];
const engineerQuestions = [
  {
    name: "name",
    type: "input",
    message: "Please enter the Engineer's name.",
  },
  {
    name: "id",
    type: "input",
    message: "Please enter the Engineer's ID.",
  },
  {
    name: "email",
    type: "input",
    message: "Please enter the Engineer's email.",
  },
  {
    name: "github",
    type: "input",
    message: "Please enter the Engineer's Github Username.",
  },
];

const internQuestions = [
  {
    name: "name",
    type: "input",
    message: "Please enter the Intern's name.",
  },
  {
    name: "id",
    type: "input",
    message: "Please enter the Intern's ID.",
  },
  {
    name: "email",
    type: "input",
    message: "Please enter the Intern's email.",
  },
  {
    name: "school",
    type: "input",
    message: "Please enter the Intern's school.",
  },
];

const getAllMembers = async () => {
  const teamArray = [];
  let loopingStatus = true;
  while (loopingStatus) {
    // start the loop - in the loop check if add team member using if conditions
    const { employeeRole } = await getAnswers(loopingQuestions);

    if (employeeRole === "software engineer") {
      // ask questions - creat new instance - push in team array
      const engineerAnswers = await getAnswers(engineerQuestions);

      const engineer = new Engineer(engineerAnswers);
      console.log(engineer);
      teamArray.push(engineer);
    } else if (employeeRole === "intern") {
      const internAnswers = await getAnswers(internQuestions);

      const intern = new Intern(internAnswers);
      console.log(intern);
      teamArray.push(intern);
    } else {
      loopingStatus = false;
    }
  }
  return teamArray;
};

const init = async () => {
  // ask general and manager questions
  const { teamName, fileName } = await getAnswers(generalQuestions);
  const managerAnswers = await getAnswers(managerQuestions);
  const manager = new Manager(managerAnswers);
  // ask looping questions and ask subsequent team member questions
  const teamMembers = await getAllMembers();
  // reander HTML
  console.log({ teamName, fileName, manager, teamMembers });
  const html = renderHTML({ teamName, manager, teamMembers });

  //   write html to file
  writeToFile(fileName, html);
};

init();
