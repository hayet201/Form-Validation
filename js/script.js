let prenom = document.getElementsByClassName('lastname');
let nom = document.getElementsByClassName('nom');
let adress = document.getElementsByClassName('adr');
let pwd = document.getElementsByClassName('pwd');
let mail = document.getElementsByClassName('email');




function test(prenom,nom,adress,pwd,mail) {
        if(prenom.value==="") {
                alert("prenom")
        }
        else if(adress.value==="") {
                alert("adress")
        }
       else if(nom.value==="") {
                alert("nom")
        }
        else if(pwd.value==="") {
                alert("pwd")
        }
       else if(mail.value==="") {
                alert("mail")
        }
}

function password(pwd) {
let password = pwd.value
    if (password.length > 8) {
        alert("verfiez votre mot de pass");
    }
    let regex = /[A-Z]/g
    if (pwd.includes(regex) == false ) {
        alert("verfiez votre mot de pass");
    }
    const array1 = [1-9]
    if (pwd.includes(array1) == false) {
        alert("verfiez votre mot de pass");
    }


}
function validation() {
    console.log("hello")
   test(prenom,nom,adress,pwd,mail);
    password(pwd);
}      