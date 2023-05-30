import Navbar from 'components/navigation/Navbar';
import Sidebar from 'components/navigation/Siderbar';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { check_authenticated, load_user } from 'redux/actions/auth/auth';

const Layout = ({ check_authenticated, load_user, children }) => {
    useEffect(() => {
        check_authenticated();
        load_user();
    }, []);

    return ( 
         <div> 
           <Sidebar>
            <Navbar>

            </Navbar>
                {children}
            </Sidebar>
            </div>      

    );
};

export default connect(null, { check_authenticated, load_user })(Layout);