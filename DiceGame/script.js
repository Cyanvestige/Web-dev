//Coding Challenge #1 from lecture 109
"use strict";
const angelRoll = document.querySelector(".angel-roll");
const demonRoll = document.querySelector(".demon-roll");
const angelAbility = document.querySelector(".angel-ap");
const demonAbility = document.querySelector(".demon-ap");
const dice = document.querySelector(".dice");
const angelIntro = document.querySelector(".angel-intro");
const angelIntroText = document.querySelector(".angel-intro div");
const upPointEle = document.querySelector(".up-point");
const downPointEle = document.querySelector(".down-point");
let upPoint = 50;
let downPoint = 50;
let randPoint = 1;
const rolling = function () {
  const i = setInterval(function () {
    randPoint = Math.floor(Math.random() * 6 + 1);
    dice.src = `dice-${randPoint}.png`;
  }, 8);
  let promise = new Promise(function (resolve) {
    setTimeout(function () {
      clearInterval(i);
      resolve(randPoint);
    }, 1200);
  });
  return promise;
};

angelRoll.addEventListener("click", async function () {
  upPoint += await rolling();
  upPointEle.textContent = upPoint + "";
});

demonRoll.addEventListener("click", async function (e) {
  downPoint += await rolling();
  downPointEle.textContent = downPoint + "";
});

angelAbility.addEventListener("mouseover", function () {
  angelIntro.style.display = "block";
  angelIntro.style.backgroundColor =
    "rgba(" + 255 + "," + 255 + "," + 255 + "," + 0.5 + ")";
});

angelAbility.addEventListener("mouseleave", function () {
  angelIntro.style.display = "none";
  angelIntro.style.backgroundColor =
    "rgba(" + 255 + "," + 255 + "," + 255 + "," + 0 + ")";
});

console.log("aaa");
