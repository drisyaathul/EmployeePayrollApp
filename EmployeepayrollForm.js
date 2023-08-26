//UC8:Set Event Listener on Salary Range to display appropriate value.

const salary = document.querySelector('#salary'); //id
const output = document.querySelector('.salary-output'); //class
//output.textContent = salary.value;
salary.addEventListener('input', function() {
   output.textContent = salary.value;
});

window.addEventListener('DOMContentLoaded', () => {
    const name = document.querySelector('#name');
    const nameError = document.querySelector('.text-error');
    name.addEventListener('input', function() {
      if (name.value.length == 0) {
        nameError.textContent = '';
        return;
      }
      try {
        (new EmployeePayrollData()).name = name.value;
        nameError.textContent = '';
      } catch (e) {
        nameError.textContent = e;
      }
    });
  });