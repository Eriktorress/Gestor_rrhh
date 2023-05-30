import React from 'react';
import {Modal, Col, Row, Form, Button,} from 'react-bootstrap';
import { addPersons } from 'services/PersonService';


const AddPersonalForm = (props) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        addPersons(e.target)
        .then((result)=>{
            alert(result);
            props.setUpdated(true);
        },
        (error)=>{
            alert("Ha fallado el agregar un trabajador");
        })
    }

    return(
        <div className="container">

            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered >

                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Información del trabajador
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col sm={6}>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group controlId="nombre">
                                    <Form.Label>
                                        Nombre
                                    </Form.Label>
                                    <Form.Control 
                                    type="text" 
                                    name="nombre" 
                                    required 
                                    placeholder="Nombre completo"
                                    />
                            </Form.Group>
                            <Form.Group controlId="apellido">
                                    <Form.Label>
                                        Apellido
                                    </Form.Label>
                                    <Form.Control 
                                    type="text" 
                                    name="apellido" 
                                    required 
                                    placeholder="Apellido paterno y materno" 
                                    />
                            </Form.Group>
                            <Form.Group controlId="rut">
                                    <Form.Label>
                                        Rut
                                    </Form.Label>
                                    <Form.Control 
                                    type="number" 
                                    name="rut"
                                    max_length="9" 
                                    required 
                                    placeholder="Sin puntos ni guión" 
                                    />
                            </Form.Group>
                            <Form.Group controlId="dv">
                                    <Form.Label>
                                        Dv
                                    </Form.Label>
                                    <Form.Control 
                                    type="text" 
                                    name="dv"
                                    max_length="1"  
                                    required 
                                    placeholder="" 
                                    />
                            </Form.Group>          
                            <Form.Group controlId="email">
                                    <Form.Label>
                                        Email
                                    </Form.Label>
                                    <Form.Control 
                                    type="email" 
                                    name="email" 
                                    required 
                                    placeholder="" 
                                    />
                            </Form.Group>
                            <Form.Group>
                                <p></p>
                                <Button 
                                variant="primary" 
                                type="submit">
                                Guardar
                                </Button>
                            </Form.Group>
                            </Form>
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                <Button 
                variant="danger" 
                type="submit" 
                onClick={props.onHide}> 
                Cerrar
                </Button>

                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default AddPersonalForm;