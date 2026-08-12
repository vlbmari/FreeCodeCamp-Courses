//Build an Optional Arguments Sum Function
function addTogether(num1) {
  if (typeof num1 !== "number") return undefined;

  if (arguments.length > 1) {
    const num2 = arguments[1];
    return typeof num2 === "number" ? num1 + num2 : undefined;
  }

  return function (num2) {
    if (typeof num2 !== "number") return undefined;
    return num1 + num2;
  };

}

console.log(addTogether(5)); // [Function (anonymous)]
console.log(addTogether(5)(7)); // 12



//Build a Sorting Visualizer
function generateElement() {
  return Math.floor(Math.random() * 100 + 1);
}

function generateArray() {
  const arr = [];
  for (let i = 0; i < 5; i++) {
    arr.push(generateElement())
  }
  return arr;
}

function generateContainer() {
  const itemDiv = document.createElement("div");
  return itemDiv;
}

function fillArrContainer(htmlElement, arr) {
  arr.forEach((element) => {
    const spanEl = document.createElement("span")
    spanEl.textContent = element
    htmlElement.appendChild(spanEl);
  })
}

function isOrdered(int1, int2) {
  return int1 <= int2 ? true : false;
}

function swapElements(arr, index) {
  if (!isOrdered(arr[index], arr[index + 1])) {
    const temp = arr[index];
    arr[index] = arr[index + 1];
    arr[index + 1] = temp;
  }
}

function highlightCurrentEls(htmlElement, index) {
  const children = htmlElement.children;
  children[index].style.border = "2px dashed red";
  children[index + 1].style.border = "2px dashed red";
}

const generateBtn = document.querySelector("#generate-btn");
const startingArray = document.querySelector("#starting-array");
const arrayContainer = document.querySelector("#array-container");
const sortBtn = document.querySelector("#sort-btn");

generateBtn.addEventListener("click", () => {
  startingArray.textContent = "";
  arrayContainer.innerHTML = "";
  arrayContainer.appendChild(startingArray);

  const arr = generateArray();
  fillArrContainer(startingArray, arr);

})


sortBtn.addEventListener("click", () => {
  const spans = startingArray.querySelectorAll("span");
  if (spans.length === 0) return;

  const arr = Array.from(spans).map((span) => Number(span.textContent));

  arrayContainer.innerHTML = "";
  arrayContainer.appendChild(startingArray);

  // Passo inicial: re-preenche e destaca os dois primeiros (índice 0)
  startingArray.textContent = "";
  fillArrContainer(startingArray, arr);
  highlightCurrentEls(startingArray, 0);

  let swapped = true;

  while (swapped) {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      // Troca os elementos se estiverem fora de ordem
      if (!isOrdered(arr[i], arr[i + 1])) {
        swapElements(arr, i);
        swapped = true;
      }

      // Cria a div para o estado resultante deste passo
      const stepDiv = generateContainer();
      fillArrContainer(stepDiv, arr);

      // Se ainda houver comparações pela frente, destaca o próximo par
      if (swapped || i < arr.length - 2) {
        highlightCurrentEls(stepDiv, (i + 1) % (arr.length - 1));
      }

      arrayContainer.appendChild(stepDiv);
    }
  }
});