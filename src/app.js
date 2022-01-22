/* eslint-disable */
import "bootstrap";
import "./style.css";

/**
 * TODO:
 * - display domains with random text-color for each word.
 */

let pronombres = ["un", "vuestro", "su"];
let adjetivos = ["increible", "absurdo", "descabellado"];
let nombres = ["pastel", "delito", "plan"];
let dominios = [".com", ".es", ".io"];

window.onload = function() {
  for (const pronombre of pronombres) {
    for (const adjetivo of adjetivos) {
      for (const nombre of nombres) {
        for (const dominio of dominios) {
          const pronombreElement = wrapInColoredSpan(pronombre, "success");
          const adjetivoElement = wrapInColoredSpan(adjetivo, "dark");
          const nombreElement = wrapInColoredSpan(nombre, "danger");
          const dominioElement = wrapInColoredSpan(dominio, "info");

          const domainButton = document.createElement("button");
          domainButton.className = "domain";
          domainButton.innerHTML =
            pronombreElement + adjetivoElement + nombreElement + dominioElement;

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
