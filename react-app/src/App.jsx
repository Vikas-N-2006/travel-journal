import Header from "../src/pages/Header";
import Travel from "./pages/Travel";

function App() {
  return (
    <>
      <Header />
      <main className='container'>
        <Travel
          img={{
            src: "https://scrimba.com/links/travel-journal-japan-image-url",
            alt: "Mount Fuji",
          }}
          country='Japan'
          url='https://www.google.com/maps/place/Mount+Fuji'
          title='Mount Fuji'
          dates='12-Jan-2024 - 25-Jan-2024'
          text='Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.'
        />
      </main>
      <main className='container'>
        <Travel
          img={{
            src: "https://imgs.search.brave.com/ESJQgUbag3XQurPgAqyCtIMGS8QU_W-GQof7R_9EENY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9h/L2E4L1NrYW5kYWdp/cmkuanBn",
            alt: "Skandagiri Hills",
          }}
          country='India'
          url='https://maps.app.goo.gl/53ASqwXmJs5C8Tv56'
          title='Skandagiri Hills'
          dates='23-May-2023'
          text='Skandagiri Hills, also known as Kalavara Durga, is an ancient mountain fortress located in Karnataka, India. It stands at an elevation of 1,450 meters (4,760 feet) above sea level. The hill is surrounded by a fort and is part of the five prominent hills in Chikkaballapur district, making it a popular trekking destination.'
        />
      </main>
    </>
  );
}

export default App;
