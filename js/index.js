function random_integer() {
  let integer = Math.random() * 6;
  return (Math.ceil(integer));
}

let player_1 = random_integer();
let player_2 = random_integer();

function whoWon(){
  if (player_1 > player_2){
    return "🚩 Player 1 wins";
  }
  else if (player_1 === player_2){
    return "🚨 Draw 🚨";
  }
  else{
    return "Player 2 wins 🚩";
  }
}

function changePage(){
  document.querySelector("h1").innerText = whoWon();
  document.querySelector(".p1").setAttribute("src", "images/dice" + player_1 + ".png");
  document.querySelector(".p2").setAttribute("src", "images/dice" + player_2 + ".png");

}
changePage();
 
