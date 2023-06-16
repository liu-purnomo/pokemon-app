import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionGetPokemon } from "../actions/actionCreators";
import PokemonCard from "../components/PokemonCard";
import { useParams } from "react-router-dom";

function HomePage() {
  const { pokemons } = useSelector((state) => state.pokemons);
  const { type } = useParams();

  const dispather = useDispatch();

  useEffect(() => {
    dispather(actionGetPokemon(type));
  }, [type]);
  return (
    <>
      <div className="card card-body text-warning bg-dark bg-gradient m-4">
        <h3>Pokemon List</h3>
      </div>
      <div className="bg-gradient m-4">
        <div className="row">
          {pokemons?.map((pokemon) => (
            <PokemonCard pokemon={pokemon} key={pokemon.id} />
          ))}
        </div>
      </div>
    </>
  );
}

export default HomePage;
