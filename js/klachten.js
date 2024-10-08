async function loadComplaints() {
    try {
        // Load the klachten.json file
        const response = await fetch('json/klachten.json');
        const complaints = await response.json();

        // Get the table body for complaints
        const complaintsBody = document.getElementById('complaints-body');

        // Clear existing table rows
        complaintsBody.innerHTML = '';

        // Loop through each complaint and add a row to the table
        complaints.forEach(complaint => {
            const row = document.createElement('tr');

            // Create table cells for each field
            const nameCell = document.createElement('td');
            nameCell.textContent = complaint.naam;

            const roleCell = document.createElement('td');
            roleCell.textContent = complaint.role;

            const complaintCell = document.createElement('td');
            complaintCell.textContent = complaint.klacht;

            // Append cells to the row
            row.appendChild(nameCell);
            row.appendChild(roleCell);
            row.appendChild(complaintCell);

            // Append the row to the table body
            complaintsBody.appendChild(row);
        });
    } catch (error) {
        console.error('Error loading complaints:', error);
    }
}

// Call the function to load complaints when the page loads
$(document).ready(function () {
    loadComplaints();
});