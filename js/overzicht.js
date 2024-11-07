document.addEventListener("DOMContentLoaded", loadEmployees);

async function loadEmployees() {
    try {
        // Fetch data from Typicode API
        const response = await fetch('https://jsonplaceholder.typicode.com/users'); 
        if (!response.ok) throw new Error('Fout bij het ophalen van de gegevens.');

        const employees = await response.json();
        displayEmployees(employees);
    } catch (error) {
        console.error('Error loading employees:', error);
    }
}

function displayEmployees(employees) {
    const employeeList = document.getElementById('employeeList');
    employeeList.innerHTML = ''; // Clear any previous content

    employees.forEach(employee => {
        const employeeCard = document.createElement('div');
        employeeCard.classList.add('employee-card');

        const employeeName = document.createElement('div');
        employeeName.classList.add('employee-name');
        employeeName.textContent = employee.name;

        const employeeDetails = document.createElement('div');
        employeeDetails.classList.add('employee-details');
        employeeDetails.textContent = `Email: ${employee.email}, Address: ${employee.address.city}`;

        employeeCard.appendChild(employeeName);
        employeeCard.appendChild(employeeDetails);
        employeeList.appendChild(employeeCard);
    });
}
