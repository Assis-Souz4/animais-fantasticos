export default function initScrollSoft() {
   const linksInternos = document.querySelectorAll('a[href^="#"]');
 
   function scrollToSection(event) {
     event.preventDefault();
     const href = this.getAttribute("href");
     const section = document.querySelector(href);
     section.scrollIntoView({
       behavior: "smooth",
       block: "start"
     });
   }
 
   linksInternos.forEach((link) => {
     link.addEventListener("click", scrollToSection);
   });
 }