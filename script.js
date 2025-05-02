
//Animation message
const animatedMessage = document.querySelector(".animated-message")
animatedMessageLength = animatedMessage.textContent.length;
const startMessage = animatedMessage.textContent;
let charIndex = 0;

animate();

function animate() {
  charIndex++;
  animatedMessage.textContent = startMessage.slice(0, charIndex);
  setTimeout(animate, 80);
  
  if (charIndex === animatedMessageLength) {
    charIndex = 0;
  }
}

//date update 

const date = new Date();
const dateEl = document.querySelector(".date");

const dayName = date.toLocaleDateString("en", {weekday: "long"});
const monthName =  date.toLocaleDateString("en", { month: "long" });
const dayNumber = date.getDate();
const year = date.getFullYear();
dateEl.textContent = `${dayName}, ${dayNumber} ${monthName} ${year}`

//Load more images
const imgContainerEl = document.querySelector(".img-container");
const buttonEl = document.querySelector(".btn");
const loadedImgCounter = 4;
let imgCounter = 9;

buttonEl.addEventListener("click", function() {
  loadImages();
})

function loadImages() {
  for (let i = 0; i < loadedImgCounter; i++) {
    const newImgEl = document.createElement("img");
    newImgEl.src = `https://picsum.photos/300/300?random=${imgCounter}`
    imgContainerEl.appendChild(newImgEl);
    imgCounter++;
  }
}