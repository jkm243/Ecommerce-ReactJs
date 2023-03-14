import Axios from 'axios';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import { Helmet } from 'react-helmet-async';
import { useContext, useEffect, useState } from 'react';
import { Store } from '../../Store';
import { toast } from 'react-toastify';
import { getError } from '../../utils';
import logo from '../../assets/logo.png';
import { ToastContainer } from 'react-toastify';

export default function SigninScreen() {
    const navigate = useNavigate();
    const { search } = useLocation();
    const redirectInUrl = new URLSearchParams(search).get('redirect');
    const redirect = redirectInUrl ? redirectInUrl : '/';

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const { state, dispatch: ctxDispatch } = useContext(Store);
    const { userInfo } = state;
    const submitHandler = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            toast.error('Passwords do not match');
            return;
        }
        try {
            const { data } = await Axios.post('/api/users/signup', {
                name,
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
            <ToastContainer position="bottom-center" limit={1} />
            <div className='bod'>
                <Helmet>
                    <title>Sign Up</title>
                </Helmet>
                <div className="container-form fadeInDown">
                    <div className="bg-img"></div>
                    <div className="content2">
                        <form onSubmit={submitHandler}>
                            <div>
                                <input onChange={(e) => setName(e.target.value)} type="name" className="fadeIn first" name="name" placeholder="Name" id="name" />

                                <input onChange={(e) => setEmail(e.target.value)} type="email" className="fadeIn first" name="email" placeholder="Email" id="email" />
                            </div>
                            <div>
                                <input onChange={(e) => setPassword(e.target.value)} type="password" className="fadeIn second" name="password" placeholder="Password" id="password" autoComplete='username' />

                                <input onChange={(e) => setConfirmPassword(e.target.value)} type="password" className="fadeIn second" name="confirmpassword" placeholder="Confirm password" id="confirmpassword" autoComplete='username' />
                            </div>
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
