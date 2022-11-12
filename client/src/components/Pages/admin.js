import React from 'react';


const Login = () => {
	return (
		<div className='wrapper4'>
			<div>
				<h1 className='greeting1'>
				</h1>
			</div>
			<div className='form-container'>
				<form className='form2'>
					<fieldset className='formlogin'>
						<h1>Admin Access</h1>
						<p>Valid accounts</p>
						<ul>
							<li>Mywork Account</li>
							<li>Myschool Account</li>
						</ul>
					<input className='input1' type='username' placeholder="Account Username" ></input>
						<br />

						<input className='input1' type='password'  placeholder="Account Password" ></input> <br/>
						<button className='button1' type='submit'>Login</button>

				<p>Forgot Password</p>
					</fieldset>
				</form>
			</div>
		</div>
	);
};

export default Login;
