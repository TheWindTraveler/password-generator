function generatePassword(){
    const passwordOne = generateRandomPassword();
    const passwordTwo = generateRandomPassword();
    firstPasswordBox.textContent = passwordOne;
    secondPasswordBox.textContent = passwordTwo;
}