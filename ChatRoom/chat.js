let date = new Date();

class Chatroom {
    constructor(room, user) {
        this.room = room;
        this.username = user;
        this.chats = db.collection(`chats`);
        this.unsub = false;
    }

    // seteri
    set room(r) {
        this._room = r;
        if(this.unsub) {
            this.unsub();
        }
    } 

    set username(u) {
        if(u.length >= 2 && u.length <= 10 && u.trim() != ''){
            this._username = u;
        } else {
            alert(`Duzina korisnickog imena mora da bude izmedju 2 i 10 karaktera`);
        }
        if(this.unsub) {
            this.unsub();
        }
    }

    // geteri
    get room() {
        return this._room;
    }

    get username() {
        return this._username;
    }

    // Metod za dodavanje cetova
    addChat = (msg) => {
        this.chats.doc()
        .set({
            message: msg,
            username: this.username,
            room: this.room,
            created_at: new Date(),
            id: this.chats.doc().id
        })
        .then(() => {
            prikazPoruka.scrollTop = prikazPoruka.scrollHeight;

        })
        .catch(err => {
            console.log(`Error: ${err}`);
        });
    };

    async addChats(mess) {
        try {
            // Kreiranje dokumenta koji zelimo da upisemo u bazu
            let docChat = {
                message: mess,
                username: this.username,
                room: this.room,
                created_at: new Date()
            };
            let response = await this.chats.add(docChat); // pamti dokument u db
            return response; // vraca promise, na koji moze da se zakaci .then i .catch 
        }
        catch {
            console.error(`Doslo je do greske`, err); // mogli smo napisati samo i console.error();
        }
    }
    
   getChats(callback) {
    this.unsub = this.chats
    .where(`room`, `==`, this.room)
    .orderBy(`created_at`)
    .onSnapshot(snapshot => { // snapshot.forEach - PROMENA NAD CELOM BAZOM
        snapshot.docChanges().forEach(change => { // .docChanges - PROMENE NAD DOKUMENTIMA
            if(change.type == `added`) {
                callback(change.doc.data());
            }
        })
    });
   }
}

export default Chatroom;