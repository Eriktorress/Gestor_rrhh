import Layout from "hocs/layouts/Layout"
import Sidebar from "components/navigation/Siderbar"
import Navbar from "components/navigation/Navbar"

function Home() {
    return(
        <Layout>
            <Sidebar>
                <Navbar/>
            </Sidebar>

        </Layout>
        
        
    )
    
}

export default Home