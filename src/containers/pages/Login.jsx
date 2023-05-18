import { connect } from "react-redux"
import { useEffect, useState } from "react";
import { check_authenticated, load_user, login, refresh } from "redux/actions/auth/auth";
import { Link, Navigate } from "react-router-dom";
import { TiLockOpen } from "react-icons/ti";

function Login({
    login,
    isAuthenticated,
    loading,
    refresh,
    check_authenticated,
    load_user,
}){

    useEffect(()=>{
        isAuthenticated ? <></>:
        <>
        {refresh()}
        {check_authenticated()}
        {load_user()}
        </>
    },[])

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const { 
        email,
        password
    } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });


    const onSubmit = e => {
        e.preventDefault();
        login(email, password)
    }

    if(isAuthenticated){
        return <Navigate to='/dashboard'/>
    }
  

    return(
        <>
        <form onSubmit={e=>{onSubmit(e)}} class="container-sm text-center" action="#" method="POST">
          <div class="text-center">
            <img src="https://bafybeievfgfkn76lu5rixoosill3wtacvrxv5ru3y4xu5d7nnuevo3ykuq.ipfs.w3s.link/foxhound.png" 
            class="rounded" 
            alt="..."/>

            </div>
            <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input 
                type="email" 
                class="form-control" 
                id="exampleInputEmail1" 
                aria-describedby="emailHelp" 
                placeholder="Enter email"/>
                
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input 
                type="password" 
                class="form-control" 
                id="exampleInputPassword1" 
                placeholder="Password"/>
            </div>
            <div class="form-group form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    </>

    )
}

const mapStateToProps=state=>({
    isAuthenticated: state.auth.isAuthenticated,
    loading: state.auth.loading
})

export default connect(mapStateToProps,{
    login,
    refresh,
    check_authenticated,
    load_user,
}) (Login)