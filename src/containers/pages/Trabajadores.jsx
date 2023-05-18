import Layout from "hocs/layouts/Layout"
import './../../styles/trabajadores.css';

function Trabajadores() {
    return(
        <Layout>

            <div className="navbar">
                 TRABAJADORES

            </div>
            <div className="body">


            </div>
          <div className="table">
            <table >
                <tr>
                  <th>Rut</th>
                  <th>Nombre</th> 
                  <th>Apellido</th>
                  <th>Dirección</th>
                  <th>Email</th>
                  <th>Actividad</th>

                </tr>

                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>

                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
            </table>
          </div>

        </Layout>
    )
    
}

export default Trabajadores