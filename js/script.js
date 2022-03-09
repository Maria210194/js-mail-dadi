// Chiedere all'utente la sua email, verificare se presente nella lista e restituire l'esito

const database = ["mary@gmail.com", "rosa@gmail.com", "sara@gmail.com", "claudia@gmail.com"];
const button = document.getElementById('buttonVerify');
const userEmail = document.getElementById('userEmail');
let check = false;


button.addEventListener('click', function () {
    console.log(userEmail.value)

    for (let i = 0; i < database.length; i++) {
        if (userEmail.value === database[i]) {
            check = true;
            console.log('Access allowed');
            document.getElementById('response').innerText = 'Access allowed';
        }
    }

    if (check === false) {
        console.log('Access denied');
        document.getElementById('response').innerText = 'Access denied';
    }
}
);


