import slike from "./slike.js";

const btnStart = document.getElementById(`btnStart`);
const inputVreme = document.getElementById(`vreme`);
const playerName = document.getElementById(`ime`);
const radioEasy = document.getElementById(`easy`);
const radioMedium = document.getElementById(`medium`);
const radioHard = document.getElementById(`hard`);
const radioInsane = document.getElementById(`insane`);
const tabla = document.getElementById(`tabla`);
const alertDiv = document.getElementById(`alert`);
const btnYes = document.getElementById(`btnYes`);
const btnNo = document.getElementById(`btnNo`);
const ispisRezultata = document.getElementById(`ispisRezultata`);
const btnEasy = document.getElementById(`btnEasy`);
const btnMedium = document.getElementById(`btnMedium`);
const btnHard = document.getElementById(`btnHard`);
const btnInsane = document.getElementById(`btnInsane`);

let rezultatEasy = [];
let rezultatMedium = [];
let rezultatHard = [];
let rezultatInsane = [];
// EASY REZULTAT
btnEasy.addEventListener(`click`, e => {
    ispisRezultata.innerHTML = ``;
    btnEasy.classList.toggle(`obojen`);
    btnInsane.classList.remove(`obojen`);
    btnMedium.classList.remove(`obojen`);
    btnHard.classList.remove(`obojen`);
    if(localStorage.getItem(`easy`) == null) {
        localStorage.setItem(`easy`, JSON.stringify(rezultatEasy));     
    }
    else {
        rezultatEasy = JSON.parse(localStorage.getItem(`easy`));
        // NAJBOLJE VREME 
            for(let i = 0; i < rezultatEasy.length; i++) {
                for(let j = 0; j < rezultatEasy.length; j++) {
                    if(rezultatEasy[i].vreme < rezultatEasy[j].vreme) {
                        let treci = rezultatEasy[i];
                        rezultatEasy[i] = rezultatEasy[j];
                        rezultatEasy[j] = treci;
                    }
                }
            }
    
        let table = document.createElement(`table`);
        let row = document.createElement(`tr`);
        let pozicija = document.createElement(`td`); 
        pozicija.textContent = `Place`;
        let ime = document.createElement(`td`);
        ime.textContent = `Player Name`;
        let vreme = document.createElement(`td`);
        vreme.textContent = `Time`;
        row.append(pozicija, ime, vreme);
        table.appendChild(row);
        if(rezultatEasy.length <= 10) {
            for(let i = 0; i < rezultatEasy.length; i++) {
                let row = document.createElement(`tr`);
                let pozicija = document.createElement(`td`); 
                pozicija.textContent = i + 1;
                let ime = document.createElement(`td`);
                ime.textContent = rezultatEasy[i].ime;
                let vreme = document.createElement(`td`);
                vreme.textContent = rezultatEasy[i].vreme;
                row.append(pozicija, ime, vreme);
                table.appendChild(row);
            }
        }
        else {
            for(let i = 0; i < 10; i++) {
                let row = document.createElement(`tr`);
                let pozicija = document.createElement(`td`); 
                pozicija.textContent = i + 1;
                let ime = document.createElement(`td`);
                ime.textContent = rezultatEasy[i].ime;
                let vreme = document.createElement(`td`);
                vreme.textContent = rezultatEasy[i].vreme;
                row.append(pozicija, ime, vreme);
                table.appendChild(row);
            }
        }
        ispisRezultata.append(table);
        ispisRezultata.classList.toggle(`vidljiv`);
    }

});
// MEDIUM REZULTAT
btnMedium.addEventListener(`click`, e => {
    ispisRezultata.innerHTML = ``;
    btnMedium.classList.toggle(`obojen`);
    btnEasy.classList.remove(`obojen`);
    btnInsane.classList.remove(`obojen`);
    btnHard.classList.remove(`obojen`);
    if(localStorage.getItem(`medium`) == null) {
        localStorage.setItem(`medium`, JSON.stringify(rezultatMedium));     
    }
    else {
        rezultatMedium = JSON.parse(localStorage.getItem(`medium`));
        // NAJBOLJE VREME
            for(let i = 0; i < rezultatMedium.length; i++) {
                for(let j = 0; j < rezultatMedium.length; j++) {
                    if(rezultatMedium[i].vreme < rezultatMedium[j].vreme) {
                        let treci = rezultatMedium[i];
                        rezultatMedium[i] = rezultatMedium[j];
                        rezultatMedium[j] = treci;
                    }
                }
            }
        let table = document.createElement(`table`);
        let row = document.createElement(`tr`);
        let pozicija = document.createElement(`td`); 
        pozicija.textContent = `Place`;
        let ime = document.createElement(`td`);
        ime.textContent = `Player Name`;
        let vreme = document.createElement(`td`);
        vreme.textContent = `Time`;
        row.append(pozicija, ime, vreme);
        table.appendChild(row);
        if(rezultatMedium.length <= 10) {
            for(let i = 0; i < rezultatMedium.length; i++) {
                let row = document.createElement(`tr`);
                let pozicija = document.createElement(`td`); 
                pozicija.textContent = i + 1;
                let ime = document.createElement(`td`);
                ime.textContent = rezultatMedium[i].ime;
                let vreme = document.createElement(`td`);
                vreme.textContent = rezultatMedium[i].vreme;
                row.append(pozicija, ime, vreme);
                table.appendChild(row);
            }
        }
        else {
            for(let i = 0; i < 10; i++) {
                let row = document.createElement(`tr`);
                let pozicija = document.createElement(`td`); 
                pozicija.textContent = i + 1;
                let ime = document.createElement(`td`);
                ime.textContent = rezultatMedium[i].ime;
                let vreme = document.createElement(`td`);
                vreme.textContent = rezultatMedium[i].vreme;
                row.append(pozicija, ime, vreme);
                table.appendChild(row);
            }
        }
        ispisRezultata.append(table);
        ispisRezultata.classList.toggle(`vidljiv`);
    }
});
// HARD REZULTAT
btnHard.addEventListener(`click`, e => {
    ispisRezultata.innerHTML = ``;
    btnHard.classList.toggle(`obojen`);
    btnEasy.classList.remove(`obojen`);
    btnMedium.classList.remove(`obojen`);
    btnInsane.classList.remove(`obojen`);
    if(localStorage.getItem(`hard`) == null) {
        localStorage.setItem(`hard`, JSON.stringify(rezultatHard));     
    }
    else {
        rezultatHard = JSON.parse(localStorage.getItem(`hard`));
        // NAJBOLJE VREME
            for(let i = 0; i < rezultatHard.length; i++) {
                for(let j = 0; j < rezultatHard.length; j++) {
                    if(rezultatHard[i].vreme < rezultatHard[j].vreme) {
                        let treci = rezultatHard[i];
                        rezultatHard[i] = rezultatHard[j];
                        rezultatHard[j] = treci;
                    }
                }
            }
    
        let table = document.createElement(`table`);
        let row = document.createElement(`tr`);
        let pozicija = document.createElement(`td`); 
        pozicija.textContent = `Place`;
        let ime = document.createElement(`td`);
        ime.textContent = `Player Name`;
        let vreme = document.createElement(`td`);
        vreme.textContent = `Time`;
        row.append(pozicija, ime, vreme);
        table.appendChild(row);
        if(rezultatHard.length <= 10) {
            for(let i = 0; i < rezultatHard.length; i++) {
                let row = document.createElement(`tr`);
                let pozicija = document.createElement(`td`); 
                pozicija.textContent = i + 1;
                let ime = document.createElement(`td`);
                ime.textContent = rezultatHard[i].ime;
                let vreme = document.createElement(`td`);
                vreme.textContent = rezultatHard[i].vreme;
                row.append(pozicija, ime, vreme);
                table.appendChild(row);
            }
        }
        else {
            for(let i = 0; i < 10; i++) {
                let row = document.createElement(`tr`);
                let pozicija = document.createElement(`td`); 
                pozicija.textContent = i + 1;
                let ime = document.createElement(`td`);
                ime.textContent = rezultatHard[i].ime;
                let vreme = document.createElement(`td`);
                vreme.textContent = rezultatHard[i].vreme;
                row.append(pozicija, ime, vreme);
                table.appendChild(row);
            }
        }
        ispisRezultata.append(table);
        ispisRezultata.classList.toggle(`vidljiv`);
    }
});
// INSANE REZULTAT
btnInsane.addEventListener(`click`, e => {
    ispisRezultata.innerHTML = ``;
    btnEasy.classList.remove(`obojen`);
    btnMedium.classList.remove(`obojen`);
    btnHard.classList.remove(`obojen`);
    btnInsane.classList.toggle(`obojen`);
    if(localStorage.getItem(`insane`) == null) {
        localStorage.setItem(`insane`, JSON.stringify(rezultatInsane));     
    }
    else {
        rezultatInsane = JSON.parse(localStorage.getItem(`insane`));
        // NAJBOLJE VREME
            for(let i = 0; i < rezultatInsane.length; i++) {
                for(let j = 0; j < rezultatInsane.length; j++) {
                    if(rezultatInsane[i].vreme < rezultatInsane[j].vreme) {
                        let treci = rezultatInsane[i];
                        rezultatInsane[i] = rezultatInsane[j];
                        rezultatInsane[j] = treci;
                    }
                }
            }
    
        let table = document.createElement(`table`);
        let row = document.createElement(`tr`);
        let pozicija = document.createElement(`td`); 
        pozicija.textContent = `Place`;
        let ime = document.createElement(`td`);
        ime.textContent = `Player Name`;
        let vreme = document.createElement(`td`);
        vreme.textContent = `Time`;
        row.append(pozicija, ime, vreme);
        table.appendChild(row);
        if(rezultatInsane.length <= 10) {
            for(let i = 0; i < rezultatInsane.length; i++) {
                let row = document.createElement(`tr`);
                let pozicija = document.createElement(`td`); 
                pozicija.textContent = i + 1;
                let ime = document.createElement(`td`);
                ime.textContent = rezultatInsane[i].ime;
                let vreme = document.createElement(`td`);
                vreme.textContent = rezultatInsane[i].vreme;
                row.append(pozicija, ime, vreme);
                table.appendChild(row);
            }
        }
        else {
            for(let i = 0; i < 10; i++) {
                let row = document.createElement(`tr`);
                let pozicija = document.createElement(`td`); 
                pozicija.textContent = i + 1;
                let ime = document.createElement(`td`);
                ime.textContent = rezultatInsane[i].ime;
                let vreme = document.createElement(`td`);
                vreme.textContent = rezultatInsane[i].vreme;
                row.append(pozicija, ime, vreme);
                table.appendChild(row);
            }
        }
        ispisRezultata.append(table);
        ispisRezultata.classList.toggle(`vidljiv`);
    }
});

// BTN YES
btnYes.addEventListener(`click`, (e) => {
    alertDiv.style.display = `none`;
    cardOne = undefined;
    cardTwo = undefined;
    clearInterval(pomocnaTimer);
    inputVreme.value = 0;
    tabla.innerHTML = ``;
    if(playerName.value == ``) {
        alert(`Please enter player name to continue.`)
    }
    else {
        let slikeEasy = [];
        let slikeMedium = [];
        let slikeHard = [];
        let slikeInsane = [];

        pomocnaTimer = setInterval(function() {
            inputVreme.value++;
        }, 1000)

        // mesanje niza
        for (let i = slike.length - 1; i > 0; i--) { // mesanje niza
            const j = Math.floor(Math.random() * (i + 1));
            const temp = slike[i];
            slike[i] = slike[j];
            slike[j] = temp;
        }
        //  EASY
        if(radioEasy.checked) {
            for(let i = 0; i < 8; i++) {
                slikeEasy.push(slike[i]);
            }
            for(let i = 0; i < 8; i++) {
                slikeEasy.push(slikeEasy[i]);
            }
            for (let i = slikeEasy.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                const temp = slikeEasy[i];
                slikeEasy[i] = slikeEasy[j];
                slikeEasy[j] = temp;
            }
            for(let i = 0; i < slikeEasy.length; i++) {
                if(i % 4 == 0) {
                    var red = document.createElement(`div`);
                    red.id = i / 4;
                }
                let slika = document.createElement(`img`);
                slika.src = `/Slike/BG.jpg`;
                slika.id = slikeEasy[i].id;
                slika.check = false;
                red.append(slika);
                tabla.append(red);
            }
        }
        // MEDIUM
        if(radioMedium.checked) {
            for(let i = 0; i < 18; i++) {
                slikeMedium.push(slike[i]);
            }
            for(let i = 0; i < 18; i++) {
                slikeMedium.push(slikeMedium[i]);
            }
            for (let i = slikeMedium.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                const temp = slikeMedium[i];
                slikeMedium[i] = slikeMedium[j];
                slikeMedium[j] = temp;
            }
            for(let i = 0; i < slikeMedium.length; i++) {
                if(i % 6 == 0) {
                    var red = document.createElement(`div`);
                    red.id = i / 6;
                }
                let slika = document.createElement(`img`);
                slika.src = `Slike/BG.jpg`;
                slika.id = slikeMedium[i].id;
                slika.check = false;
                red.append(slika);
                tabla.append(red);
            }
        }
        // HARD
        if(radioHard.checked) {
            for(let i = 0; i < 32; i++) {
                slikeHard.push(slike[i]);
            }
            for(let i = 0; i < 32; i++) {
                slikeHard.push(slikeHard[i]);
            }
            for (let i = slikeHard.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                const temp = slikeHard[i];
                slikeHard[i] = slikeHard[j];
                slikeHard[j] = temp;
            }
            for(let i = 0; i < slikeHard.length; i++) {
                if(i % 8 == 0) {
                    var red = document.createElement(`div`);
                    red.id = i / 8;
                }
                let slika = document.createElement(`img`);
                slika.src = `Slike/BG.jpg`;
                slika.id = slikeHard[i].id;
                slika.check = false;
                red.append(slika);
                tabla.append(red);
            }
        }
        // INSANE
        if(radioInsane.checked) {
            for(let i = 0; i < 50; i++) {
                slikeInsane.push(slike[i]);
            }
            for(let i = 0; i < 50; i++) {
                slikeInsane.push(slikeInsane[i]);
            }
            for (let i = slikeInsane.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                const temp = slikeInsane[i];
                slikeInsane[i] = slikeInsane[j];
                slikeInsane[j] = temp;
            }
            for(let i = 0; i < slikeInsane.length; i++) {
                if(i % 10 == 0) {
                    var red = document.createElement(`div`);
                    red.id = i / 10;
                }
                let slika = document.createElement(`img`);
                slika.src = `Slike/BG.jpg`;
                slika.id = slikeInsane[i].id;
                slika.check = false;
                red.append(slika);
                tabla.append(red);
            }
        }
    }
})
// BTN NO
btnNo.addEventListener(`click`, (e) => {
    alertDiv.style.display = `none`;
});

// START
let pomocnaTimer = null;
btnStart.addEventListener(`click`, (e) => {
    cardOne = undefined;
    cardTwo = undefined;
    clearInterval(pomocnaTimer);
    inputVreme.value = 0;
    tabla.innerHTML = ``;
    if(playerName.value == ``) {
        alert(`Please enter player name to continue.`);
    }
    else {
        let slikeEasy = [];
        let slikeMedium = [];
        let slikeHard = [];
        let slikeInsane = [];

        pomocnaTimer = setInterval(function() {
            inputVreme.value++;
        }, 1000)

        // mesanje niza
        for (let i = slike.length - 1; i > 0; i--) { // mesanje niza
            const j = Math.floor(Math.random() * (i + 1));
            const temp = slike[i];
            slike[i] = slike[j];
            slike[j] = temp;
        }
        //  EASY
        if(radioEasy.checked) {
            for(let i = 0; i < 8; i++) {
                slikeEasy.push(slike[i]);
            }
            for(let i = 0; i < 8; i++) {
                slikeEasy.push(slikeEasy[i]);
            }
            for (let i = slikeEasy.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                const temp = slikeEasy[i];
                slikeEasy[i] = slikeEasy[j];
                slikeEasy[j] = temp;
            }
            for(let i = 0; i < slikeEasy.length; i++) {
                if(i % 4 == 0) {
                    var red = document.createElement(`div`);
                    red.id = i / 4;
                }
                let slika = document.createElement(`img`);
                slika.src = `Slike/BG.jpg`;
                slika.id = slikeEasy[i].id;
                slika.check = false;
                red.append(slika);
                tabla.append(red);
            }
        }
        // MEDIUM
        if(radioMedium.checked) {
            for(let i = 0; i < 18; i++) {
                slikeMedium.push(slike[i]);
            }
            for(let i = 0; i < 18; i++) {
                slikeMedium.push(slikeMedium[i]);
            }
            for (let i = slikeMedium.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                const temp = slikeMedium[i];
                slikeMedium[i] = slikeMedium[j];
                slikeMedium[j] = temp;
            }
            for(let i = 0; i < slikeMedium.length; i++) {
                if(i % 6 == 0) {
                    var red = document.createElement(`div`);
                    red.id = i / 6;
                }
                let slika = document.createElement(`img`);
                slika.src = `Slike/BG.jpg`;
                slika.id = slikeMedium[i].id;
                slika.check = false;
                red.append(slika);
                tabla.append(red);
            }
        }
        // HARD
        if(radioHard.checked) {
            for(let i = 0; i < 32; i++) {
                slikeHard.push(slike[i]);
            }
            for(let i = 0; i < 32; i++) {
                slikeHard.push(slikeHard[i]);
            }
            for (let i = slikeHard.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                const temp = slikeHard[i];
                slikeHard[i] = slikeHard[j];
                slikeHard[j] = temp;
            }
            for(let i = 0; i < slikeHard.length; i++) {
                if(i % 8 == 0) {
                    var red = document.createElement(`div`);
                    red.id = i / 8;
                }
                let slika = document.createElement(`img`);
                slika.src = `Slike/BG.jpg`;
                slika.id = slikeHard[i].id;
                slika.check = false;
                red.append(slika);
                tabla.append(red);
            }
        }
        // INSANE
        if(radioInsane.checked) {
            for(let i = 0; i < 50; i++) {
                slikeInsane.push(slike[i]);
            }
            for(let i = 0; i < 50; i++) {
                slikeInsane.push(slikeInsane[i]);
            }
            for (let i = slikeInsane.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                const temp = slikeInsane[i];
                slikeInsane[i] = slikeInsane[j];
                slikeInsane[j] = temp;
            }
            for(let i = 0; i < slikeInsane.length; i++) {
                if(i % 10 == 0) {
                    var red = document.createElement(`div`);
                    red.id = i / 10;
                }
                let slika = document.createElement(`img`);
                slika.src = `Slike/BG.jpg`;
                slika.id = slikeInsane[i].id;
                slika.check = false;
                red.append(slika);
                tabla.append(red);
            }
        }
    }
});

// prevent player from using input:number
inputVreme.addEventListener(`keydown`, function(evt) {
    if(/^\d$/.test(evt.key)) {
        evt.preventDefault();
    }
});

// MEHANIZAM
let cardOne, cardTwo;
let br = 0;
tabla.addEventListener(`click`, e => {
    if(e.target.tagName === `IMG`) {
        if(!cardOne && !cardTwo) {
            e.target.src = slike[e.target.id - 1].url;
            cardOne = e.target;
            cardOne.style.pointerEvents = "none";
        }
        else if(cardOne && !cardTwo) {
            e.target.src = slike[e.target.id - 1].url;
            cardTwo = e.target;
            if(cardOne.id == cardTwo.id) {
                br++;
                cardOne.style.pointerEvents = "none";
                cardTwo.style.pointerEvents = "none";
                cardOne = undefined;
                cardTwo = undefined;
                if(radioEasy.checked && br === 8) {
                    e.target.src = slike[e.target.id - 1].url;
                    br = 0;
                    clearTimeout(pomocnaTimer);
                    alertDiv.style.display = `flex`;
                    let igrac = {
                        ime: playerName.value,
                        vreme: inputVreme.value
                    }
                    rezultatEasy.push(igrac);
                    localStorage.setItem(`easy`, JSON.stringify(rezultatEasy));     
                }
                if(radioMedium.checked && br === 18) {
                    e.target.src = slike[e.target.id - 1].url;
                    br = 0;
                    clearTimeout(pomocnaTimer);
                    let igrac = {
                        ime: playerName.value,
                        vreme: inputVreme.value
                    }
                    rezultatMedium.push(igrac);
                    localStorage.setItem(`medium`, JSON.stringify(rezultatMedium));  
                }
                if(radioHard.checked && br === 32) {
                    e.target.src = slike[e.target.id - 1].url;
                    br = 0;
                    clearTimeout(pomocnaTimer);
                    let igrac = {
                        ime: playerName.value,
                        vreme: inputVreme.value
                    }
                    rezultatHard.push(igrac);
                    localStorage.setItem(`hard`, JSON.stringify(rezultatHard));  
                }
                if(radioInsane.checked && br === 50) {
                    e.target.src = slike[e.target.id - 1].url;
                    br = 0;
                    clearTimeout(pomocnaTimer);
                    let igrac = {
                        ime: playerName.value,
                        vreme: inputVreme.value
                    }
                    rezultatInsane.push(igrac);
                    localStorage.setItem(`insane`, JSON.stringify(rezultatInsane));  
                }
            }
            else {
                setTimeout(function() {
                    cardOne.src = (`Slike/BG.jpg`);
                    cardTwo.src = (`Slike/BG.jpg`);
                    cardOne.style.pointerEvents = "auto";
                    cardOne = undefined;
                    cardTwo = undefined;
                }, 1000)
            }
        }
    }
});


