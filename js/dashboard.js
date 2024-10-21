async function showTab(el) {
    let sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.remove('show');
        section.classList.add('hidden');
    });

    let element = document.getElementById(el);
    element.classList.remove('hidden');
    element.classList.add('show');
}