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
        button.addEventListener("click", function(event) {
            const id = parseInt(event.target.dataset.id);
            const nieuweNaam = prompt("Wat is de nieuwe naam voor deze medewerker?");
            const nieuweVerdieping = prompt("Nieuwe verdieping?");
            const nieuwLokaal = prompt("Nieuw lokaal?");
            
            // Haal medewerkers uit localStorage
            let medewerkers = JSON.parse(localStorage.getItem('medewerkers'));
            
            // Zoek de medewerker op die we willen bewerken
            let medewerker = medewerkers.find(medewerker => medewerker.id === id);

            // Bewerk de medewerker-gegevens
            if (medewerker) {
                medewerker.naam = nieuweNaam || medewerker.naam;
                medewerker.verdieping = nieuweVerdieping || medewerker.verdieping;
                medewerker.lokaal = nieuwLokaal || medewerker.lokaal;

                // Log de actie in de console
                console.log(`Medewerker met ID ${id} wordt bijgewerkt (simulatie)`);
                console.log(`Nieuwe gegevens: Naam=${medewerker.naam}, Verdieping=${medewerker.verdieping}, Lokaal=${medewerker.lokaal}`);

                // Update localStorage
                localStorage.setItem('medewerkers', JSON.stringify(medewerkers));

                // Update de weergave op de pagina
                const medewerkerDiv = document.querySelector(`.medewerker[data-id='${id}']`);
                medewerkerDiv.querySelector('h2').textContent = medewerker.naam;
                medewerkerDiv.querySelector('p').textContent = `Verdieping: ${medewerker.verdieping}`;
                medewerkerDiv.querySelector('p:last-of-type').textContent = `Lokaal: ${medewerker.lokaal}`;

                alert("Medewerker is bijgewerkt (simulatie).");
            } else {
                console.error('Medewerker niet gevonden');
            }
        });
    });

    // Verwijder-functie blijft hetzelfde zoals eerder gedefinieerd
    document.querySelectorAll(".deleteBtn").forEach(button => {
        button.addEventListener("click", function(event) {
            const id = parseInt(event.target.dataset.id);
            const medewerkerDiv = event.target.closest('.medewerker');

            // Log de actie naar de console (in plaats van de server-aanroep)
            console.log(`Medewerker met ID ${id} wordt verwijderd (simulatie)`);

            // Verwijder medewerker uit de lokale opslag
            let medewerkers = JSON.parse(localStorage.getItem('medewerkers'));
            medewerkers = medewerkers.filter(medewerker => medewerker.id !== id);
            localStorage.setItem('medewerkers', JSON.stringify(medewerkers));

            // Verwijder het medewerker-div uit de DOM
            medewerkerDiv.remove();

            // Optioneel: melding voor de gebruiker
            alert("Medewerker is verwijderd (simulatie).");
        });
    });

    // Event listener voor "Add Medewerker" button
    document.getElementById("addMedewerkerBtn").addEventListener("click", function() {
        document.getElementById("addMedewerkerModal").style.display = "block";
    });

    // Event listener voor formulier indien toegevoegd via modal
    document.getElementById("addMedewerkerForm").addEventListener("submit", function(event) {
        event.preventDefault();
        addMedewerker();
    });

    // Sluiten van de modal
    document.querySelector(".close").addEventListener("click", function() {
        document.getElementById("addMedewerkerModal").style.display = "none";
    });
}
    

    // Add event listener to open the modal on "Add Medewerker" button click
    document.getElementById("addMedewerkerBtn").addEventListener("click", function() {
        document.getElementById("addMedewerkerModal").style.display = "block";
    });

    // Add event listener for the form submission
    document.getElementById("addMedewerkerForm").addEventListener("submit", function(event) {
        event.preventDefault();
        addMedewerker();
    });

    // Add event listener to close the modal
    document.querySelector(".close").addEventListener("click", function() {
        document.getElementById("addMedewerkerModal").style.display = "none";
    });


function addMedewerker() {
    const naam = document.getElementById("medewerkerNaam").value;
    const verdieping = document.getElementById("medewerkerVerdieping").value;
    const lokaal = document.getElementById("medewerkerLokaal").value;

    if (!naam || !verdieping || !lokaal) {
        alert("Alle velden zijn verplicht!");
        return;
    }

    // Uniek ID genereren zonder Date.now()
    let medewerkers = JSON.parse(localStorage.getItem('medewerkers')) || [];
    let newId;
    do {
        newId = Math.floor(Math.random() * 1000000); // Genereert een getal tussen 0 en 999999
    } while (medewerkers.some(medewerker => medewerker.id === newId));

    const newMedewerker = {
        id: newId,
        naam,
        verdieping,
        lokaal
    };

    // Voeg de nieuwe medewerker toe aan de lokale opslag en display
    medewerkers.push(newMedewerker);
    localStorage.setItem('medewerkers', JSON.stringify(medewerkers));

    // Update de weergegeven medewerkerslijst
    displayMedewerkers(medewerkers);

    // Sluit de modal
    document.getElementById("addMedewerkerModal").style.display = "none";

    // Reset het formulier
    document.getElementById("addMedewerkerForm").reset();
}
