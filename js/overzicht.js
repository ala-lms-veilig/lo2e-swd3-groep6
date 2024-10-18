async function showWerknemers() {
    const response = await fetch("./json/klachten.json");
    const data = await response.json();
 
 
    const werknemerContainer = document.getElementById("werknemers-body");
    for (const werknemer of data.werknemers) {
        werknemerContainer.innerHTML += `<td>${werknemer.firstName}</td><td>${werknemer.lastName}</td><td>${werknemer.Status}</td><td>${werknemer.Tijd}</td><td>${werknemer.Lokaal}</td>`;
    }
}
showWerknemers();

