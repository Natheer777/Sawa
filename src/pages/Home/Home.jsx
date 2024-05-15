import { Navbar, Header, About ,  Vision, Services, Contact, Footer, Typing} from "../../sections/index";


export default function Home() {

  return (
    <>
    
    <Navbar />
      <Header />
      <Typing />
      <About />
      {/* <Slogan /> */}
      <Vision />
      {/* <Slogan2 /> */}
      <Services />
      <Contact />
      <Footer />
    </>
  )
}
