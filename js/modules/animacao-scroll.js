export default function initAnimationScroll() {
   const sections = document.querySelectorAll(".js-scroll");
   const calcHeightScreen = window.innerHeight * 0.6;
 
   if (sections.length) {
     function animationScroll() {
       //saber a distancia de cada elemento em relação ao topo
       sections.forEach((section) => {
         const sectionTop =
           section.getBoundingClientRect().top - calcHeightScreen;
         if (sectionTop < 0) {
           section.classList.add("ativo");
         }
       });
     }
 
     animationScroll();
 
     window.addEventListener("scroll", animationScroll);
   }
 }