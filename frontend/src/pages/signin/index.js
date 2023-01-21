import React from 'react'
// import './signin.css'

const SignIn = () => {
    return (
        <div className='bod'>
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
                    <p class="fadeIn fourth">New to Netflix? <a href="sign-up.html">Sign up now</a></p>
                    {/* <img class="fadeIn fourth" src="./assets/Netflix_logo.png" width="100" align="center" alt='img-form' /> */}
                </div>
            </div>
            <div className="banner_fadeBottom"></div></div>
    )
}

export default SignIn