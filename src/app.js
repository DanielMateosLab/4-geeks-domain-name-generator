/* eslint-disable */
import "bootstrap";
import "./style.css";

/**
 * TODO:
 * - display domains with random text-color for each word.
 * - Copy domain to clipboard on-click
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
          const pronombreHTML = wrapInColoredSpan(pronombre, "success");
          const adjetivoHTML = wrapInColoredSpan(adjetivo, "dark");
          const nombreHTML = wrapInColoredSpan(nombre, "danger");
          const dominioHTML = wrapInColoredSpan(dominio, "info");

          document.querySelector(
            "#domains"
          ).innerHTML += `<div class="domain">${pronombreHTML +
            adjetivoHTML +
            nombreHTML +
            dominioHTML}</div>`;
        }
      }
    }
  }
};

/** @argument color - one of the bootstrap variants (sucess, secondary...) */
function wrapInColoredSpan(text, color) {
  return `<span class='text-${color}'>${text}</span>`;
}
