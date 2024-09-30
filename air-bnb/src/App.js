import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import Contact from "./components/Contact";
import data from "./data";

const App = () => {
  // console.log(data[0].openSpots);

  const cards = data.map((item) => {
    return (
      <Card
        key={item.id}
        // img={item.coverImg}
        // star={item.stats.rating}
        // rating={item.stats.reviewCount}
        // country={item.location}
        // price={item.price}
        // title={item.title}
        // openSpots={item.openSpots}
        // location={item.location}

        // item={item}
        {...item}
      />
    );
  });
  return (
    <div>
      <Navbar />
      <Hero />
      <section className="cards--list">{cards}</section>
    </div>
  );
};

export default App;
