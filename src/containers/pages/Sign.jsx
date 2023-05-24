import { connect } from "react-redux"
import { useEffect, useState } from "react";
import { check_authenticated, load_user, login, refresh } from "redux/actions/auth/auth";
import { Link, Navigate } from "react-router-dom";

function Sign({
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
        <form class="container-sm text-center" onSubmit={e => onSubmit(e)}  >

            <div class="col">
                <img
                className="mx-auto h-12 w-auto"
                src="https://bafybeievfgfkn76lu5rixoosill3wtacvrxv5ru3y4xu5d7nnuevo3ykuq.ipfs.w3s.link/foxhound.png"
                alt="Your Company"
                />
            </div>
            <div class="g-start-2">
                <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
                <div class="col-sm-10">
                    <input 
                    type="email" 
                    class="form-control" 
                    id="inputEmail3"
                    placeholder='Email'
                    name='email'
                    value={email}
                    onChange={e => onChange(e)}
                    required
                    />
                </div>
            </div>
            <div class="row mb-3"/>
                <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
                <div class="col-sm-10">
                    <input 
                    id="inputPassword3"
                    className='form-control'
                    type='password'
                    placeholder='Password'
                    name='password'
                    value={password}
                    onChange={e => onChange(e)}
                    minLength='6'
                    required
                    />
            </div>
            <button type="submit" class="btn btn-primary">Sign in</button>
            <p className='mt-3'>
                Don't have an account? <Link to='/signup'>Sign Up</Link>
            </p>
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
}) (Sign)