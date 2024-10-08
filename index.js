
const herinnering = document.getElementById('herinnering');
const sluitKnop = document.getElementById('herinneringVerbergen');


function toonHerinnering() {
    herinnering.classList.remove('verborgen');
    setTimeout(() => {
    herinnering.classList.add('toon');
}, 100);  
}


sluitKnop.addEventListener('click', () => {
    herinnering.classList.remove('toon');
    setTimeout(() => {
    herinnering.classList.add('verborgen');
    }, 400);  
});

setInterval(toonHerinnering, 300000);
setTimeout(toonHerinnering, 10000);
