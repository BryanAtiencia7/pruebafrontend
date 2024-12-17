async function fetchUsers() {
    try {
        const response = await fetch('http://localhost:3000/users');
        const users = await response.json();

        const tableBody = document.getElementById('user-table').getElementsByTagName('tbody')[0];

        tableBody.innerHTML = '';

        users.forEach(user => {
            const row = document.createElement('tr');
            const cell1 = document.createElement('td');
            const cell2 = document.createElement('td');

            cell1.textContent = user.name;
            cell2.textContent = user.last_name;

            row.appendChild(cell1);
            row.appendChild(cell2);

            tableBody.appendChild(row);
        });
    } catch (error) {
        console.error('Error at get data:', error);
    }
}

window.onload = fetchUsers;

document.getElementById('refresh-button').addEventListener('click', () => {
    fetchUsers();
});