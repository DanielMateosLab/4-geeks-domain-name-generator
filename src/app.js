/* eslint-disable */
import "bootstrap";
import "./style.css";

let pronombres = ["un", "vuestro", "su"];
let adjetivos = ["increible", "absurdo", "descabellado"];
let nombres = ["pastel", "delito", "plan"];
let dominios = [".com", ".es", ".io"];

window.onload = function() {
  for (const pronombre of pronombres) {
    for (const adjetivo of adjetivos) {
      for (const nombre of nombres) {
        for (const dominio of dominios) {
          let domainComponents = [pronombre, adjetivo, nombre, dominio];
          // With DomainColors class we get 4 randomly-ordered colors,
          // to get each of them we use the method getOne()
          const colors = new DomainColors();

          domainComponents.map(component =>
            wrapInColoredSpan(component, colors.getOne())
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

class DomainColors {
  constructor() {
    this._shuffle();
  }

  _shuffle() {
    let colors = ["success", "dark", "danger", "info"];
    let newColors = [];

    while (colors.length > 0) {
      const randomIndex = this._getRandomNumber(colors.length);
      newColors.push(colors.splice(randomIndex, 1)[0]);
    }

    this.colors = newColors;
  }

  /** Return a random number between 0 and limit (limit not included) */
  _getRandomNumber(limit) {
    return Math.floor(Math.random() * limit);
  }

  getOne() {
    return this.colors.pop();
  }
}

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
