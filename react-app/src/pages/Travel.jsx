import PropTypes from "prop-types";
import mapIcon from "../assets/map.png";

export default function Travel(props) {
  //   const { img, country, url, title, dates, text } = props;

  return (
    <>
      <article className='journal-entry'>
        <div className='main-image-container'>
          <img className='main-image' src={props.img.src} alt={props.img.alt} />
        </div>
        <div className='info-container'>
          <img className='marker' src={mapIcon} alt='map marker icon' />
          <span className='country'>{props.country}</span>
          <a href={props.url}>View on Google Maps</a>
          <h2 className='entry-title'>{props.title}</h2>
          <p className='trip-dates'>{props.dates}</p>
          <p className='entry-text'>{props.text}</p>
        </div>
      </article>
    </>
  );
}

Travel.propTypes = {
  country: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  dates: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  img: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }).isRequired,
};