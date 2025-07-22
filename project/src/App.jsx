import React from "react";
import LineClampAccordion from "./LineClampAccordion";

const App = () => {
 return(
  <LineClampAccordion
  text="Bu juda uzun matn bo‘lib, siz ko‘proq qatorlarni ko‘rish uchun accordion’ni ochishingiz mumkin. Bu kod faqat `useState` hooki yordamida yozilgan bo‘lib, hech qanday `useRef` yoki `useEffect` ishlatilmaydi. `motion.div layout` yordamida animatsiya o‘zi avtomatik amalga oshadi. Bu UI dizaynerlar va React frontendchilar uchun juda qulay uslub hisoblanadi."
  maxLines={1}
/>

 )
};

export default App;
