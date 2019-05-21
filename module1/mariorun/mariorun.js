var divElem;

function init() {
  console.log("page loaded and DOM is ready");
  divElem = document.querySelector("#theDiv");
}

var currentImage = 0;
var leftPos = 0;

function animateMario() {
  drawMario(currentImage);

  currentImage = (currentImage +1) % 3;
  leftPos += 5;
  if(leftPos >= 100)
    leftPos = 0;
}

function drawMario(indexImage) {
  divElem.style.marginLeft = leftPos + "px";
  divElem.style.width = "22px";
  divElem.style.height = "32px";
  divElem.innerHTML = "";
  divElem.style.backgroundImage = "url(https://mainline.i3s.unice.fr/mooc/marioSprite.png)";
  divElem.style.backgroundColor = "transparent";
  var offset = indexImage * 24;
  divElem.style.backgroundPosition  = offset + "px";
}
