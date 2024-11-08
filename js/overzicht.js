document.addEventListener("DOMContentLoaded", async function() {
    let medewerkers = JSON.parse(localStorage.getItem('medewerkers'));


    if (!medewerkers) {
        const response = await fetch('https://my-json-server.typicode.com/ala-lms-veilig/lo2e-swd3-groep6/medewerkers');
        if (!response.ok) {
            console.error('Er ging iets mis bij het ophalen van de medewerkers:', response.statusText);
            return;
        }
        medewerkers = await response.json();
        localStorage.setItem('medewerkers', JSON.stringify(medewerkers));
    }

    displayMedewerkers(medewerkers);
});

function displayMedewerkers(medewerkers) {
    const lijst = document.getElementById('medewerkerLijst');
    lijst.innerHTML = '';

    medewerkers.forEach(medewerker => {
        const div = document.createElement('div');
        div.classList.add('medewerker');
        div.dataset.id = medewerker.id;

        const naam = medewerker.naam || medewerker.name;

        div.innerHTML = `
            <h2>${naam}</h2>
            <p>Verdieping: ${medewerker.verdieping}</p>
            <p>Lokaal: ${medewerker.lokaal}</p>
            <button class="editBtn" data-id="${medewerker.id}">Bewerk</button>
            <button class="deleteBtn" data-id="${medewerker.id}">Verwijder</button>
        `;
        lijst.appendChild(div);
    });

    voegEventListenersToe();
}

function voegEventListenersToe() {
    document.querySelectorAll(".editBtn").forEach(button => {
        button.addEventListener("click", async function(event) {
            const id = event.target.dataset.id;
            const nieuweNaam = prompt("Wat is de nieuwe naam voor deze medewerker?");
            const nieuweVerdieping = prompt("Nieuwe verdieping?");
            const nieuwLokaal = prompt("Nieuw lokaal?");

            const response = await fetch(`https://my-json-server.typicode.com/ala-lms-veilig/lo2e-swd3-groep6/medewerkers/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    naam: nieuweNaam,
                    verdieping: nieuweVerdieping,
                    lokaal: nieuwLokaal
                })
            });

            if (response.ok) {
                alert("De medewerker is bijgewerkt!");
                const updatedMedewerker = await response.json();


                let medewerkers = JSON.parse(localStorage.getItem('medewerkers'));
                medewerkers = medewerkers.map(medewerker => 
                    medewerker.id === updatedMedewerker.id ? updatedMedewerker : medewerker
                );
                localStorage.setItem('medewerkers', JSON.stringify(medewerkers));

                const medewerkerDiv = document.querySelector(`.medewerker[data-id='${id}']`);
                medewerkerDiv.querySelector('h2').textContent = updatedMedewerker.naam;
                medewerkerDiv.querySelector('p').textContent = `Verdieping: ${updatedMedewerker.verdieping}`;
                medewerkerDiv.querySelector('p:last-of-type').textContent = `Lokaal: ${updatedMedewerker.lokaal}`;
            } else {
                console.error('Er is iets misgegaan bij het bijwerken');
            }
        });
    });

    document.querySelectorAll(".deleteBtn").forEach(button => {
        button.addEventListener("click", async function(event) {
            const id = event.target.dataset.id;
            const medewerkerDiv = event.target.closest('.medewerker');

            const response = await fetch(`https://my-json-server.typicode.com/ala-lms-veilig/lo2e-swd3-groep6/medewerkers/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (response.ok) {
                alert("De medewerker is verwijderd!");
                medewerkerDiv.remove();

                let medewerkers = JSON.parse(localStorage.getItem('medewerkers'));
                medewerkers = medewerkers.filter(medewerker => medewerker.id !== parseInt(id));
                localStorage.setItem('medewerkers', JSON.stringify(medewerkers));
            } else {
                console.error('Er is iets misgegaan bij het verwijderen');
            }
        });
    });
}