'use strict'

// Array of Objects
const allEmployees=[]

//Constructor
function Employee(employeeId, fullName, department, level, imageUrl)  {
this.employeeId=employeeId;
this.fullName=fullName;
this.department=department;
this.level=level;
this.imageUrl=imageUrl;
this.salary=0 

//push object to the array
    allEmployees.push(this);
}


//To Render The employees on the home page
Employee.prototype.renderEmployees= function(){
  
     document.write('<p> Employee name is : ${this.fullname} and earns  : ${this.salary} </p>')
}

//Calculate the Salary
Employee.prototype.calculateRandomSalary= function(level){
 
 var min;var max;

 //check the level of employee
    switch(level){

        case 'Senior':
            min=1500;
            max=2000;
            break;
            case 'Mid-Senior':
            min=1000;
            max=1500;
            break;
            case 'Junior':
            min=500;
            max=1000;
            break;
        
        }
            
this.salary=Math.floor(Math.random()* (max-min + 1) + min)
}

//loop to apply the functions on the whole array
for (let i = 0; i < allEmployees.length-1; i++) {
    allEmployees[i].calculateRandomSalary(this.level);
    allEmployees[i].renderEmployees();
    allEmployees[i].renderEmployees(this.salary);
    
}

//calculate the netSalary
Employee.prototype.netSalary=function(totalSalary){
    var netSalary = 7.5* totalSalary;
    console.log("The NetSalary for : ${this.fullName} is : " + netSalary )
}


//Employyees instances
let employee1= new Employee("1000","Ghazi Samer", "Adminstartion", "Senior", "./assests/ghazi.png");
let employee2= new Employee("1001","Lana Ali", "Finance", "Senior","./assests/lana.png");
let employee3= new Employee("1002","Tamara Ayoub", "Marketing", "Senior",".assests/tamara.png");
let employee4= new Employee("1003","Safi Waleed", "Adminstartion", "Mid-Senior","./assests/safi.png");
let employee5= new Employee("1004","Omar Zaid", "Development", "Senior","./assests/omar.png");
let employee6= new Employee("1005","Rana Saleh", "Development", "Junior","./assests/rana.png");
let employee7= new Employee("1006","Hadi Ahmad ", "Finance", "Mid-Senior","./assests/hadi.png");

console.log(allEmployees)