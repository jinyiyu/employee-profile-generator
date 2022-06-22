const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");
const Manager = require("../lib/Manager");

const renderCards = (manager, teamMembers) => {
  const htmlArray = [];
  if (manager instanceof Manager) {
    htmlArray.push(`
<div class="col-md-3 m-3 col-sm-12 d-flex justify-content-center flex-wrap">
  <div class="card">
    <div class="card-img-top bgColor">
      
      <h5 class="card-title roleTitle">${manager.getRole()}</h5>
    </div>
    <div class="card-body">
      <p class="card-text">${manager.name}</p>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">${manager.id}</li>
        <li class="list-group-item">${manager.getOfficeNum()}</li>
        <li class="list-group-item">
          <a href="#" class="card-link">${manager.email}</a>
        </li>
      </ul>
      <div class="card-body"></div>
    </div>
  </div>
</div>
`);
  }
  teamMembers.forEach((employee) => {
    if (employee instanceof Intern) {
      htmlArray.push(`
      <div class="col-md-3 m-3 col-sm-12 d-flex justify-content-center flex-wrap">
        <div class="card">
          <div class="card-img-top bgColor">
           
            <h5 class="card-title roleTitle">${employee.getRole()}</h5>
          </div>
          <div class="card-body">
            <p class="card-text">${employee.name}</p>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">${employee.id}</li>
              <li class="list-group-item">${employee.getSchool()}</li>
              <li class="list-group-item">
                <a href="#" class="card-link">${employee.email}</a>
              </li>
            </ul>
            <div class="card-body"></div>
          </div>
        </div>
      </div>
      `);
    }
    if (employee instanceof Engineer) {
      htmlArray.push(`
        <div class="col-md-3 m-3 col-sm-12 d-flex justify-content-center flex-wrap">
          <div class="card">
            <div class="card-img-top bgColor">
              
              <h5 class="card-title roleTitle">${employee.getRole()}</h5>
            </div>
            <div class="card-body">
              <p class="card-text">${employee.name}</p>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">${employee.id}</li>
                <li class="list-group-item">${employee.getGithub()}</li>
                <li class="list-group-item">
                  <a href="#" class="card-link">${employee.email}</a>
                </li>
              </ul>
              <div class="card-body"></div>
            </div>
          </div>
        </div>
        `);
    }
  });
  return htmlArray.join("");
};

const renderHTML = ({ teamName, manager, teamMembers }) => {
  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <!-- style links -->
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
        crossorigin="anonymous"
      />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;600;700&family=Josefin+Sans:wght@400;500;700&family=Lato:wght@100;400;700&family=Poppins:wght@300;400;700&family=Roboto+Condensed:wght@300;400;700&family=Roboto:wght@400;500;700&family=Smokum&family=Source+Sans+Pro:wght@300;400;700&display=swap"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
        integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
      />
      <!-- style links -->
      <title>Document</title>
      <link rel="stylesheet" href="./assets/css/styles.css" />
    </head>
    <body>
      <header></header>
      <main>
        <div class="bannerContainer g-0">
          <!-- my banner section -->
          <div class="jumbotron">
            <p class="p-4 fs-5 ms-5">We are</p>
            <h1 class="display-4 fw-normal p-4 ms-5">${teamName}</h1>
            <hr class="my-4" />
          </div>
        </div>
        <div class="col-md-12 row g-0 p-2 cardContainer">
          ${renderCards(manager, teamMembers)}
        </div>
      </main>
      <footer></footer>
      <!-- script links -->
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2"
        crossorigin="anonymous"
      ></script>
      <script
        src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"
        integrity="sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
      ></script>
      <script
        src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.1/moment.min.js"
        integrity="sha512-qTXRIMyZIFb8iQcfjXWCO8+M5Tbc38Qi5WzdPOYZHIlZpzBHG3L3by84BBBOiRGiEb7KKtAOAs5qYdUiZiQNNQ=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
      ></script>
      <!-- script links -->
    </body>
  </html>
  `;
};

module.exports = renderHTML;
