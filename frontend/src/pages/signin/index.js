import React from 'react'
import { Helmet } from 'react-helmet-async';
import { Link, useLocation } from 'react-router-dom'
import logo from '../../assets/logo.png'

const SignIn = () => {
    const {search}=useLocation();
    const redirectInUrl = new URLSearchParams(search).get('redirect');
    const redirect = redirectInUrl ? redirectInUrl : '/'
    return (
        <div className='bod'>
            <Helmet>
                <title>Sign In</title>
            </Helmet>
            <div class="container-form fadeInDown">
                <div class="bg-img"></div>
                <div class="content">
                    <form>
                        <div>
                            <input type="email" class="fadeIn first" name="email" placeholder="Email" id="email" />
                            <input type="password" class="fadeIn second" name="password" placeholder="Password" id="password" />
                        </div>
                        {/* <!-- Verification --> */}
                        <div id="message2">dfh</div>
                        {/* <!-- End verification --> */}
                        <button class="fadeIn third">Sign in</button>
                    </form>
                <p class="fadeIn fourth">New to Netflix? {' '}
                    <Link to={`/signup?redirect=${redirect}`}>Sign up now</Link>
                    </p>
                    <img class="fadeIn fourth" src={logo} width="100" align="center" alt='img-form' />
                </div>
            </div>
            <div className="banner_fadeBottom"></div></div>
    )
}

export default SignIn