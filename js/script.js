console.log('OK JS')

const database = ['mary@gmail.com', 'rosa@gmail.com', 'sara@gmail.com', 'claudia@gmail.com'];
const userEmail = document.getElementById('userEmail');
const button = document.getElementById('buttonVerify');

button.addEventListener('click', function () {
    for (let i = 0; i < database.length; i++)
        if (userEmail == database[i]) {
            console.log('Access allowed')
            break;
        }
        else {
            console.log('Access denied')
            break;
        }
}
);

/*
for (let i = 0; i < database.length; i++) {
    console.log(database[i])
} */