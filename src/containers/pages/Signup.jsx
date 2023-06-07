import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { signup } from 'redux/actions/auth/auth';
import axios from 'axios';

const Signup = ({ signup, isAuthenticated }) => {
    const navigate = useNavigate();
    const [accountCreated, setAccountCreated] = useState(false);
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        re_password: ''
    });

    const { first_name, last_name, email,  password, re_password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();

        if (password === re_password) {
            signup( first_name, last_name, email,  password, re_password);
            setAccountCreated(true);
        }
    };

    const continueWithGoogle = async () => {
        try {
            const res = await axios.get(`${process.env.REACT_APP_API_URL}/auth/o/google-oauth2/?redirect_uri=${process.env.REACT_APP_API_URL}/google`)

            window.location.replace(res.data.authorization_url);
        } catch (err) {

        }
    };


    if (isAuthenticated) {
        return <navigate to='/dashboard' />
    }
    if (accountCreated) {
        return <navigate to='/' />
    }

    return (
        <>
        <div className='container mt-5'>
            
            
            <form onSubmit={e => onSubmit(e)}>
                <div><h1>Registrarse</h1></div>
                
                <h2>Crea tu cuenta</h2>
                <div className='form-group'>
                    <input
                        className='form-control'
                        type='text'
                        placeholder='First Name*'
                        name='first_name'
                        value={first_name}
                        onChange={e => onChange(e)}
                        required
                    />
                </div>
                <div className='form-group'>
                    <input
                        className='form-control'
                        type='text'
                        placeholder='Last Name*'
                        name='last_name'
                        value={last_name}
                        onChange={e => onChange(e)}
                        required
                    />
                </div>
                <div className='form-group'>
                    <input
                        className='form-control'
                        type='email'
                        placeholder='Email*'
                        name='email'
                        value={email}
                        onChange={e => onChange(e)}
                        required
                    />
                </div>
                <div className='form-group'>
                    <input
                        className='form-control'
                        type='password'
                        placeholder='Password*'
                        name='password'
                        value={password}
                        onChange={e => onChange(e)}
                        minLength='6'
                        required
                    />
                </div>
                <div className='form-group'>
                    <input
                        className='form-control'
                        type='password'
                        placeholder='Confirm Password*'
                        name='re_password'
                        value={re_password}
                        onChange={e => onChange(e)}
                        minLength='6'
                        required
                    />
                </div>
                <button className='btn btn-primary' type='submit'>Registrar</button>
                <button className='btn btn-danger' onClick={continueWithGoogle}>Continuar con Google
            </button>
            </form>
            <br />
            <p className='mt-3'>
                ¿Ya posees una cuenta? <Link to='/'>Inicia sesión</Link>
            </p>
        </div>
        </>
    );
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { signup })(Signup);
