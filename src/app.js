/* eslint-disable */
import "bootstrap";
import "./style.css";

let pronombres = ["un", "vuestro", "su"];
let adjetivos = ["increible", "absurdo", "descabellado"];
let nombres = ["pastel", "delito", "plan"];
let dominiosComerciales = [".com", ".es", ".io"];

let colors = ["success", "dark", "danger", "info"];

window.onload = function() {
  for (const pronombre of pronombres) {
    for (const adjetivo of adjetivos) {
      for (const nombre of nombres) {
        for (const domComercial of dominiosComerciales) {
          let domainComponents = [pronombre, adjetivo, nombre, domComercial];
          const shuffledColors = shuffleArray(colors);

          domainComponents = domainComponents.map(component =>
            wrapInColoredSpan(component, shuffledColors.pop())
          );

          const domainButton = document.createElement("button");
          domainButton.className = "domain";
          domainButton.innerHTML = domainComponents.join("");

          domainButton.addEventListener("click", function() {
            const domainText = domainButton.innerText;

            alert(domainText);
            navigator.clipboard.writeText(domainText);
          });

          document.querySelector("#domains").append(domainButton);
        }
      }
    }
  }
};

/** @argument color - one of the bootstrap variants (sucess, secondary...) */
function wrapInColoredSpan(text, color) {
  return `<span class='text-${color}'>${text}</span>`;
}

function alert(domainName) {
  const wrapper = document.createElement("div");
  wrapper.innerHTML = `
    <div class="alert alert-success alert-dismissible fade show" role="alert">
      Copied <strong>${domainName}</strong> to clipboard
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
    `;

  document.querySelector(".alert-placeholder").innerHTML = wrapper.innerHTML;
}

/** Returns a new array with array elements in a random order */
function shuffleArray(array) {
  let arrayCopy = [...array];
  let shuffledArray = [];

  while (arrayCopy.length > 0) {
    const randomIndex = getRandomNumber(arrayCopy.length);
    shuffledArray.push(arrayCopy.splice(randomIndex, 1)[0]);
  }

  return shuffledArray;
}

function getRandomNumber(limit) {
  return Math.floor(Math.random() * limit);
}
