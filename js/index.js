function whoWon(){
  let player_1 = Math.ceil(Math.random() * 6);
  let player_2 = Math.ceil(Math.random() * 6);
  let result = undefined;
  
  if (player_1 > player_2){
    result =  "🚩 Player 1 wins";
  }
  else if (player_1 === player_2){
    result =  "🚨 Draw 🚨";
  }
  else{
    result = "Player 2 wins 🚩";
  }
  document.querySelector("h1").innerText = result;
  document.querySelector(".p1").setAttribute("src", "images/dice" + player_1 + ".png");
  document.querySelector(".p2").setAttribute("src", "images/dice" + player_2 + ".png");
}

document.querySelector("#click").addEventListener("click",whoWon);
