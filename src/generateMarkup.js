const fs = require('fs');
const teamRep = require('../index');
const index = require('../index');

const html = [];

//create functions for each role to generate appropriate markup 
const createManager = manager => {
  let managerHtml = `
  <div class="card" style="width: 20rem;">
  <div class="card-header">
    ${manager.name}<br>
    <div class="d-inline-flex">
      <i class="fa-solid fa-mug-hot"></i>
      <h3 class="ml-3">Manager</h3>
    </div>
    </div>
    <ul class="list">
      <li>ID: ${manager.id}</li>
      <li>Email: <span><a href="mailto:${manager.email}">${manager.email}</a></span></li>
      <li>Office Number: ${manager.officeNumber}</li>
    </ul>
  </div>
       `;
  html.push(managerHtml);

}

const createEngineer = engineer => {
  let engineerHtml = `
  <div class="card" style="width: 20rem">
    <div class="card-header">
    ${engineer.name} <br>
    <div class="d-inline-flex">
    <i class="fa-solid fa-glasses"></i>
      <h3 class="ml-3">Engineer</h3>
    </div>
    </div>
      <ul class="list">
      <li>ID: ${engineer.id}</li>
      <li>Email: <span><a href="mailto:${engineer.email}">${engineer.email}</a></span></li>
      <li>Github: ${engineer.github}</li>
    </ul>
  </div>
  `;
  html.push(engineerHtml);
}

const createIntern = intern => {
  let internHtml = `
  <div class="card" style="width: 20rem;">
    <div class="card-header">
    ${intern.name} <br>
    <div class="d-inline-flex">
    <i class="fa-solid fa-user-graduate"></i>
      <h3 class="ml-3">Intern</h3>
    </div>
    </div>
   <ul class="list">
      <li>ID: ${intern.id}</li>
      <li>Email: <span><a href="mailto:${intern.email}">${intern.email}</a></span></li>
      <li>School: ${intern.school}</li>
    </ul>
</div>
  `;
  html.push(internHtml);
}

generateMarkup = teamRep => {
  for (let i = 0; i < teamRep.length; i++) {
    if (teamRep[i].getRole() === "Manager") {
      createManager(teamRep[i]);
    }
    if (teamRep[i].getRole() === "Engineer") {
      createEngineer(teamRep[i]);
    }
    if (teamRep[i].getRole() === "Intern") {
      createIntern(teamRep[i]);
    }
  }
  // Join the HTML together: 

  const allHtml = html.join('');
  const generateTeam = generateTeamPage(allHtml);
  return generateTeam;
}

const generateTeamPage = html => {

  return `
  <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
  <script src="https://kit.fontawesome.com/230a732877.js" crossorigin="anonymous"></script>
  <link rel="stylesheet" href="./style.css">
  <title>Team Profile Generator</title>
</head>
<body>
  <header>
  <h1> My Team </h1>
  </header>
  
  <main>${html} </main>
  </div>
</body>
</html>
  
  `
}

module.exports = generateMarkup;


