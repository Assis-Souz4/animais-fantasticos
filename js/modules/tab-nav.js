export default function initTabNav() {
   const tabMenu = document.querySelectorAll(".js-tabMenu li");
   const tabContent = document.querySelectorAll(".js-tabContent section");
 
   //function add uma clase de acordo com o index
   if (tabMenu.length && tabContent.length) {
     tabContent[0].classList.add("ativo");
 
     function activeTab(index) {
       tabContent.forEach((section) => {
         section.classList.remove("ativo");
       });
       tabContent[index].classList.add("ativo");
     }
 
     //função liga o index da tabMenu com a tabContent
     tabMenu.forEach((itemMenu, indexTabMenu) => {
       itemMenu.addEventListener("click", () => {
         activeTab(indexTabMenu);
       });
     });
   }
 }