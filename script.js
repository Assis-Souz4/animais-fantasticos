const tabMenu = document.querySelectorAll(".js-tabMenu li");
const tabContent = document.querySelectorAll(".js-tabContent section");
tabContent[0].classList.add("ativo");

if (tabMenu.length && tabContent.length) {
  function activeTab(index) {
    tabContent.forEach((section) => {
      section.classList.remove("ativo");
    });
    tabContent[index].classList.add("ativo");
  }

  tabMenu.forEach((itemMenu, index) => {
    itemMenu.addEventListener("click", () => {
      activeTab(index);
    });
  });
}
