require('../css/style.css');
const personajes = require('./characters');

console.log(personajes);

let template =
    `<ul>
    ${personajes.map( p =>
        `<li>${p.name}</li>`
        ).join('')}
    </ul>`;

document.querySelector('#panel').innerHTML = template;    