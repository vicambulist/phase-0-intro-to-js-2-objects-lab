// Write your solution in this file!
const employee = 
{name : "Tanya", 
streetaddress : "123 Test Drive"};


beforeEach(function () {
    for (const key in employee) {
      delete employee[key];
    }
  });



function updateEmployeeWithKeyAndValue(obj, key, value){
const newObj = {...employee};
newObj[key] = value;
return newObj;
}

const newEmployee = updateEmployeeWithKeyAndValue(
    employee, "name", "Pedro");



function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value){
obj[key] = value; 
return obj;
}


function deleteFromEmployeeByKey(employee, key) {
const empnew = {...employee};
delete empnew[key];
return empnew;}


function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];
  return employee;}

