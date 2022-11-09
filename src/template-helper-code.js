const Engineer = require("../lib/Engineer");

const createTeam = (team) => {
    const createManager = (manager) => {
        return `
        <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">${manager.getName()}</h3>
                        <h3 class="card-title">${manager.getRole()}</h3>
                    </div>
                    <div>
                        <ul class="list-group">
                            <li class="list-group-item">ID: ${manager.getId()}</li>
                            <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}"></a>${manager.getEmail()}</li>
                            <li class="list-group-item">Office: ${manager.getOfficeNumber()}</li>
                        </ul>
                    </div>
                </div>
        `;
    };

    const createIntern = (intern) => {
        return `
        <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">${intern.getName()}</h3>
                        <h3 class="card-title">${intern.getRole()}</h3>
                    </div>
                    <div>
                        <ul class="list-group">
                            <li class="list-group-item">ID: ${intern.getId()}</li>
                            <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}"></a>${intern.getEmail()}</li>
                            <li class="list-group-item">School: ${intern.getSchool()}</li>
                        </ul>
                    </div>
                </div>
        `;
    };

    const createEngineer = (engineer) => {
        return `
        <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">${engineer.getName()}</h3>
                        <h3 class="card-title">${engineer.getRole()}</h3>
                    </div>
                    <div>
                        <ul class="list-group">
                            <li class="list-group-item">ID: ${engineer.getId()}</li>
                            <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}"></a>${engineer.getEmail()}</li>
                            <li class="list-group-item">Github: <a href="https://github.com/${engineer.getGithub()}"></a>${engineer.getGithub()}</li>
                        </ul>
                    </div>
                </div>
        `;
    };

    const html = [];

    html.push(
        team
        .filter((employee) => employee.getRole() === Manager)
        .map((manager) => createManager(manager))
    );
    html.push(
        team
        .filter((employee) => employee.getRole() === Intern)
        .map((intern) => createManager(intern))
    );
    html.push(
        team
        .filter((employee) => employee.getRole() === Engineer)
        .map((engineer) => createManager(engineer))
    );

    return html.join("")
};

module.exports = (team) => {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Generator</title>
    <link rel="stylesheet" href="style.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
</head>
<body>
    <div class="container">
        <div class="row">
             <div class="jumbotron header">
                <h1 class="text-center">My Team</h1>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="d-flex justify-content-center">
                ${createTeam(team)}
            </div>
        </div>

    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>
</body>
</html>
    `
};