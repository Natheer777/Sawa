import { useEffect } from "react";
import { Navbar, Header, About , Slogan , Vision, Slogan2, Services, Contact, Footer, Typing} from "../../sections/index";


export default function Home() {
  useEffect(() =>{
    document.title = "Sawa Group";
  },[])
  return (
    <>
    
    <Navbar />
      <Header />
      <Typing />
      <About />
      <Slogan />
      <Vision />
      <Slogan2 />
      <Services />
      <Contact />
      <Footer />
    </>
  )
}
