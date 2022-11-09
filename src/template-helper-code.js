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
}