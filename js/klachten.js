function ShowKlachten() {
    
}

async function submitKnop(event) {
    const newKlacht = document.getElementById("klachtButton").value;

    const response = fetch(klachten.json, {
        method: "POST",
        body: JSON.stringify({
            title: newKlacht,
        }),
        headers: {
            'Content-type': 'applicataion/json; charset=UTF-8',
        },
     });

     const post = await response.json();

     const klachtInvul = document.getElementById()
}