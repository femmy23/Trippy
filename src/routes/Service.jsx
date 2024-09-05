import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Img from "../assets/10.jpg";
import Footer from "../components/Footer";
import Trip from "../components/Trip";

function Service() {
  return (
    <>
      <Navbar />
      <Hero variety="about" heroImg={Img} title="Service" type="hide" />
      <Trip />
      <Footer />
    </>
  );
}

export default Service;
