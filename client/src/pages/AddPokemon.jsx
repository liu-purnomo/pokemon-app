import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionPostPokemon, actionResetData } from "../actions/actionCreators";
import { useNavigate } from "react-router-dom";

function AddPokemon() {
  const [isEmpty, setIsEmpty] = useState(false);
  const [formValue, setFormValue] = useState({
    name: undefined,
    type: undefined,
    description: undefined,
    weight: undefined,
    image: undefined,
  });

  const { isError, isSuccess, errorMessage } = useSelector(
    (state) => state.postPokemon
  );

  const navigate = useNavigate();

  const dispather = useDispatch();

  const inputOnChangeHandler = (event) => {
    setFormValue({
      ...formValue,
      [event.target.name]: event.target.value,
    });
  };

  const handleOnSubmitForm = async (event) => {
    event.preventDefault();
    if (
      formValue.name === undefined ||
      formValue.type === undefined ||
      formValue.description === undefined ||
      formValue.weight === undefined ||
      formValue.image === undefined
    ) {
      setIsEmpty(true);
    } else {
      dispather(actionPostPokemon(formValue));
    }
  };

  useEffect(() => {
    if (isSuccess) {
      dispather(actionResetData());
      navigate("/");
    }
  }, [isSuccess]);

  return (
    <div className="container mt-4 mb-4">
      <div className="col-md-6 mx-auto">
        {isEmpty ? (
          <div>
            <p className="bg-warning p-2">Please fill all the field</p>
          </div>
        ) : (
          ""
        )}

        {isError ? (
          <div>
            <p className="bg-warning p-2">{errorMessage}</p>
          </div>
        ) : (
          ""
        )}

        <form onSubmit={handleOnSubmitForm}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              onChange={inputOnChangeHandler}
              name="name"
              type="text"
              className="form-control"
              placeholder="input pokemon name here"
            ></input>
          </div>
          <div className="mb-3">
            <label className="form-label">Type</label>
            <select
              className="form-select"
              name="type"
              onChange={inputOnChangeHandler}
            >
              <option value="">Select Pokemon Type</option>
              <option value="fire">Fire</option>
              <option value="water">Water</option>
              <option value="grass">Grass</option>
            </select>
          </div>
          <div className="mb-3">
            <label>Pokemon description</label>
            <textarea
              className="form-control"
              onChange={inputOnChangeHandler}
              name="description"
              rows="3"
            ></textarea>
          </div>
          <div className="mb-3">
            <label className="form-label">Pokemon weight</label>
            <input
              onChange={inputOnChangeHandler}
              name="weight"
              type="text"
              className="form-control"
              placeholder="input pokemon weight here"
            ></input>
          </div>
          <div className="mb-3">
            <label className="form-label">Pokemon image url</label>
            <input
              onChange={inputOnChangeHandler}
              name="image"
              type="text"
              className="form-control"
              placeholder="input pokemon image url here"
            ></input>
          </div>
          <div className="mt-3">
            <button className="btn btn-success col-sm-12" type="submit">
              Add new pokemon
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddPokemon;
