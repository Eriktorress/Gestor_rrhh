import axios from 'axios';

export function getPersons() {
  return axios.get('http://127.0.0.1:8000/personals/')
    .then(response => response.data)
}

export function deletePersons(personalId) {
  return axios.delete('http://127.0.0.1:8000/personals/' + personalId + '/', {
   method: 'DELETE',
   headers: {
     'Accept':'application/json',
     'Content-Type':'application/json'
   }
  })
  .then(response => response.data)
}

export function addPersons(personal){
  return axios.post('http://127.0.0.1:8000/personals/', {
    personalId:null,
    nombre:personal.nombre.value,
    apellido:personal.apellido.value,
    rut:personal.rut.value,
    dv:personal.dv.value,
    email:personal.email.value

  })
    .then(response=>response.data)
}

export function updatePerson(updid, personal) {
  return axios.put('http://127.0.0.1:8000/personals/' + updid + '/', {
    nombre:personal.nombre.value,
    apellido:personal.apellido.value,
    rut:personal.rut.value,
    dv:personal.dv.value,
    email:personal.email.value
  })
   .then(response => response.data)
}

