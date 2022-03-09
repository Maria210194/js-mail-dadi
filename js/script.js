// Chiedere all'utente la sua email, verificare se presente nella lista e restituire l'esito

const database = ["mary@gmail.com", "rosa@gmail.com", "sara@gmail.com", "claudia@gmail.com"];
let button = document.getElementById('buttonVerify');
const userEmail = document.getElementById('userEmail');
let check = false;
let responseEmail = document.querySelector('.responseEmail');




button.addEventListener('click', function () {
    console.log(userEmail.value)

    for (let i = 0; i < database.length; i++) {
        if (userEmail.value === database[i]) {
            check = true;
            console.log('Access allowed');
            responseEmail.classList.add('green');
            document.querySelector('.responseEmail').innerText = 'Access allowed';
        }
    }

    if (check === false) {
        console.log('Access denied');
        responseEmail.classList.add('red');
        document.querySelector('.responseEmail').innerText = 'Access denied';
    }
}
);


/* 
    Generare un numero da 1 a 6 sia per il computer che per il giocatore
    Stabilire il vincitore in base al punteggio e restituire l'esito 
*/

const buttonDado = document.getElementById('buttonDado');
let dadoGiocatore = document.getElementById('dadoGiocatore');
let dadoComputer = document.getElementById('datoComputer');


buttonDado.addEventListener('click', function () {
    dadoGiocatore = Math.floor(Math.random() * 7);
    dadoComputer = Math.floor(Math.random() * 7);

    console.log('Numero dado giocatore ' + dadoGiocatore);
    console.log('Numero dado computer ' + dadoComputer);

    if (dadoGiocatore > dadoComputer) {
        console.log('Hai vinto');
        document.getElementById('dadoGiocatore').innerText = ('il tuo numero è: ' + dadoGiocatore);
        document.getElementById('dadoComputer').innerText = ('il numero del computer è: ' + dadoComputer);
        document.getElementById('responseDado').innerText = ('Hai vinto!')
    }
    else if (dadoGiocatore < dadoComputer) {
        console.log('Hai perso')
        document.getElementById('dadoGiocatore').innerText = ('Hai perso' + 'il tuo numero è: ' + dadoGiocatore);
        document.getElementById('dadoComputer').innerText = ('il numero del computer è: ' + dadoComputer);
        document.getElementById('responseDado').innerText = ('Hai perso!')
    }
    else {
        console.log('Pareggio');
        document.getElementById('dadoGiocatore').innerText = ('Pareggio, ritenta!' + 'il tuo numero è: ' + dadoGiocatore);
        document.getElementById('dadoComputer').innerText = ('il numero del computer è: ' + dadoComputer);
        document.getElementById('responseDado').innerText = ('Pareggio!')
    }
});

