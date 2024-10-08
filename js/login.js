document.addEventListener("DOMContentLoaded", function() {
    const contentDiv = document.getElementById('content');
    const isLoggedIn = localStorage.getItem('isLoggedIn');

    if (isLoggedIn === 'true') {
        contentDiv.innerHTML = `
           <article class="ingelogdmelding">
            <h2>Welkom!</h2>
            <p>Je bent ingelogd.</p>
            <button id="logoutButton">Uitloggen</button>
           </article>
        `;
        
        document.getElementById('logoutButton').addEventListener('click', function() {
            localStorage.removeItem('isLoggedIn');
            location.reload(); 
        });
    } else {
        contentDiv.innerHTML = `
            <article class="formlogin"> 
                <form id="loginForm">
                    <h2>Inloggen</h2>
                    Gebruikersnaam:<br>
                    <input type='text' class="logininput" name='gebruikersnaam' id="gebruikersnaam"><br><br>
                    Wachtwoord:<br>
                    <input type='password' class="logininput" name='wachtwoord' id="wachtwoord"><br><br>
                    <input type='submit' class="loginsubmit" value='Inloggen'>
                </form>
            </article>
        `;
        
        document.getElementById('loginForm').addEventListener('submit', function(event) {
            event.preventDefault(); 
            
            const gebruikersnaam = document.getElementById('gebruikersnaam').value;
            const wachtwoord = document.getElementById('wachtwoord').value;

            if (gebruikersnaam === 'admin' && wachtwoord === '1234') {
                localStorage.setItem('isLoggedIn', 'true');
                location.reload(); 
            } else {
                alert('Onjuiste gebruikersnaam of wachtwoord!');
            }
        });
    }
});