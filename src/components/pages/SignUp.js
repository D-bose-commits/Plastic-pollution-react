import React from 'react';
import '../../App.css';
import '../Footer.css';


function SignUp() {
  return (
    <div className="box">
    <form>
      <h2>Sign Up</h2>
      <div>
        <input type="email" name="email" placeholder="Email" />
      </div>
      <br />
      <input type="text" name="text" placeholder="First Name" />
      <br />
      <br />
      <input type="text" name="text" placeholder="Last Name" />
      <br />
      <br />
      <input type="password" name="password" placeholder="Password" />
      <br />
      <br />
      <button>Sign Up</button>
      {/* <input type="submit" value="Login" /> */}
    </form>
  </div>
  );
  
}

export default SignUp;
