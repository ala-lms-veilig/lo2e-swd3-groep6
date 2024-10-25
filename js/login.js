document.addEventListener("DOMContentLoaded", function() {
    const loginSection = document.getElementById('loginSection');
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn === 'true') {
        window.location.href = 'home.html'; 
    } else {
        loginSection.style.display = 'block'; 
        const usersData = JSON.parse(document.getElementById('userData').textContent);

   
        document.getElementById('loginForm').addEventListener('submit', function(event) {
            event.preventDefault();

            const gebruikersnaam = document.getElementById('gebruikersnaam').value;
            const wachtwoord = document.getElementById('wachtwoord').value;

      
            const user = usersData.gebruikers.find(user => 
                user.gebruikersnaam === gebruikersnaam && user.wachtwoord === wachtwoord
            );

            if (user) {
                localStorage.setItem('isLoggedIn', 'true');
                window.location.href = 'home.html';
            } else {
                alert('Onjuiste gebruikersnaam of wachtwoord!');
            }
        });
    }
});