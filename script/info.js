var employeesArray = JSON.parse(employees);
for (var i = 0; i < employeesArray.length; i++) {
  document.getElementById(
    'display',
  ).innerHTML += `<p><img ${employeesArray[i].image}><li class = paragraph${i}>Name: ${employeesArray[i].name} </li> <li class = paragraph${i}>Email: ${employeesArray[i].email}</li></p>`;
}
