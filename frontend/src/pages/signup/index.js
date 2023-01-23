import React from 'react'

const SignUp = () => {
  return (
    <div className='bod1'>
          <div class="container-form fadeInDown">
              <div class="bg-img"></div>
              <div class="content">
                  <form>
                      <div class="fadeIn first">
                          <input type="text" name="firstname" placeholder="First name" id="firstname" />
                          <input type="text" name="name" placeholder="Last name" id="name" />
                          <input type="tel" name="tel" placeholder="Telephone" id="telephone" />
                          <input type="email" name="email" placeholder="Email" id="email" />
                          <input type="password" name="password" placeholder="Password" id="password" />

                          {/* <!-- Verification --> */}
                          <div id="message2">dfh</div>

                          <div id="message">
                              <h6>Le mot de passe doit contenir:</h6>
                              <p id="letter" class="invalid">Une lettre <b>minuscule</b></p>
                              <p id="capital" class="invalid">Une lettre <b>majuscule</b></p>
                              <p id="number" class="invalid">Un <b>chiffre</b></p>
                              <p id="length" class="invalid">Au minimum<b> 8 caractères</b></p>
                          </div>
                          {/* <!-- End Verification --> */}

                      </div>
                      <button class="fadeIn second">Sign Up</button>
                  </form>
                  <p class="fadeIn third question">Do you have an account? <a href="index.html">Sign in now</a></p>
                  {/* <img class="fadeIn fourth" src="./img/Netflix_logo.png" width="100" align="center" /> */}
              </div>
          </div>
          <div className="banner_fadeBottom"></div>
    </div>
  )
}

export default SignUp