'use strict'

// Array of Objects
const allEmployees=[]


//Constructor
//let employee1= new Employee("1000","Ghazi Samer", "Adminstartion", "Senior", "./assests/ghazi.png");
function Employee(employeeId, fullName, department, level, imageUrl)  {
this.employeeId=employeeId;
this.fullName=fullName;
this.department=department;
this.level=level;
this.imageUrl=imageUrl;
this.salary=this.emloyeeLevel();


//push object to the array
   allEmployees.push(this);
}

let secEle =document.getElementById("secTag")


//To Render The employees on the home page
Employee.prototype.renderEmployees= function(){
    let cardNum=generateCardNum()
    // for (let i = 0; i < allEmployees.length-1; i++) {}
    let divEle= document.createElement("div")

    divEle.classList.add("card")
let h3Ele= document.createElement("h3")
h3Ele.textContent=this.fullName+ " " + " | " +this.employeeId
h3Ele.style.fontWeight="bold"

divEle.appendChild(h3Ele)

let imgEle = document.createElement("img");
imgEle.src= this.imageUrl

divEle.appendChild(imgEle)

let pEle1= document.createElement("p")
pEle1.textContent = (`Department: ${this.department}`)

divEle.appendChild(pEle1)
  
 let pEle2= document.createElement("p")
 pEle2.textContent=(`Level : ${this.level}`)

 
 let pEle3= document.createElement("p")
 pEle3.textContent=(cardNum)
pEle3.style.alignContent="center"
 divEle.appendChild(pEle3)
 divEle.appendChild(pEle2)

 secEle.appendChild(divEle)
}

 //check the level of employee
Employee.prototype.emloyeeLevel= function(){
   let x; let netS;
    if(this.level == "Junior"){
        x=this.calculateRandomSalary(500,1000);
        //calculate the netsalary
        netS=Math.floor(this.salary - (this.salary * 0.075))
    }
   else if(this.level == "Mid-Senior"){
    x=this.calculateRandomSalary(1000,1500)
    netS=Math.floor(this.salary - (this.salary * 0.075))
   }
    else{
        x=this.calculateRandomSalary(1500,2000)
        netS=Math.floor(this.salary - (this.salary * 0.075))
    } 
    return x;
    }
  
//Calculate the Salary
Employee.prototype.calculateRandomSalary= function(min,max){   
 return Math.floor(Math.random()* (max-min + 1) + min);

}

//Employyees instances
let employee1= new Employee("1000","Ghazi Samer", "Adminstartion", "Senior", "./emp.png");
let employee2= new Employee("1001","Lana Ali", "Finance", "Senior","../emp.png");
let employee3= new Employee("1002","Tamara Ayoub", "Marketing", "Senior","./emp.png");
let employee4= new Employee("1003","Safi Waleed", "Adminstartion", "Mid-Senior","./emp.png");
let employee5= new Employee("1004","Omar Zaid", "Development", "Senior","../emp.png");
let employee6= new Employee("1005","Rana Saleh", "Development", "Junior","../emp.png");
let employee7= new Employee("1006","Hadi Ahmad ", "Finance", "Mid-Senior","../emp.png");


//loop to apply the functions on the whole array
for (let i = 0; i < allEmployees.length-1; i++) {
    allEmployees[i].emloyeeLevel();
    allEmployees[i].renderEmployees();
}
console.log(allEmployees)

//employee1.renderEmployees();


// let secEle2=document.getElementById("secTag1")
// console.log(secEle2);

function generateEmployeeID() {

    let randomID = Math.floor(Math.random() * 2000) + 1000;
    
    return randomID;
  }

  function generateCardNum() {

    let num = Math.floor(Math.random()* (2000-1000 + 1) + 1000);
    
    return num;
  }
//random Id Number

 document.addEventListener("submit", function(event) {
    event.preventDefault();
    console.log("submitted form")

    let form=document.getElementById('form1');
    console.log(form);
     let empId=generateEmployeeID()
     let employeeName=event.target.EmpName.value;
     let dep=event.target.dep.value;
     let lvl=event.target.level.value;
     let imgUrl=event.target.img.value;
     let cardNum=generateCardNum()
     let newEmployee= new Employee(empId,employeeName, dep, lvl,imgUrl);
     allEmployees.push(newEmployee)
     //let employee= document.createElement("p")
  let divEle= document.createElement("div")
    
    divEle.classList.add("card")
let h3Ele= document.createElement("h3")
h3Ele.textContent=newEmployee.fullName+ " " + " | " +newEmployee.employeeId
h3Ele.style.fontWeight="bold"

divEle.appendChild(h3Ele)



let imgEle = document.createElement("img");
imgEle.src= newEmployee.imageUrl

divEle.appendChild(imgEle)

let pEle1= document.createElement("p")
pEle1.textContent = (`Department: ${newEmployee.department}`)

divEle.appendChild(pEle1)
  
 let pEle2= document.createElement("p")
 pEle2.textContent=(`Level : ${newEmployee.level}`)
 divEle.appendChild(pEle2)

 let pEle3= document.createElement("p")
 pEle3.textContent=(cardNum)
pEle3.style.alignContent="center"
 divEle.appendChild(pEle3)

 secEle.appendChild(divEle)
    secEle.appendChild(employee)
    newEmployee.renderEmployees;

    //employee.textContent=(` Name :${newEmployee.fullName} | Salary: ${newEmployee.salary} `)
  console.log(newEmployee)


   })

 
 
