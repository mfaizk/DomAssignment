function checkPalindrome() {
  let input = String(document.querySelector(".input").value);
  let revInput = new String();
  if (input !== "") {
    for (let i = input.length - 1; i >= 0; i--) {
      revInput = revInput + input[i];
    }
    input == revInput
      ? alert("Number is Plindrome")
      : alert("Number is not palindrome");
  }
}
