import Layout from "hocs/layouts/Layout"
import Table from 'react-bootstrap/Table';
/*import index from 'src/styles/'*/


function Trabajadores() {
    return (
        <Layout>
            <Table striped>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombres_per</th>
                        <th>Apellidos_per</th>
                        <th>Rut</th>
                        <th>DV</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody /*class="Centrar"*/>
                    <tr>
                        <td>1</td>
                        <td>Boris</td>
                        <td>Villarroel</td>
                        <td>16790973</td>
                        <td >6</td>
                        <td>brsivc@gmail.com</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Erik</td>
                        <td>Torres</td>
                        <td>15876924</td>
                        <td>2</td>
                        <td>don_erik@gmail.com</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Ignacio</td>
                        <td>Dinamarca</td>
                        <td>21349852</td>
                        <td>8</td>
                        <td>don_nacho@gmail.com</td>
                    </tr>
                </tbody>
            </Table>
        </Layout>

    )

}

export default Trabajadores