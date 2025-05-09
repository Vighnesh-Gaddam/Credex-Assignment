import { Contact } from "lucide-react"
import Header from "./components/Header.jsx"
import Hero from "./components/Hero.jsx"
import HowItWorks from "./components/HowItWorks.jsx"
import Testimonials from "./components/Testimonials.jsx"
import WhyChooseUs from "./components/WhyChooseUs.jsx"
import ContactForm from "./components/ContactForm.jsx"
import Footer from "./components/Footer.jsx"

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <HowItWorks />
      <WhyChooseUs />
      <Testimonials />
      <ContactForm />
      <Footer />
    </>
  )
}
export default App