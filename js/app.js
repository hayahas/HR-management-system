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
this.salary=0;
this.netSalary;

//push object to the array
   allEmployees.push(this);
}


//To Render The employees on the home page
Employee.prototype.renderEmployees= function(){
    for (let i = 0; i < allEmployees.length-1; i++){
 document.write(`Name: ${allEmployees[i].fullName} | Salary: ${allEmployees[i].salary} <br> `)
}
}

 //check the level of employee
Employee.prototype.emloyeeLevel= function(){
   
    if(this.level == "Junior"){
        this.salary=calculateRandomSalary(500,1000);
        //calculate the netsalary
        this.netSalary=Math.floor(this.salary - (this.salary * 0.075))
    }
   else if(this.level == "Mid-Senior"){
    this.salary=calculateRandomSalary(1000,1500)
    this.netSalary=Math.floor(this.salary - (this.salary * 0.075))
   }
    else{
        this.salary=calculateRandomSalary(1500,2000)
         this.netSalary=Math.floor(this.salary - (this.salary * 0.075))
    } 
    return this.salary;
    }
  
//Calculate the Salary
Employee.prototype.calculateRandomSalary= function(min,max){   
var random=Math.floor(Math.random()* (max-min + 1) + min);
return random;
}

//loop to apply the functions on the whole array
for (let i = 0; i < allEmployees.length-1; i++) {
    allEmployees[i].emloyeeLevel();
    allEmployees[i].renderEmployees();
   
    
}



//Employyees instances
let employee1= new Employee("1000","Ghazi Samer", "Adminstartion", "Senior", "./assests/ghazi.png");
//allEmployees.push(employee1);
let employee2= new Employee("1001","Lana Ali", "Finance", "Senior","./assests/lana.png");
//allEmployees.push(employee2);
let employee3= new Employee("1002","Tamara Ayoub", "Marketing", "Senior",".assests/tamara.png");
//allEmployees.push(employee3);
let employee4= new Employee("1003","Safi Waleed", "Adminstartion", "Mid-Senior","./assests/safi.png");
//allEmployees.push(employee4);
let employee5= new Employee("1004","Omar Zaid", "Development", "Senior","./assests/omar.png");
//allEmployees.push(employee5);
let employee6= new Employee("1005","Rana Saleh", "Development", "Junior","./assests/rana.png");
//allEmployees.push(employee6);
let employee7= new Employee("1006","Hadi Ahmad ", "Finance", "Mid-Senior","./assests/hadi.png");
//allEmployees.push(employee7);

console.log(allEmployees)

employee1.renderEmployees();


////////////////////////////////// Lab 08


//window.addEventListener('load', function() {
   // console.log(form)
  //});
  
//   document.addEventListener("DOMContentLoaded", function(event) {
//     let form=document.getElementById('form1');
//     console.log(form);

//     function submitHandler(event){
//         event.preventDefault();
//         alert("Form Submitted")
//     }
//     form.addEventListener(submit, submitHandler);
//   })

  

