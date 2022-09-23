document.querySelector("#convert-btn").addEventListener("click", () => {
  camelCase(document.querySelector("#text").value);
  pascalCase(document.querySelector("#text").value);
  snakeCase(document.querySelector("#text").value);
  screamingSnakeCase(document.querySelector("#text").value);
  kebabCase(document.querySelector("#text").value);
  screamingKebabCase(document.querySelector("#text").value);
});

function camelCase(inp) {
  var camelCaseWord = new String();
  var inputw = new String(inp).toLowerCase().split("");
  var nextUp = false;
  inputw.forEach((e, i) => {
    if (e === " ") {
      nextUp = true;
    } else {
      if (nextUp) {
        camelCaseWord = camelCaseWord + e.toUpperCase();
        nextUp = false;
      } else {
        camelCaseWord = camelCaseWord + e;
      }
    }
  });
  document.querySelector("#camel-case").textContent = camelCaseWord;
}

function pascalCase(inp) {
  var pascalCaseW = new String();
  var inputW = new String(inp).toLowerCase().split("");

  inpuyW = inputW.splice(0, 1, inputW[0].toUpperCase());
  var nextUp = false;

  inputW.forEach((e, i) => {
    if (e === " ") {
      nextUp = true;
    } else {
      if (nextUp) {
        pascalCaseW = pascalCaseW + e.toUpperCase();
        nextUp = false;
      } else {
        pascalCaseW = pascalCaseW + e;
      }
    }
  });
  document.querySelector("#pascal-case").textContent = pascalCaseW;
}

function snakeCase(inp) {
  var snakeCaseW = new String();
  var inputW = new String(inp).toLowerCase().split("");
  inputW.forEach((e, i) => {
    if (e == " ") {
      snakeCaseW = snakeCaseW + "_";
    } else {
      snakeCaseW = snakeCaseW + e;
    }
  });
  document.querySelector("#snake-case").textContent = snakeCaseW;
}

function screamingSnakeCase(inp) {
  var sSnakeCaseW = new String();
  var inputW = new String(inp).toUpperCase().split("");
  inputW.forEach((e, i) => {
    if (e == " ") {
      sSnakeCaseW = sSnakeCaseW + "_";
    } else {
      sSnakeCaseW = sSnakeCaseW + e;
    }
  });
  document.querySelector("#screaming-snake-case").textContent = sSnakeCaseW;
}

function kebabCase(inp) {
  var kebabCaseW = new String();
  var inputW = new String(inp).split("");
  inputW.forEach((e, i) => {
    if (e == " ") {
      kebabCaseW = kebabCaseW + "-";
    } else {
      kebabCaseW = kebabCaseW + e;
    }
  });
  document.querySelector("#kebab-case").textContent = kebabCaseW;
}

function screamingKebabCase(inp) {
  var sKebabCaseW = new String();
  var inputW = new String(inp).toUpperCase().split("");
  inputW.forEach((e, i) => {
    if (e == " ") {
      sKebabCaseW = sKebabCaseW + "-";
    } else {
      sKebabCaseW = sKebabCaseW + e;
    }
  });
  document.querySelector("#screaming-kebab-case").textContent = sKebabCaseW;
}
