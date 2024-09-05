import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import img1 from "../assets/12.jpg";
import Destination from "../components/Destination";
import Trip from "../components/Trip";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero
        variety="hero"
        heroImg={img1}
        title="Your Journey Your Story"
        text="choose Your Favorite Destination"
        buttonText="Travel Plan"
        url="/"
        type="show"
      />
      <Destination />
      <Trip />
      <Footer />
    </>
  );
}

export default Home;
