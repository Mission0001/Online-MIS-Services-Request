import React from 'react';

const Login = () => {
	return (
		<div className='wrapper2'>
			<div>
				<h1 className='greeting'>
					Welcome to <br />
					Caraga State University Cabadbaran City <br />
					MIS Services Request
				</h1>
			</div>
			<div>
				<form className='form1'>
					<fieldset className='formlogin'>
						<h1>Sign in</h1>
						<p>Valid accounts</p>
						<ul>
							<li>Mywork Account</li>
							<li>Myschool Account</li>
						</ul>
					<input className='input1' type='username' placeholder="Account Username" ></input>
						<br />

						<input className='input1' type='password'  placeholder="Account Password" ></input> <br/>
						<button className='button1' type='submit'>Submit</button>

				<p>Forgot Password</p>
					</fieldset>
				</form>
			</div>
		</div>
	);
};

export default Login;
