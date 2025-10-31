let openButtons = document.querySelectorAll(".item");
let closeButton = document.querySelector("#closed-button");
let sampleButton = document.querySelector("#sample-button");
let gallery = document.querySelector("#gallery");
let overlay = document.querySelector("#overlay");
let modal = document.querySelector("#modal");
const modalImg = document.querySelector("#modal-img");

let isGalleeryOpen = false;

openButtons.forEach(button => {
  button.onclick = () => {
    const clickedSrc = button.getAttribute("src");
    modalImg.setAttribute("src", clickedSrc);   
    modal.style.display = "block";
    overlay.style.display = "block";
    overlay.style.pointerEvents = "all"; 
    console.log("CLICKED");
  };
});

closeButton.onclick = () => {
  modal.style.display = "none";
  overlay.style.display = "none";
  overlay.style.pointerEvents = "none";
};

sampleButton.onclick = () => {
  if(isGalleeryOpen == false)
  {
    gallery.style.display = "grid";
    sampleButton.textContent = "Close Sample";
    isGalleeryOpen = true;
  }
  else
  {
    gallery.style.display = "none";
    sampleButton.textContent = "View Sample";
    isGalleeryOpen = false
  }
};