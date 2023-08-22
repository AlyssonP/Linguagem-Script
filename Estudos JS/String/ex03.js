const name = 'John';
const email = 'john@email.com';
const id = '1';

console.log("Hello " + name)

var row =
  '<tr><td>' + id + '</td><td>' + name + '</td><td>' + email + '</td></tr>';

console.log(row);

row = `<tr><td>${id}</td><td>${name}</td><td>${email}</td></tr>`;

console.log(row);