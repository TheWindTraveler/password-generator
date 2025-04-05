function generatePassword(){
    const passwordOne = getRandomPassword();
    const passwordTwo = getRandomPassword();
    firstPasswordBox.textContent = passwordOne;
    secondPasswordBox.textContent = passwordTwo;
}