import Layout from "hocs/layouts/Layout"
import './../../styles/newuser.css';

function NewUser() {
    return(
        <Layout>
           <div className="navbar">
  
           </div> 
            
            <div className="newUser"> 
                <h1 className="newUserTitle"> Nuevo usuario</h1>
                <form className="newUserForm">
                 <div className="newUserItem">
                        <label> Rut: </label>
                        <input type="text" placeholder="19.999.999-9"/>
                 </div>
                 <div className="newUserItem">
                       <label> Nombre completo: </label>
                       <input type="text" placeholder="Ignacio Andres Dinamarca Yañez"/>
                 </div>
                 <div className="newUserItem">
                        <label> Fono: </label>
                        <input type="text" placeholder="96118402"/>
                 </div>
                 <div className="newUserItem">
                        <label> Direccion: </label>
                        <input type="text" placeholder="Las amolanas 0462"/>
                 </div>
                 <div className="newUserItem">
                        <label> Correo Electronico </label>
                        <input type="text" placeholder="ignacio@duocuc.cl"/>
                 </div>
                 <div className="newUserItem">
                        <label> Contraseña </label>
                        <input type="text" placeholder="*************"/>
                 </div>
                 <div className="newUserItem">
                        <label> Repetir Contraseña </label>
                        <input type="text" placeholder="*************"/>
                 </div>

                 <div className="newUserItem">
                        <label>Genero: </label>
                        <div className="NewUserGenero">
                            <input type="radio" name="gender " id="masculino" value="masculino"/>
                            <label for ="masculino">  masculino  </label>
                            <input type="radio" name="gender " id="femenino" value="femenino"/>
                            <label for ="femenino">  femenino  </label>
                            <input type="radio" name="gender " id="otro" value="otro"/>
                            <label for ="otro">   otro  </label>
                        </div>
                 </div>
                 
                 
                 
                </form> 
            </div>
            
        </Layout>
    )
    
}

export default NewUser