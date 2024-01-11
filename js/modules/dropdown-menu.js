import foraClick from "./foraClick.js";

export default function initDropdownMenu() {
  const dropMenus = document.querySelectorAll("[data-dropdown]");

  dropMenus.forEach((menu) => {
    menu.addEventListener("touchstart", clicarMenu);
    menu.addEventListener("click", clicarMenu);
    //forma reduzida para enviar varios events
    // ['click', 'touchstart'].forEach((eventoClick)=>{
    //    menu.addEventListener(eventoClick, clicarMenu);
    // })
  });

  function clicarMenu(event) {
    event.preventDefault();
    this.classList.add("ativo-menu");
    clicarFora(this, ["click", "touchstart"], () => {
      this.classList.remove("ativo-menu");
    });
  }
  //mobile : ao clicar fora fecha o menu

  function clicarFora(element, events, callback) {
    const html = document.documentElement;
    const dataFora = "data-fora";

    if (!element.hasAttribute(dataFora)) {
      events.forEach((userEvent) => {
        html.addEventListener(userEvent, fora);
      });
      element.setAttribute(dataFora, "");
      function fora(event) {
        if (!element.contains(event.target)) {
          element.removeAttribute(dataFora);
          events.forEach((userEvent) => {
            html.removeEventListener(userEvent, fora);
          });
          html.removeEventListener("click", fora);
          callback();
        }
      }
    }
  }
}
