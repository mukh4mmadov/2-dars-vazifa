const showBtn = document.querySelector("#show-btn");
const modal = document.getElementById("modal");
const closeBtn = document.querySelector("#hide-btn");
const overlay = document.getElementById("overlay");
const cinfirmBtn = document.querySelector(".confirm-btn");
const removeHidden = () => {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const addHidden = () => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
showBtn.addEventListener("click", () => {
  removeHidden();
});
closeBtn.addEventListener("click", () => {
  addHidden();
});
overlay.addEventListener("click", () => {
  addHidden();
});

document.addEventListener("keydown", (e) => {
  if (e.key == "Escape") {
    addHidden();
  }
});

const imgCup = document.querySelector(".coffee-imgc");
const imgAme = document.querySelector(".coffee-imga");
const numc = document.querySelector(".numc");
const numa = document.querySelector(".numa");
let q1;
let q2;
imgCup.addEventListener("click", () => {
  q1 = +numc.textContent++;
});
imgAme.addEventListener("click", () => {
  q2 = +numa.textContent++;
});
cinfirmBtn.addEventListener("click", () => {
  addHidden();
  alert(`You ordered ${q1 + 1}cola and ${q2 + 1} fanta! `);
  numc.textContent = "0";
  numa.textContent = "0";
});
