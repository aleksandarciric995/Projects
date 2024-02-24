//  UVODNI JS
let pitanje1 = {
    tekst: `<h3>Koji je glavni grad Srbije?</h3>`,
    odgovori: [`Beograd`, `Pančevo`, `Subotica`, `Niš`],
    indexTacnogOdgovora: 0
}

let pitanje2 = {
    tekst: `<h3>Koji je glavni grad Bugarske?</h3>`,
    odgovori: [`Plovdiv`, `Sofija`, `Varna`, `Burgas`],
    indexTacnogOdgovora: 1
}

let pitanje3 = {
    tekst: `<h3>Koji je glavni grad Rumunije?</h3>`,
    odgovori: [`Temišvar`, `Brašov`, `Bukurešt`, `Konstanca`],
    indexTacnogOdgovora: 2
}

let pitanje4 = {
    tekst: `<h3>Koji je glavni grad Mađarske?</h3>`,
    odgovori: [`Pečuj`, `Segedin`, `Šopron`, `Budimpešta`],
    indexTacnogOdgovora: 3
}

let pitanje5 = {
    tekst: `<h3>Koji je glavni grad Hrvatske?</h3>`,
    odgovori: [`Rovinj`, `Zagreb`, `Dubrovnik`, `Rijeka`],
    indexTacnogOdgovora: 1
}

let pitanje6 = {
    tekst: `<h3>Koji je glavni grad Bosne i Hercegovine?</h3>`,
    odgovori: [`Sarajevo`, `Trebinje`, `Tuzla`, `Bihać`],
    indexTacnogOdgovora: 0
}

let pitanje7 = {
    tekst: `<h3>Koji je glavni grad Crne Gore?</h3>`,
    odgovori: [`Bar`, `Budva`, `Pljevlja`, `Podgorica`],
    indexTacnogOdgovora: 3
}

let pitanje8 = {
    tekst: `<h3>Koji je glavni grad Albanije?</h3>`,
    odgovori: [`Tirana`, `Drač`, `Valona`, `Lušnje`],
    indexTacnogOdgovora: 0
}

let pitanje9 = {
    tekst: `<h3>Koji je glavni grad Makedonije?</h3>`,
    odgovori: [`Bitolj`, `Tetovo`, `Kumanovo`, `Skoplje`],
    indexTacnogOdgovora: 3
}

let pitanje10 = {
    tekst: `<h3>Koji je glavni grad Grčke?</h3>`,
    odgovori: [`Atina`, `Solun`, `Janjina`, `Patras`],
    indexTacnogOdgovora: 0
}

let pitanja = [pitanje1, pitanje2, pitanje3, pitanje4, pitanje5, pitanje6, pitanje7, pitanje8, pitanje9, pitanje10];

let btnPosalji = document.getElementById(`btnPosalji`);
let btnNovaPitanja = document.getElementById(`btnNovaPitanja`);
let divPrvoPitanje = document.getElementById(`prvoPitanje`);
let divDrugoPitanje = document.getElementById(`drugoPitanje`);
let divTrecePitanje = document.getElementById(`trecePitanje`);
let divCetvrtoPitanje = document.getElementById(`cetvrtoPitanje`);
let divPetoPitanje = document.getElementById(`petoPitanje`);
let sekcija = document.getElementById(`sekcija`);
let divPitanja = document.getElementById(`pitanja`);
let divOdgovori = document.getElementById(`ispisOdgovora`);

// AKCIJA
btnNovaPitanja.addEventListener(`click`, () => {
    divOdgovori.innerHTML = ``; //ciscenje odgovora
    for (let i = pitanja.length - 1; i > 0; i--) { // mesanje niza
        const j = Math.floor(Math.random() * (i + 1));
        const temp = pitanja[i];
        pitanja[i] = pitanja[j];
        pitanja[j] = temp;
    }
    divPitanja.innerHTML = ``; // da ne bi pravio vise od 5 pitanja
    // GENERISANJE i ISPIS PITANJA
    for(let i = 0; i < 5; i++) {
        let pomocnaPromenljivaZaInpute = ``;
        let brojac = 0;
        pitanja[i].odgovori.forEach(o => {
            if(brojac == 0) {
                pomocnaPromenljivaZaInpute += `<input type="radio" name="pitanje${i}" id="pitanje${i}id${brojac}" checked value ="${brojac}"> <label for="pitanje${i}id${brojac}">${o}</label><br>`;
                brojac++;
            }
            else {
                pomocnaPromenljivaZaInpute += `<input type="radio" name="pitanje${i}" id="pitanje${i}id${brojac}" value ="${brojac}"> <label for="pitanje${i}id${brojac}">${o}</label><br>`;
                brojac++;
            }
        })
        divPitanja.innerHTML += `<div id="div${i}">${pitanja[i].tekst} ${pomocnaPromenljivaZaInpute} </div>`;
    }
    // lagani skroll na vrh
    document.body.scrollIntoView({ behavior: "smooth", block: "start" });
});

// POSALJI
btnPosalji.addEventListener(`click`, (e) => {
    // disable inputs
    document.querySelectorAll(`input`).forEach(i => {
        i.disabled = true;
    })
    // ispis odgovora
    let pomocnaPromenljivaZaIspis = ``;
    document.querySelectorAll(`input:checked`).forEach((i, j) => {
        if(i.value == pitanja[j].indexTacnogOdgovora) {
            pomocnaPromenljivaZaIspis += `<p class="tacno">Odgovor na pitanje broj ${j + 1} je <b>tačan.</b></p>`;
        }
        else 
         {
            pomocnaPromenljivaZaIspis += `<p class="netacno">Odgovor na pitanje broj ${j + 1} je <b>netačan.</b></p>`;
         }
    });
    divOdgovori.innerHTML = pomocnaPromenljivaZaIspis;
    // lagani skrol na dno
    document.body.scrollIntoView({ behavior: "smooth", block: "end" });
});
