import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  actionDeletePokemon,
  actionGetPokemon,
} from "../actions/actionCreators";
import { useEffect } from "react";

function PokemonCard({ pokemon }) {
  const { isSuccess, isError } = useSelector((state) => state.deletePokemon);
  const dispather = useDispatch();
  const navigate = useNavigate();

  const handleChangePage = () => {
    navigate(`/pokemon/${pokemon.id}`);
  };

  const handleDeletePokemon = () => {
    dispather(actionDeletePokemon(pokemon.id));
  };

  useEffect(() => {
    if (isSuccess) {
      dispather(actionGetPokemon());
    }
  }, [isSuccess]);
  return (
    <div className="card col-md-3 m-3">
      <div className="card-header">
        <img
          onClick={handleChangePage}
          className="img card-img"
          src={pokemon.image}
          alt=""
        />
        <div className="d-flex flex-row justify-content-between">
          <div>
            <h4 onClick={handleChangePage}>{pokemon.name}</h4>
          </div>
          <div>
            <span className="btn btn-pill btn-sm btn-success">
              {pokemon.type}
            </span>
          </div>
        </div>
      </div>
      <div className="card-body">
        <p>{pokemon.description}</p>
      </div>
      <div className="card-footer">
        <div className="d-flex flex-row justify-content-between">
          <div>
            <button onClick={handleChangePage} className="btn btn-primary">
              {" "}
              Detail{" "}
            </button>
          </div>
          <div>
            <button onClick={handleDeletePokemon} className="btn btn-danger">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PokemonCard;
