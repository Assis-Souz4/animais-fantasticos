export default function dropdownMenu() {
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
    this.classList.toggle("ativo-menu");
  }
}
