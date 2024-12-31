import Header from "../src/pages/Header";
import Travel from "./pages/Travel";
import Footer from "./pages/Footer";
import destinations from "./destinations";

function App() {
  const travelList = destinations.map((destination) => {
    return <Travel key={destination.id} {...destination} />;
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
