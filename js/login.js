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

            if (gebruikersnaam === 'admin' && wachtwoord === '1234') {
                localStorage.setItem('isLoggedIn', 'true');
                window.location.href = 'home.html';
            } else {
                alert('Oonjuiste gebruikersnaam of wachtwoord!');
            }
        });
    }
});
