//UC8:Set Event Listener on Salary Range to display appropriate value.

const salary = document.querySelector('#salary'); //id
const output = document.querySelector('.salary-output'); //class
//output.textContent = salary.value;
salary.addEventListener('input', function() {
   output.textContent = salary.value;
});