export default function initTooltip() {}

const tooltip = document.querySelectorAll("[data-tooltip]");

tooltip.forEach((item) => {
  item.addEventListener("mouseover", onMouseOver);
});

function onMouseOver(event) {
  const tooltipDivReturn = criaTooltipDiv(this);
  console.log(event);
}

//criando tooltip

function criaTooltipDiv(element) {
  const tooltipDiv = document.createElement("div");
  const textoEl = element.getAttribute("aria-label");
  tooltipDiv.classList.add("tooltip");
  tooltipDiv.innerText = textoEl;
  document.body.appendChild(tooltipDiv);
  return tooltipDiv;
}
//