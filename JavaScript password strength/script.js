function passwordStrength(password){
    password = "";

    if(password.toLowerCase() == password){
        alert('Password too weak! Should contains atlease one uppercase letter!');
    }

    if(password.length < 8){
        alert('Password too short! Should be atleast 8 character long!')
    }

    if(password.toLowerCase() == "password"){
        alert('Your password cannot be Password!')
    }
}