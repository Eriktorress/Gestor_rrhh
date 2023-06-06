import React,{ useEffect, useState }from 'react';
import {Table} from 'react-bootstrap';

import {Button,ButtonToolbar } from 'react-bootstrap';
import { FaEdit } from 'react-icons/fa';
import { RiDeleteBin5Line } from 'react-icons/ri';
import UpdatePersonalsModal from './UpdatePersonalsModal';
import { getPersons, deletePersons } from 'services/PersonService';
import Layout from 'hocs/layouts/Layout';
import AddPersonalForm from './AddPersonalForm';


const PersonsList = () => {
    const [personals, setPersonals] = useState([]);
    const [addModalShow, setAddModalShow] = useState(false);
    const [editModalShow, setEditModalShow] = useState(false);
    const [edit, setEdit] = useState([]);
    const [isUpdated, setIsUpdated] = useState(false);

    useEffect(() => {
       let mounted = true;
       if(personals.length && !isUpdated) {
        return;
        }
        getPersons()
         . then(data => {
           if(mounted) {
             setPersonals(data);
           }
         })
       return () => {
          mounted = false;
          setIsUpdated(false);
       }
     }, [isUpdated, personals])

    const handleUpdate = (e, per) => {
        e.preventDefault();
        setEditModalShow(true);
        setEdit(per);
    };

    const handleAdd = (e) => {
        e.preventDefault();
        setAddModalShow(true);
    };

    const handleDelete = (e, personalId) => {
        if(window.confirm('¿Estas seguro que lo deseas eliminar?')){
            e.preventDefault();
            deletePersons(personalId)
            .then((result)=>{
                alert(result);
                setIsUpdated(true);
            },
            (error)=>{
                alert("Ha Fallado la eliminación del registro");
            })
        }
    };

    let AddModelClose=()=>setAddModalShow(false);
    let EditModelClose=()=>setEditModalShow(false);
    return(
      <Layout>
          <ButtonToolbar>
              <Button variant="primary" onClick={handleAdd}>
                Agregar Trabajador 
                </Button>
              <AddPersonalForm show={addModalShow} setUpdated={setIsUpdated}
                onHide={AddModelClose}></AddPersonalForm>
         </ButtonToolbar>
        <div className="container-fluid side-container">
        <div className="row side-row" >
        <p id="PersonsList"></p>
            <Table striped bordered hover className="react-bootstrap-table" id="dataTable">
                <thead>
                <tr>
                  <th>ID</th>
                  <th>Nombre</th>
                  <th>Apellido</th>
                  <th>Rut</th>
                  <th>Dv</th>
                  <th>Email</th>
                  <th>Action</th>
                </tr>
                </thead>
                <tbody>
                  { personals.map((per) =>
                  <tr key={per.id}>
                  <td>{per.personalId}</td>
                  <td>{per.nombre}</td>
                  <td>{per.apellido}</td>
                  <td>{per.rut}</td>
                  <td>{per.dv}</td>
                  <td>{per.email}</td>
                  <td>

                  <Button 
                  className="mr-2" 
                  variant="danger"
                  onClick={event => handleDelete(event,per.personalId)}>
                  <RiDeleteBin5Line />
                  </Button>
                  <span>&nbsp;&nbsp;&nbsp;</span>
                  <Button 
                  className="mr-2"
                  onClick={event => handleUpdate(event,per)}>
                  <FaEdit />
                  </Button>
                  <UpdatePersonalsModal 
                  show={editModalShow} 
                  personal={edit} 
                  setUpdated={setIsUpdated}
                  onHide={EditModelClose}>
                  </UpdatePersonalsModal>

                </td>
                </tr>)}
              </tbody>
            </Table>

        </div>
        </div>

      </Layout>
    );
};

export default PersonsList;