//DICE ROLLER PROGRAM

function roll(){
    const noOfDice = document.getElementById("noOfDice").value;
    const rollresult = document.getElementById("rollresult");
    const diceImages = document.getElementById("diceImages");

    const values = [];
    const images = [];

    for(let i = 0; i < noOfDice; i++){
        const value = Math.floor(Math.random() * 6) + 1
        console.log(value);
        values.push(value);
        images.push(`<img src="./assets/${value}.png" alt="Dice ${value}">`);
    }

    rollresult.textContent = `Dice Roll Resutls : ${values.join(', ')}`;
    diceImages.innerHTML = images.join('');


}