let getRandomRgb = () => Math.floor(Math.random() * 256);
let getRandomAlpha = () => Math.random().toFixed(1);
let base = [getRandomRgb(), getRandomRgb(), getRandomRgb(), getRandomAlpha()];
let added = [getRandomRgb(), getRandomRgb(), getRandomRgb(), getRandomAlpha()];
function coloMixer() {
  let mix = [];
  mix[3] = 1 - (1 - added[3]) * (1 - base[3]); // for alpha
  mix[0] = Math.round(
    (added[0] * added[3]) / mix[3] + base[0] * base[3] * (1 - added[3] / mix[3]) //red
  );
  mix[1] = Math.round(
    (added[1] * added[3]) / mix[3] +
      (base[1] * base[3] * (1 - added[3])) / mix[3]
  ); // green
  mix[2] = Math.round(
    (added[2] * added[3]) / mix[3] +
      (base[2] * base[3] * (1 - added[3])) / mix[3]
  ); // blue
  return base.join(",");
}

function fillOptionBoxes() {
  let ansBoxIndex = Math.ceil(Math.random() * 4);
  // console.log(ansBoxIndex);s
  let ansBox = document.querySelector(
    `.resultantColorContainer :nth-child(${ansBoxIndex})`
  );
  ansBox.style.backgroundColor = `rgba(${coloMixer()})`;
  // console.log(ansBox);
  document.querySelector(
    `.primaryColorBox :nth-child(1)`
  ).style.backgroundColor = `rgba(${base.join(",")})`;
  document.querySelector(
    `.primaryColorBox :nth-child(2)`
  ).style.backgroundColor = `rgba(${added.join(",")})`;
  document.querySelectorAll(".colorBox").forEach((e) => {
    if (e.style.backgroundColor != ansBox.style.backgroundColor) {
      e.style.backgroundColor = `rgba(${getRandomRgb()},${getRandomRgb()},${getRandomRgb()},${getRandomAlpha()})`;
    }
  });
}
fillOptionBoxes();

function checkAnswer(t) {
  let lossEle = document.querySelector("#loss");
  let winEle = document.querySelector("#win");
  if (t.style.backgroundColor.replaceAll(/\s/g, "") == `rgba(${coloMixer()})`) {
    winEle.style.cssText = "display:flex;width: 200px; height: 200px";
    setTimeout(() => {
      winEle.style.cssText = "display:none;width: 200px; height: 200px";
      window.location.reload();
    }, 1000);
    console.log("in if");
  } else {
    lossEle.style.cssText = "display:flex; width: 200px; height: 200px";
    setTimeout(() => {
      lossEle.style.cssText = "display:none; width: 200px; height: 200px";
    }, 1000);
    console.log("In Elses");
  }
}
