import Header from "../src/pages/Header";
import Travel from "./pages/Travel";
import Footer from "./pages/Footer";
import destinations from "./destinations";

function App() {
  const travelList = destinations.map((destination, index) => {
    return (
      <Travel
        key={index}
        img={destination.img}
        country={destination.country}
        url={destination.url}
        title={destination.title}
        dates={destination.dates}
        text={destination.text}
      />
    );
  });
  return (
    <>
      <div className='main-container'>
        <Header />
        <main className='container'>{travelList}</main>
        <Footer className='footer' />
      </div>
    </>
  );
}

export default App;
