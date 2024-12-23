import globe from "../assets/globe.png";

export default function Header() {
  return (
    <header>
      <span className='name'>ROAM MEMORIES</span>
      <img src={globe} alt='globe icon' />
      <h1 className='heading'> : My Travel Journal</h1>
    </header>
  );
}
