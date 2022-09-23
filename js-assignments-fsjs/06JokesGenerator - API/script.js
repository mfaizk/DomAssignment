async function getJoke() {
  var data = await fetch("https://api.chucknorris.io/jokes/random");
  data
    .json()
    .then((e) => {
      document.querySelector("#joke").textContent = e.value;
    })
    .catch((e) => {
      document.querySelector("#joke").textContent = "Opps Error" + e;
    });
}
document.querySelector("#jokeBtn").addEventListener("click", () => {
  getJoke();
});
