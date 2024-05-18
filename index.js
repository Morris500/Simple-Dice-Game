function start() {
  dice1=Math.floor(Math.random()*6)+1;
  
  document.querySelector(".img1").setAttribute("src", "dice-img/faces"+dice1+".png")
  
  
  dice2=Math.floor(Math.random()*6)+1;
  
  document.querySelector(".img2").setAttribute("src", "dice-img/faces"+dice2+".png")
  
  var heading = document.getElementsByTagName("h1")[0];
  
  if (dice1===dice2) { heading.innerHTML=("Draw")
  
  } else if (dice1>dice2){heading.innerHTML=("player1 wins")
  
  }
  
  else {
    heading.innerHTML=("player2 wins")
  }
   
}

document.querySelector(".btn").addEventListener("click", ()=>{
start();
});

