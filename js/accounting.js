'use strict'

//get the data from ls
const employees = JSON.parse(localStorage.getItem("Employees")); 
console.log("Employees",employees)

//create department obj
const departments = {};

//loop in the employee array & creat elemnts in the obj from employee
employees.forEach(emp => {
  if (!departments[emp.department]) {
    departments[emp.department] = {
      name: emp.department,
      numEmployees: 0,
      totalSalary: 0
    };
  }
  
  departments[emp.department].numEmployees++;
  departments[emp.department].totalSalary += emp.salary;
});


Object.values(departments).forEach(dept => {
  dept.avgSalary = dept.totalSalary / dept.numEmployees;
});

//
const totalNumEmployees = employees.length;
const totalAvgSalary = Object.values(departments).reduce((total, dept) => total + dept.avgSalary, 0) / Object.values(departments).length;
const totalSalary = Object.values(departments).reduce((total, dept) => total + dept.totalSalary, 0);

//declare tablHtml
let tableHtml = "<table><thead><tr><th>Department Name</th><th>Number of Employees</th><th>Total Salary</th><th>Average Salary</th></tr></thead><tbody>";

Object.values(departments).forEach(dept => {
  tableHtml += `<tr><td>${dept.name}</td><td>${dept.numEmployees}</td><td>${dept.totalSalary}</td><td>${dept.avgSalary}</td></tr>`;
});

//add calculations to tableHtml
tableHtml += `<tfoot><tr><td>Total</td><td>${totalNumEmployees}</td><td>${totalAvgSalary}</td><td>${totalSalary}</td></tr></tfoot></table>`;

//append the tableHtml to the table in acc.html
document.getElementById("table").innerHTML = tableHtml;

console.log(Object.values(departments))
