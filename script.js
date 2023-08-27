const noButton = document.getElementById("noButton");
const yesButton = document.getElementById("yesButton");
const resultText = document.getElementById("resultText");
const textMain=document.getElementById("text-main")
const additionalContent = document.getElementById("additionalContent");
const musicLink = document.getElementById("musicLink");
const sorveteImage=document.querySelector('.text-uiui img');
var contador=0
let noButtonPosition = "right";

function changeNoButtonPosition() {
  noButtonPosition = noButtonPosition === "right" ? "left" : "right";
  noButton.style.order = noButtonPosition === "left" ? "-1" : "1";
}
noButton.addEventListener("click", () => {
  contador+=1
  changeNoButtonPosition();
  if (contador>10)
    alert('tudo bem:)')
});

yesButton.addEventListener("click", () => {
  resultText.classList.remove("hidden");
  additionalContent.classList.remove("hidden");
  yesButton.style.display='none'
  noButton.style.display='none'
  textMain.style.display='none'

  document.body.style.backgroundColor = "#ffeaa7"; 
  document.body.style.backgroundImage = "url('joji.jpg')"; 
  
  resultText.style.fontSize = "24px";
  resultText.style.fontWeight = "bold";

  musicLink.href = "https://open.spotify.com/intl-pt/track/3zBBJ6LVn8Y9JnDrnPxvMC?si=gFYr64jQTUKop0jDw4YlvA&nd=1";
  sorveteImage.style.display="none";
});

