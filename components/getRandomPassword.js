function getRandomPassword(){
    let randomPassword = "";
    for (let i = 0; i < passwordLength; i++){
        randomPassword += getRandomCharacter();
    }
    return randomPassword;
}