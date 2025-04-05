function copyToClipBoard(elementId){
    const clipBoardText = document.getElementById(elementId).textContent;

    if (clipBoardText){
        navigator.clipboard.writeText(clipBoardText)
        .then(() => {
            alert("Password copied to clipboard");
        })
        .catch((err) => {
            console.error("Copy failed: ", err);
        });
    } else {
        alert("There's no password to copy!");
    }
}