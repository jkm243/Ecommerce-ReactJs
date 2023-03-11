import Axios from 'axios';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Helmet } from 'react-helmet-async';
import { useContext, useEffect, useState } from 'react';
import { Store } from '../../Store';
import { toast } from 'react-toastify';
import { getError } from '../../utils';
import logo from '../../assets/logo.png'

export default function SigninScreen() {
    const navigate = useNavigate();
    const { search } = useLocation();
    const redirectInUrl = new URLSearchParams(search).get('redirect');
    const redirect = redirectInUrl ? redirectInUrl : '/';

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { state, dispatch: ctxDispatch } = useContext(Store);
    const { userInfo } = state;
    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            const { data } = await Axios.post('/api/users/signin', {
                email,
                password,
            });
            ctxDispatch({ type: 'USER_SIGNIN', payload: data });
            localStorage.setItem('userInfo', JSON.stringify(data));
            navigate(redirect || '/');
        } catch (err) {
            toast.error(getError(err));
        }
    };

    useEffect(() => {
        if (userInfo) {
            navigate(redirect);
        }
    }, [navigate, redirect, userInfo]);

    return (
        <Container className="small-container">
            <div className='bod'>
                <Helmet>
                    <title>Sign In</title>
                </Helmet>
                <div className="container-form fadeInDown">
                    <div className="bg-img"></div>
                    <div className="content">
                        <form onSubmit={submitHandler}>
                            <div>
                                <input onChange={(e) => setEmail(e.target.value)} type="email" className="fadeIn first" name="email" placeholder="Email" id="email" />
                                <input onChange={(e) => setPassword(e.target.value)} type="password" className="fadeIn second" name="password" placeholder="Password" id="password" autoComplete='username' />
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
        </Container>
    );
}