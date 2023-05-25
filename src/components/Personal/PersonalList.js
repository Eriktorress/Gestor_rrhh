import React, { useEffect, useState } from "react";

// Components:
import PersonalItem from "./PersonalItem";

import * as PersonalServer from "./PersonalServer";

const PersonalList = () => {
  const [personal, setPersonal] = useState([]);

  const listPersonal = async () => {
    try {
      const res = await PersonalServer.listPersonal();
      const data = await res.json();
      setPersonal(data.personal);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    listPersonal();
  }, []);

  return (
    <div className="row">
      {personal.map((personal) => (
        <PersonalItem key={personal.id} personal={personal} listPersonal={listPersonal} />
      ))}
    </div>
  );
};

export default PersonalList;
