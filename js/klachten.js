async function showKlachten() {
        const response = await fetch('json/klachten.json');
        const data = await response.json();

        const template = document.getElementById("klachten-body");
        const klachtencontainer = document.getElementById("container-klachten")
        for (let klacht of data.klachten) {
            const clone = template.content.cloneNode(true);
            clone.querySelector("naam").textContent = klacht.naam;
            klachtencontainer.appendChild(clone);

        }
}
showKlachten();


