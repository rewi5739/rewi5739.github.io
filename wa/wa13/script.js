
let employees = {
    "employees": [{
        "firstName": "Sam",
        "department": "Tech",
        "designation": "Manager",
        "salary": 40000,
        "raiseEligible": true
    }, {
        "firstName": "Mary",
        "department": "Finance",
        "designation": "Trainee",
        "salary": 18500,
        "raiseEligible": true
    }, {
        "firstName": "Bill",
        "department": "HR",
        "designation": "Executive",
        "salary": 21200,
        "raiseEligible": false
    }
]};
console.log("Problem 1");
console.log(employees);

const company = {
    "companyName": "Tech Stars",
    "website": "www.techstars.site",
    "employees": employees
};
console.log("Problem 2");
console.log(structuredClone(employees));

// console.log("AAAAAAAHHHHH", JSON.parse(JSON.stringify(employees)).employees);
// console.log("AAAAAAAHHHHH", employees.employees);
employees.employees.push({
    "firstName": "Anna",
    "department": "Tech",
    "designation": "Executive",
    "salary": 25600,
    "raiseEligible": false
});
console.log("Problem 3");
console.log(employees);

let total = 0;
for(const employee of employees.employees){
    total += employee.salary;
}


console.log("Problem 4");
console.log(total);


function giveRaises(employeeDict){
    for(const employee of employees.employees){
        if(employee.raiseEligible){
            employee.salary *= 1.1;
            employee.raiseEligible = false;
        }
    }
    return employeeDict;
}
console.log("Problem 5");
console.log(giveRaises(employees));

const wfhName = ["Anna", "Sam"];
for(const employee of employees.employees){
    if(wfhName.includes(employee.firstName)){
        employee.wfh = true;
    } else {
        employee.wfh = false;
    }
}
console.log("Problem 6");
console.log(employees);

