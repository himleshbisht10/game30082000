var randomnum1 = (Math.floor(Math.random()*6)+1); //RANDOM NO 1-6
var randomdiceimage1 = "dice"+ randomnum1 + ".png";   // dice image  b.w 1-6
var randomimagesource1 = "images/"+ randomdiceimage1; //images/dice1.png-6
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomimagesource1);

var  randomnum2 = (Math.floor(Math.random()*6)+1);
var randomdiceimage2 = "dice"+ randomnum2 +".png";
var randomimagesource2 = "images/"+ randomdiceimage2;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomimagesource2);

if (randomnum1>randomnum2)
{
  document.querySelector("h1").innerHTML ="Player 1 win";
}
 else if (randomnum2>randomnum1) {
   document.querySelector("h1").innerHTML="Player2 win";

 }
 else{
   document.querySelector("h1").innerHTML="Its draw";
  }
