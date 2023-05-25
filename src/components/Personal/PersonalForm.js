import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";

import * as PersonalServer from "./PersonalServer";

const PersonalForm = () => {
  const history = useHistory();
  const params = useParams();

  // console.log(params);

  const initialState = { id: 0, name: "", foundation: 1950, website: "" };

  const [personal, setPersonal] = useState(initialState);

  const handleInputChange = (e) => {
    // console.log(e.target.name);
    // console.log(e.target.value);
    setPersonal({ ...personal, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res;
      if (!params.id) {
        res = await PersonalServer.registerPersonal(personal);
        const data = await res.json();
        if (data.message === "Success") {
          setPersonal(initialState);
        }
      } else {
        await PersonalServer.updatePersonal(params.id, personal);
      }
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  const getPersonal = async (personalId) => {
    try {
      const res = await PersonalServer.getPersonal(personalId);
      const data = await res.json();
      const { name, foundation, website } = data.personal;
      setPersonal({ name, foundation, website });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (params.id) {
      getPersonal(params.id);
    }
    // eslint-disable-next-line
  }, []);

  return (
    <div className="col-md-3 mx-auto">
      <h2 className="mb-3 text-center">Personal</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input type="text" name="name" value={personal.name} onChange={handleInputChange} className="form-control" minLength="2" maxLength="50" autoFocus required />
        </div>
        <div className="mb-3">
          <label className="form-label">Foundation</label>
          <input type="number" name="foundation" value={personal.foundation} onChange={handleInputChange} className="form-control" min="1900" max="2020" required />
        </div>
        <div className="mb-3">
          <label className="form-label">Website</label>
          <input type="url" name="website" value={personal.website} onChange={handleInputChange} className="form-control" maxLength="100" required />
        </div>
        <div className="d-grid gap-2">
          {params.id ? (
            <button type="submit" className="btn btn-block btn-primary">
              Update
            </button>
          ) : (
            <button type="submit" className="btn btn-block btn-success">
              Register
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default PersonalForm;
