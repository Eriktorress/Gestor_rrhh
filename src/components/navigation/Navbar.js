import {connect} from 'react-redux'
import '../../styles/Navbar.css';
import {NotificationsNone,Language,Settings} from '@material-ui/icons';



function Navbar(){
    return (
        <div className='navbar'>
           <div className='topbarWrapper'>
                <div className='topleft'>
                    <span className='logo'>GESTION RR.HH  </span>  
                </div>

                <div className='topright'>
                    <div className="topbarIconContainer">
                        <NotificationsNone/>
                        <span className='topIconBadge'>2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Language/>
                        <span className='topIconBadge'>2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Settings/>
                    </div>
                    <img src='https://us.123rf.com/450wm/thesomeday123/thesomeday1231712/thesomeday123171200009/91087331-icono-de-perfil-de-avatar-predeterminado-para-hombre-marcador-de-posici%C3%B3n-de-foto-gris-vector-de.jpg' alt='' className='topavatar'></img>
                </div>
           </div>
        </div>
    )

}

const mapStateToProps = state=>({

})

export default connect (mapStateToProps, {

}) (Navbar)