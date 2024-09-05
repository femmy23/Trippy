import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Img from "../assets/2.jpg";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

function Contact() {
  return (
    <>
      <Navbar />
      <Hero variety="about" heroImg={Img} title="Contact" type="hide" />
      <ContactForm />
      <Footer />
    </>
  );
}

export default Contact;
