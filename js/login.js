document.addEventListener("DOMContentLoaded", function() {
    const loginSection = document.getElementById('loginSection');
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));

    if (userInfo && userInfo.isLoggedIn) {
        window.location.href = 'home.html';
    } else {
        loginSection.style.display = 'block';

        document.getElementById('loginForm').addEventListener('submit', function(event) {
            event.preventDefault();

            const gebruikersnaam = document.getElementById('gebruikersnaam').value;
            const wachtwoord = document.getElementById('wachtwoord').value;

            if (gebruikersnaam === 'admin' && wachtwoord === '1234') {
          
                const userData = {
                    username: gebruikersnaam,
                    isLoggedIn: true
                };
                
                localStorage.setItem('userInfo', JSON.stringify(userData));
                
                window.location.href = 'home.html';
            } else {
                alert('Onjuiste gebruikersnaam of wachtwoord!');
            }
        });
    }
});
