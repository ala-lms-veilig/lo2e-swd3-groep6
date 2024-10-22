async function showTab(el) {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.remove('show');
        section.classList.add('hidden');
    });

    const element = document.getElementById(el);
    element.classList.remove('hidden');
    element.classList.add('show');
}