import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionGetPokemonDetail } from "../actions/actionCreators";
import { useParams } from "react-router-dom";

function PokemonDetail() {
  const { pokemon } = useSelector((state) => state.pokemonDetail);
  const dispather = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispather(actionGetPokemonDetail(id));
  }, []);
  return (
    <>
      <div className="card card-body text-warning bg-dark bg-gradient m-4">
        <h3>Pokemon Detail</h3>
      </div>
      <div className="card card-body bg-white bg-gradient m-4">
        <div className="row">
          <div className="col">
            <img className="img card-img" src={pokemon.image} alt="" />
          </div>
          <div className="col">
            <hr />
            <div className="row">
              <div className="col">
                <span className="text-muted">Pokemon name</span>
                <p>{pokemon.name}</p>
              </div>
              <div className="col">
                <span className="text-muted">Pokemon weight</span>
                <p>{pokemon.weight}</p>
              </div>
              <div className="col">
                <span className="text-muted">Pokemon Type</span>
                <p>{pokemon.type}</p>
              </div>
            </div>
            <hr />
            <div className="row">
              <p className="lead">{pokemon.description}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PokemonDetail;
