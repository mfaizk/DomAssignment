document.querySelector("#button").addEventListener("click", () => {
  var canvas = document.querySelector("#canvas");
  canvas.style.cssText = `background-color:rgb(${Math.floor(
    Math.random() * 255
  )},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`;
});
