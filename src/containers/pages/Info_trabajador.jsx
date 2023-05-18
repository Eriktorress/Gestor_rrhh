import Layout from "hocs/layouts/Layout"
import './../../styles/info_trabajadores.css';

function info_trabajador() {
    return(
        <Layout>
          <div className="navbar">
            
          </div>


          <div className="inf_trab">

            <div className="inf_container"> 

              <div className="top">

                <div className="left">
                    <div className="editbutton">
                      Editar
                    </div>
           
                  <div className="item">
                    <img src="https://us.123rf.com/450wm/thesomeday123/thesomeday1231712/thesomeday123171200009/91087331-icono-de-perfil-de-avatar-predeterminado-para-hombre-marcador-de-posici%C3%B3n-de-foto-gris-vector-de.jpg" 
                    alt="" 
                    className="itemImg"
                    /> 
                      <div className="details">
                        <h1 className="itemtitle">Boris Ivan villarroel </h1>
                        <h1 className="titulo">INFORMACIÓN DEL TRABAJADOR</h1>
                        <div className="detailItem">
                          <span className="itemKey">Rut:</span>
                          <span className="itemValue">16.790.973-6</span>
                        </div>
                        <div className="detailItem">
                          <span className="itemKey">Nombre:</span>
                          <span className="itemValue">Boris Ivan Villarroel Collins</span>
                        </div>
                        <div className="detailItem">
                          <span className="itemKey">Fecha de Nacimiento:</span>
                          <span className="itemValue">27/08/1988</span>
                        </div>
                        <div className="detailItem">
                          <span className="itemKey">Email:</span>
                          <span className="itemValue">boris@gmail.com</span>
                        </div>
                        <div className="detailItem">
                          <span className="itemKey">Direccion:</span>
                          <span className="itemValue">Av.condell 1453</span>
                        </div>
                        <div className="detailItem">
                          <span className="itemKey">Sexo:</span>
                          <span className="itemValue">Masculino</span>
                        </div>
                        
                        <h1 className="titulo_2">INFORMACIÓN LABORAL</h1>

                        <div className="detailItem">
                          <span className="itemKey">Empresa:</span>
                          <span className="itemValue">Apple inc</span>
                        </div>
                        <div className="detailItem">
                          <span className="itemKey">Rut Empresa:</span>
                          <span className="itemValue">60.810.000-8</span>
                        </div>
                        <div className="detailItem">
                          <span className="itemKey">Fecha de ingreso:</span>
                          <span className="itemValue">17/05/2023</span>
                        </div>
                        <div className="detailItem">
                          <span className="itemKey">Afp:</span>
                          <span className="itemValue">AFP modelo</span>
                        </div>
                        <div className="detailItem">
                          <span className="itemKey">Salud:</span>
                          <span className="itemValue">Isapre</span>
                        </div>
                        <div className="detailItem">
                          <span className="itemKey">Cargo:</span>
                          <span className="itemValue">COORDINADOR DE SOPORTE TI</span>
                        </div>
                      </div>
                  </div>

                </div>

              </div>

            </div>

          </div>

          
          
          
        
        </Layout>    
    )
    
}
export default info_trabajador