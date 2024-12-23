import PropTypes from "prop-types";

export default function Jokes(props) {
  return (
    <>
      <div className='joke-container'>
        <div className='joke'>
          {props.joke && <p className='setup'>Setup: {props.joke}</p>}
          <p className='punchline'>Punchline: {props.punchline}</p>
          <hr />
        </div>
      </div>
    </>
  );
}

Jokes.propTypes = {
  joke: PropTypes.string.isRequired,
  punchline: PropTypes.string.isRequired,
};
