import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { getPersons } from 'services/PersonService';


const Personals = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
   let mounted = true;
   getPersons()
     .then(data => {
       if(mounted) {
         setStudents(data)
       }
     })
   return () => mounted = false;
 }, [])

  return(
   <div className="container-fluid side-container">
   <div className="row side-row" >
    <p id="before-table"></p>
        <Table striped bordered hover className="react-bootstrap-table" id="dataTable">
        <thead>
            <tr>
            <th >ID</th>
                  <th>Nombre</th>
                  <th>Apellido</th>
                  <th>Rut</th>
                  <th>Dv</th>
                  <th>Email</th>
                  <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {students.map((per) =>
                  <tr key={per.id}>
                  <td>{per.nombre}</td>
                  <td>{per.apellido}</td>
                  <td>{per.rut}</td>
                  <td>{per.dv}</td>
                  <td>{per.Email}</td>
            </tr>)}
        </tbody>
    </Table>
    </div>
  </div>
  );
};

export default Personals;