import {connect} from "react-redux"


function Layout ({children}){
    return(
        <div>
            {children}
        </div>
    )
}

const mapStateToProps = state =>({

})

export default connect(mapStateToProps, {

}) (Layout)