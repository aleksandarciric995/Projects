let btnSubmit = document.getElementById(`btnSubmit`);
let btnReset = document.getElementById(`btnReset`);


btnSubmit.addEventListener(`click`, (e) => {
    e.preventDefault();
    // reset 
    document.getElementById(`ispisUkupnaCena`).innerHTML = ``;
    document.getElementById(`cenaBezPopusta`).innerHTML = ``;
    document.getElementById(`cenaSaPopustom`).innerHTML = ``;
    document.getElementById(`ispisRuza`).innerHTML = ``;
    document.getElementById(`ispisLjiljana`).innerHTML = ``;
    document.getElementById(`ispisGerbera`).innerHTML = ``;
    document.getElementById(`ispisBombonjera`).innerHTML = ``;
    document.getElementById(`ispisCokolada`).innerHTML = ``;
    document.getElementById(`ispisSampanjac`).innerHTML = ``;
    // provera cveca
    let ruzeValue = Number(document.getElementById(`ruze`).value * 150);
    let ljiljaniValue = Number(document.getElementById(`ljiljani`).value * 120);
    let gerberiValue = Number(document.getElementById(`gerberi`).value * 70);
    //provera poklona
    let bombonjera = 0;
    let cokolada = 0;
    let sampanjac = 0;
    if(document.getElementById(`bombonjera`).checked) {
        bombonjera = 500;
        document.getElementById(`ispisBombonjera`).innerHTML = `<span>+ bombonjera</span>`;
    }
    if(document.getElementById(`cokolada`).checked) {
        cokolada = 500;
        document.getElementById(`ispisCokolada`).innerHTML = `<span>+ čokolada</span>`;
    }
    if(document.getElementById(`sampanjac`).checked) {
        sampanjac = 500;
        document.getElementById(`ispisSampanjac`).innerHTML = `<span>+ šampanjac</span>`;
    }
    // racunanje ukupne cene
    let ukupno = ruzeValue + ljiljaniValue + gerberiValue + bombonjera + cokolada + sampanjac;
    let ukupnoSaPopustom = ukupno;

    // ispis slika i cena
    for(let i = 0; i < Number(document.getElementById(`ruze`).value); i++) {
        document.getElementById(`ispisRuza`).innerHTML += `<img src="Slike/Ruza.png" alt="Ruza" class="slikaCveta">`;
    }
    
    for(let i = 0; i < Number(document.getElementById(`ljiljani`).value); i++) {
        document.getElementById(`ispisLjiljana`).innerHTML += `<img src="Slike/Ljiljan.png" alt="Ljiljan" class="slikaCveta">`;
    }
    for(let i = 0; i < Number(document.getElementById(`gerberi`).value); i++) {
        document.getElementById(`ispisGerbera`).innerHTML += `<img src="Slike/Gerber.png" alt="Gerber" class="slikaCveta">`;
    }
    // provera nacina placanja    
    if((document.getElementById(`kartica`).checked) && ukupno > 2000) {
        ukupnoSaPopustom = ukupno * 0.9;
    }
    if(document.getElementById(`kartica`).checked) {
        
        document.getElementById(`cenaBezPopusta`).innerHTML = `<h3>Cena bez popusta je: ${ukupno} din</h3>`;
        document.getElementById(`cenaSaPopustom`).innerHTML = `<h2>Cena sa popustom je: <u>${ukupnoSaPopustom}</u> din</h2>`;
    }
    else if (document.getElementById(`kes`).checked) {
        document.getElementById(`ispisUkupnaCena`).innerHTML = `<h2>Ukupna cena je: <u>${ukupno}</u> din</h2>`;
    }
    else {
        alert(`Molimo izaberite način plaćanja.`);
        document.getElementById(`ispisUkupnaCena`).innerHTML = ``;
        document.getElementById(`cenaBezPopusta`).innerHTML = ``;
        document.getElementById(`cenaSaPopustom`).innerHTML = ``;
        document.getElementById(`ispisRuza`).innerHTML = ``;
        document.getElementById(`ispisLjiljana`).innerHTML = ``;
        document.getElementById(`ispisGerbera`).innerHTML = ``;
        document.getElementById(`ispisBombonjera`).innerHTML = ``;
        document.getElementById(`ispisCokolada`).innerHTML = ``;
        document.getElementById(`ispisSampanjac`).innerHTML = ``;
    }
});

btnReset.addEventListener(`click`, () => {
    document.getElementById(`ispisRuza`).innerHTML = ``;
    document.getElementById(`ispisLjiljana`).innerHTML = ``;
    document.getElementById(`ispisGerbera`).innerHTML = ``;
    document.getElementById(`cenaBezPopusta`).innerHTML = ``;
    document.getElementById(`cenaSaPopustom`).innerHTML = ``;
    document.getElementById(`ispisBombonjera`).innerHTML = ``;
    document.getElementById(`ispisCokolada`).innerHTML = ``;
    document.getElementById(`ispisSampanjac`).innerHTML = ``;
    document.getElementById(`ispisUkupnaCena`).innerHTML = ``;
    document.getElementById(`cenaSaPopustom`).innerHTML = ``;
    document.getElementById(`cenaBezPopusta`).innerHTML = ``;
});