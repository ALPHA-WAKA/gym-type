import Navbar from "@/scenes/navbar"
import { useState,useEffect } from "react"
import { SelectedPage } from "./shared/types";
import Home from "./scenes/Home";
import Benefits from "./scenes/benefits";
import OurClasses from "./scenes/ourClasses";
import ContactUs from "./scenes/contactus";
import Footer from "./scenes";

function App() {
 const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
 const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true); 

 useEffect(() => {
  const handleScrool=()=>{
  if(window.scrollY===0){
    setIsTopOfPage(true);
    setSelectedPage(SelectedPage.Home)
  }else{
    setIsTopOfPage(false);}
 }
 window.addEventListener('scroll',handleScrool)
 return ()=>window.removeEventListener("scrool",handleScrool)
 }, []);
 return (
    <div className="app bg-gray-20">
      <Navbar  isTopOfPage={isTopOfPage}   selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
      />
      <Home setSelectedPage={setSelectedPage}/>
      <Benefits setSelectedPage={setSelectedPage}/>
      <OurClasses setSelectedPage={setSelectedPage}/>
      <ContactUs setSelectedPage={setSelectedPage}/>
      <Footer/>
    </div>
  )
}

export default App
