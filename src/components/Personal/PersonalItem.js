import React from "react";
import { useHistory } from "react-router-dom";

import * as PersonalServer from "./PersonalServer";

const PersonalItem = ({ personal, listPersonal }) => {
  const history = useHistory();
  // console.log(props.personal);
  // console.log(personal);

  const handleDelete = async (personalId) => {
    await PersonalServer.deletePersonal(personalId);
    listPersonal();
  };

  return (
    <div className="col-md-4 mb-4">
      <div className="card card-body">
        <h3 className="card-title">
          {personal.name}
          <button onClick={() => history.push(`/updatePersonal/${personal.id}`)} className="ms-2 btn btn-sm btn-info">
            Update
          </button>
        </h3>
        <p className="card-text">
          Founded: <strong>{personal.foundation}</strong>
        </p>
        <a href={personal.website} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
          Go to website
        </a>
        <button onClick={() => personal.id && handleDelete(personal.id)} className="btn btn-danger my-2">
          Delete Company
        </button>
      </div>
    </div>
  );
};

export default PersonalItem;
