const userEmail = prompt("Qual é la tua email?");

const emailList = ["marco.rossi@gmail.com", "giovanni.bianchi@gmail.com", "antonio.verdi@gmail.com"];

let result = "";

let flag = false;

for (let i = 0; i < emailList.length; i++) {
    const arrayEmail = emailList[i];
    
    if (arrayEmail === userEmail) {
        flag = true;
    }
}

if (flag) {
    result = "Il login é andato a buon fine, benvenuto!!!";
} else {
    result = "Il login non é andato a buon fine, prova con un altra email.";
}

console.log(result);