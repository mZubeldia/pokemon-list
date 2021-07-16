import "../styles/pokemon.scss";
import PropTypes from "prop-types";

function Pokemon(props) {
  const pokeType = props.pokemonData.types.map((type, index) => (
    <li className="article-type" key={index}>
      {type}
    </li>
  ));
  return (
    <article className="article-item">
      <img
        className="article-img"
        src={props.pokemonData.url}
        alt={props.pokemonData.name}
      ></img>
      <h2 className="article-title">{props.pokemonData.name}</h2>
      <ul className="article-type-list">{pokeType}</ul>
    </article>
  );
}

Pokemon.propTypes = {
  pokemonData: PropTypes.shape({
    name: PropTypes.string,
    types: PropTypes.array,
  }),
};

export default Pokemon;
