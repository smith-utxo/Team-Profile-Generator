const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const fs = require('fs');
const Employee = require('./lib/Employee');

const teamRep = [];

// should add validation on inquirer prompts to ensure user provided input 


inquirer.prompt([
  {
    type: 'input',
    name: 'name',
    message: 'Enter your name: ',
    validate: nameInput => {
      if (nameInput) {
        return true;
      } else {
        console.log('You must enter a name!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'id',
    message: 'Enter your Employee ID: ',
    validate: idInput => {
      if (idInput) {
        return true;
      } else {
        console.log('You must enter a name!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'email',
    command: 'Enter your Email Address: ',
    validate: emailInput => {
      if (emailInput) {
        return true;
      } else {
        console.log("Enter Email!");
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'officeNumber',
    command: 'Enter your Office Number: ',
    validate: officeNumberInput => {
      if (officeNumberInput) {
        return true;
      } else {
        console.log('Enter an office Number!');
        return false;
      }
    }
  }

]).then(answers => {
  console.log(answers);
  const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
  teamRep.push(manager);
  displayMenu();
})

const displayMenu = () => {
  return inquirer.prompt([
    {
      type: 'list',
      name: 'menu',
      message: 'Select the type of teamRep you would like to add: ',
      choices: ['Employee', 'Engineer', 'Intern', 'No more members to add'],
    }])
    .then(function(answer) {
      console.log(answer);
      if(answer.menu == 'Employee'){
        promptEmployee();
      } else if(answer.menu == 'Engineer'){
        promptEngineer(); 
      } else if(answer.menu == 'Intern'){
        promptIntern(); 
      } else {
        createTeam(); 
      }
    })
};

promptEngineer = () => {
  return inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: `Engineer's fullname: `,
    },
    {
      type: 'input',
      name: 'id',
      message: `Engineer's employee ID: `,
    },
    {
      type: 'input',
      name: 'email',
      command: `Engineer's Email Address: `,
    }, 
    {
      type: 'input', 
      name: 'github', 
      message: `Engineer's Github Username: `, 
    }
  ]).then(answers => {
    console.log(answers);
    const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
    teamRep.push(engineer);
    displayMenu(); 
  })
}

promptEmployee = () => {
  return inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: `Employee's fullname: `,
    },
    {
      type: 'input',
      name: 'id',
      message: `Employee ID: `,
    },
    {
      type: 'input',
      name: 'email',
      command: `Employee's Email Address: `,
    }, 
  ]).then(answers => {
    console.log(answers);
    const employee = new Employee(answers.name, answers.id, answers.email);
    teamRep.push(employee);
    displayMenu(); 
  })
}

promptIntern = () => {
  return inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: `Intern's fullname: `,
    },
    {
      type: 'input',
      name: 'id',
      message: `Intern Employee ID: `,
    },
    {
      type: 'input',
      name: 'email',
      command: `Intern's Email Address: `,
    }, 
    {
      type: 'input',
      name: 'school',
      command: `Intern's School: `,
    }
  ]).then(answers => {
    console.log(answers);
    const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
    teamRep.push(intern);
    displayMenu(); 
  })
}

createTeam = () => {

}