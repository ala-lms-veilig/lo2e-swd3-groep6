document.addEventListener("DOMContentLoaded", function() {
    const loginSection = document.getElementById('loginSection');
    const isLoggedIn = localStorage.getItem('isLoggedIn');

    if (isLoggedIn === 'true') {
        window.location.href = 'home.html';
    } else {
        loginSection.style.display = 'block';

        document.getElementById('loginForm').addEventListener('submit', function(event) {
            event.preventDefault();

            const gebruikersnaam = document.getElementById('gebruikersnaam').value;
            const wachtwoord = document.getElementById('wachtwoord').value;

            fetch('https://example.com/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ gebruikersnaam: gebruikersnaam, wachtwoord: wachtwoord })
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    localStorage.setItem('isLoggedIn', 'true');
                    window.location.href = 'home.html';
                } else {
                    alert('Onjuiste gebruikersnaam of wachtwoord!');
                }
            })
            .catch(error => {
                console.error('Er is een fout opgetreden:', error);
                alert('Er is een fout opgetreden. Probeer het later opnieuw.');
            });
        });
    }
});