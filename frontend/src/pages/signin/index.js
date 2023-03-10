import { Axios } from 'axios';
import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async';
import { Link, useLocation } from 'react-router-dom'
import logo from '../../assets/logo.png'

const SignIn = () => {
    const {search}=useLocation();
    const redirectInUrl = new URLSearchParams(search).get('redirect');
    const redirect = redirectInUrl ? redirectInUrl : '/';

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitHandler = async(e) => {
        e.preventDefault();
        try {
            const { data } = await Axios.post('/api/users/signin', {
                email,
                password,
            });
            console.log(data);
        } catch (err) {
            console.log("error");
        }
    }
    return (
        <div className='bod'>
            <Helmet>
                <title>Sign In</title>
            </Helmet>
            <div className="container-form fadeInDown">
                <div className="bg-img"></div>
                <div className="content">
                    <form onSubmit={submitHandler}>
                        <div>
                            <input onChange={(e)=> setEmail(e.target.value)} type="email" className="fadeIn first" name="email" placeholder="Email" id="email" />
                            <input onChange={(e) => setPassword(e.target.value)} type="password" className="fadeIn second" name="password" placeholder="Password" id="password" autoComplete='username'/>
                        </div>
                        {/* <!-- Verification --> */}
                        <div id="message2">dfh</div>
                        {/* <!-- End verification --> */}
                        <button type='submit' className="fadeIn third bt">Sign in</button>
                    </form>
                <p className="fadeIn fourth">New to Netflix? {' '}
                    <Link to={`/signup?redirect=${redirect}`}>Sign up now</Link>
                    </p>
                    <img className="fadeIn fourth" src={logo} width="100" align="center" alt='img-form' />
                </div>
            </div>
            <div className="banner_fadeBottom"></div></div>
    )
}

export default SignIn