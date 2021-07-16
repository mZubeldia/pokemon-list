import PropTypes from "prop-types";
import Pokemon from "./Pokemon";
import "../styles/pokeList.scss";

function PokeList(props) {
  const htmlPokemon = props.data.map((pokemonData) => (
    <li className="list-item" key={pokemonData.id}>
      <Pokemon pokemonData={pokemonData} />
    </li>
  ));

  return <ul className="main-list">{htmlPokemon}</ul>;
}

PokeList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default PokeList;
