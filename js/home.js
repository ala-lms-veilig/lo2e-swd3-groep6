fetch('js/home.json')
    .then(response => response.json())
    .then(data => {
  
        document.getElementById('statusLink').textContent = data.header.status;
        document.getElementById('meldingenLink').textContent = data.header.meldingen;
        document.getElementById('contactLink').textContent = data.header.contact;

   
        document.getElementById('heroTitle').textContent = data.hero.title;
        document.getElementById('heroSubtitle').textContent = data.hero.subtitle;
        document.getElementById('heroButton').textContent = data.hero.button;

       
        document.getElementById('ctaTitle1').textContent = data.ctaSection.boxes[0].title;
        document.getElementById('ctaButton1').textContent = data.ctaSection.boxes[0].button;
        document.getElementById('ctaTitle2').textContent = data.ctaSection.boxes[1].title;
        document.getElementById('ctaButton2').textContent = data.ctaSection.boxes[1].button;
        document.getElementById('ctaTitle3').textContent = data.ctaSection.boxes[2].title;
        document.getElementById('ctaButton3').textContent = data.ctaSection.boxes[2].button;
    })
    .catch(error => console.error('Fout bij het ophalen van de JSON:', error));