let score1 = 0;
let score2 = 0;

function rollDice(){

    if(score1 >= 69 ){
        diceResult.style.display = 'none';
        diceImages.style.display = 'none';
        winner.innerHTML = `Player 1 won the game`;

    }
    else if(score2 >= 69 ){
        diceResult.style.display = 'none';
        diceImages.style.display = 'none';
        winner.innerHTML = `Player 2 Won the game`;

    }
    else{
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");
    const winner = document.getElementById("winner");
    const values = [];
    const images = [];

    
    const dice1 = Math.floor(Math.random()*6)+1;
    const dice2 = Math.floor(Math.random()*6)+1;
    values.push(dice1);
    values.push(dice2);
    images.push(`<img src="dice/${dice1}.png">`);
    images.push(`<img src="dice/${dice2}.png">`);

    const diff = Math.abs(dice1 - dice2);

    if(dice1>dice2){
        score1+=diff
    } else if(dice1<dice2){
        score2+=diff
    }
    document.getElementById('score1').textContent = `Player 1 score : ${score1}`;
    document.getElementById('score2').textContent = `Player 2 score : ${score2}`;
    

    diceResult.textContent = `dice: ${values.join('| ')}`;
    diceImages.innerHTML = images.join("");
    console.log(images);
}}
