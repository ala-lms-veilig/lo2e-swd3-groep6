document.addEventListener("DOMContentLoaded", function() {
    const ingelogdSection = document.getElementById('ingelogdSection');
    const loginSection = document.getElementById('loginSection');
    const isLoggedIn = localStorage.getItem('isLoggedIn');

    if (isLoggedIn === 'true') {
        ingelogdSection.style.display = 'block';
        loginSection.style.display = 'none';

        document.getElementById('logoutButton').addEventListener('click', function() {
            localStorage.removeItem('isLoggedIn');
            location.reload(); 
        });
    } else {
        ingelogdSection.style.display = 'none';
        loginSection.style.display = 'block';

        document.getElementById('loginForm').addEventListener('submit', function(event) {
            event.preventDefault();

            const gebruikersnaam = document.getElementById('gebruikersnaam').value;
            const wachtwoord = document.getElementById('wachtwoord').value;

            if (gebruikersnaam === 'admin' && wachtwoord === '1234') {
                localStorage.setItem('isLoggedIn', 'true');
                window.location.href = 'home.html';
            } else {
                alert('Onjuiste gebruikersnaam of wachtwoord!');
            }
        });
    }
});
