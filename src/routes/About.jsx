import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import img from "../assets/night.jpg";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";

function About() {
  return (
    <>
      <Navbar />
      <Hero variety="about" heroImg={img} title="About Us" type="hide" />
      <AboutUs />
      <Footer />
    </>
  );
}

export default About;
