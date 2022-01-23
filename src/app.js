/* eslint-disable */
import "bootstrap";
import "./style.css";

let pronombres = ["un", "vuestro", "su"];
let adjetivos = ["increible", "absurdo", "descabellado"];
let nombres = ["pastel", "delito", "plan"];
let dominiosComerciales = [".com", ".es", ".io"];

let colors = ["success", "dark", "danger", "info"];

window.onload = function() {
  let domainElements = generateDomainButtonElements(
    pronombres,
    adjetivos,
    nombres,
    dominiosComerciales,
    colors
  );
  const domainsContainer = document.querySelector("#domains");

  domainElements = shuffleArray(domainElements);
  domainElements.forEach(domainName => domainsContainer.append(domainName));
};

/** Returns an array of HTML buttons with the given domain components,
 *  each component having a different random color of given colors.
 */
function generateDomainButtonElements(
  pronombres,
  adjetivos,
  nombres,
  dominiosComerciales,
  colors
) {
  let domainElements = [];

  for (const pronombre of pronombres) {
    for (const adjetivo of adjetivos) {
      for (const nombre of nombres) {
        for (const domComercial of dominiosComerciales) {
          let domainComponents = [pronombre, adjetivo, nombre, domComercial];
          // Here we get an array with 4 randomly ordered colors.
          const shuffledColors = shuffleArray(colors);

          // Convert each domain component string in a span HTMLElement with a
          // random color
          domainComponents = domainComponents.map(component =>
            wrapInColoredSpan(component, shuffledColors.pop())
          );

          // Join all the domain components in a button element with custom styles and
          // onClick functionality
          const domainButton = document.createElement("button");
          domainButton.className = "domain";
          domainButton.innerHTML = domainComponents.join("");
          domainButton.addEventListener("click", function() {
            const domainText = domainButton.innerText;

            alert(domainText);
            navigator.clipboard.writeText(domainText);
          });

          domainElements.push(domainButton);
        }
      }
    }
  }

  return domainElements;
}

/** @argument color - one of the bootstrap variants (sucess, secondary...) */
function wrapInColoredSpan(text, color) {
  return `<span class='text-${color}'>${text}</span>`;
}

/** Generates an alert informing the user that the domainName has
 *  been copied to clipboard */
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

  // Replacing the innerHTML of the place we avoid multiple alerts being present
  // which is good because only the last alert content is valid
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

/** Returns a random number between 0 and limit (limit not included) */
function getRandomNumber(limit) {
  return Math.floor(Math.random() * limit);
}
