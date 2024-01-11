export default function clicarFora(element, events, callback) {
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
 