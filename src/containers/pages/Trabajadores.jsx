import Navbar from "components/navigation/Navbar"
import Sidebar from "components/navigation/Siderbar"
import Layout from "hocs/layouts/Layout"
import './../../styles/trabajadores.css';

function Trabajadores() {
    return(
        <Layout>
          <Sidebar>
            <Navbar/>
            <div className="table">
                <table >
                    <tr>
                      <th>ID</th>
                      <th>Nombre</th> 
                      <th>Apellido</th>
                      <th>Rut</th>
                      <th>DV</th>
                      <th>Email</th>
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
          </Sidebar>

            
        </Layout>
    )
    
}

export default Trabajadores