const classes400Level = document.getElementsByClassName('400level');

const displayText400 = () => {
    for (let i = 0; i < classes400Level.length; i++) {
        console.log(classes400Level[i].textContent);
    }
}
displayText400();