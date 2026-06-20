import { useState } from "react";

export default function ThemeToggle(){
const [darkMode,setDarkMode]=useState(false);

  return(
    <button onClick={()=>setDarkMode(!darkMode)}>
    {darkMode ? "Dark Mode" : "light Mode"}
    </button>
  );
}
  
