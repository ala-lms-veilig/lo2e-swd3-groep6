async function showKlachten() {
        const response = await fetch('json/klachten.json');
        const data = await response.json();

        const template = document.getElementById("klachten-template");
        const klachtenContainer = document.getElementById("container-klachten");

        for (let klacht of data.klachten) {
            const clone = template.content.cloneNode(true);

            clone.querySelector(".naam").textContent = klacht.naam;
            clone.querySelector(".werk_rol").textContent = klacht.werk_rol;
            clone.querySelector(".klacht").textContent = klacht.klacht;

            klachtenContainer.appendChild(clone);
        }
    } 

showKlachten();



