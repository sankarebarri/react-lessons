import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import Contact from "./components/Contact";
const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Card
        img="katie-zaferes.png"
        star="star.jpg"
        rating={3}
        country="USA"
        price={136}
        title="Life lessons with Katie Zaferes"
      />
      {/* <Contact
        img="images/mountain-bike.png"
        star="images/star.jpg"
        rating="3"
      />
      <Contact
        img="images/wedding-photography.png"
        star="images/star.jpg"
        rating="4"
      />
      <Contact
        img="images/katie-zaferes.png"
        star="images/star.jpg"
        rating="5"
      /> */}
    </div>
  );
};

export default App;
