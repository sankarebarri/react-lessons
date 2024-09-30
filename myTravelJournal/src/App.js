import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import data from "./data";

const App = () => {
  const items = data.map((datum) => {
    return (
      <Content
        key={datum.id}
        // title={datum.title}
        // location={datum.location}
        // googleMap={datum.googleMapsUrl}
        // startDate={datum.startDate}
        // endDate={datum.endDate}
        // description={datum.description}
        // image={datum.image}
        {...datum}
      />
    );
  });
  return (
    <div>
      <Header />
      {items}
      <Footer />
    </div>
  );
};

export default App;
