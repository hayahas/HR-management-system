'use strict'

let departmentData = [
   "Adminstartion","Finance","Marketing","Development"];
  
  
  let tableHTML = `
    <table>
      <thead>
        <tr>
          <th>Department Name</th>
          <th>Number of Employees</th>
          <th>Average Salary</th>
          <th>Total Salary</th>
        </tr>
      </thead>
      <tbody>
  `;
  
  let totalEmployees = 0;
  let totalSalary = 0;
  
  departmentData.forEach(department => {
    // Department rows here...
    let departmentEmployees = department.employees.length;
    let departmentTotalSalary = department.employees.reduce((sum, employee) => sum + employee.salary, 0);
    let departmentAverageSalary = departmentTotalSalary / departmentEmployees;
  
    totalEmployees += departmentEmployees;
    totalSalary += departmentTotalSalary;
  
    tableHTML += `
      <tr>
        <td>${department.name}</td>
        <td>${departmentEmployees}</td>
        <td>${departmentAverageSalary.toFixed(2)}</td>
        <td>${departmentTotalSalary}</td>
      </tr>
    `;
  });
  
  let averageSalary = totalSalary / totalEmployees;
  
  tableHTML += `
      </tbody>
      <tfoot>
        <tr>
          <td><strong>Total</strong></td>
          <td>${totalEmployees}</td>
          <td>${averageSalary.toFixed(2)}</td>
          <td>${totalSalary}</td>
        </tr>
      </tfoot>
    </table>
  `;
  
  // Append the table HTML to the desired element in the HTML document
  let tableContainer = document.getElementById("table");
  tableContainer.innerHTML = tableHTML;
  