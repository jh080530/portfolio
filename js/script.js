const image = document.querySelectorAll(".graphic .pic");
const closeBtn = document.querySelector("#modal span")
const modal = document.querySelector("#modal");

image.forEach(el => el.addEventListener("click", () => {
  const src = el.dataset.img;
  //console.log(src)
  const pic = modal.querySelector("img");
  pic.src = src;
  modal.style.display = "block";
}))

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
  const img = modal.querySelector("img")
  img.src = "";
})

const slider = document.querySelector(".slider .pic");
const cBtn = document.querySelector(".carousel span");
const carousel = document.querySelector(".carousel");

slider.addEventListener("click", () => {
  carousel.style.display = "block";
})

cBtn.addEventListener("click", () => {
  carousel.style.display = "none";
})

window.addEventListener("click", (e) => {
  console.log(e)
  if(e.target === modal){
    modal.style.display = "none";
    const img = modal.querySelector("img")
    img.src = "";
  }
  if(e.target === carousel){
    carousel.style.display = "none";
  }
})