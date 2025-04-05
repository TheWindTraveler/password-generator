function getRandomCharacter(){
    let randomIndex = Math.floor(Math.random() * characters.length)
    return characters[randomIndex]
}