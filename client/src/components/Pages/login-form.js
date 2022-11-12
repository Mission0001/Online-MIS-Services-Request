import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const Login = () => {  


	const initialValues = {
		username: "",
		password: "",
	};


	const validationSchema = Yup.object().shape({
email: Yup.string().required(),
password: Yup.string().required(),
	});

	const onSubmit = (data) => {
		axios.post('http://localhost:3001/useraccount', data).then((response) => {
			// eslint-disable-next-line no-undef
			setListofUserAccount(response.data);
		});	};

	return (
		<div className='wrapper2'>
			<div>
				<h1 className='greeting'>
					Welcome to <br />
					Caraga State University Cabadbaran City <br />
					MIS Services Request
				</h1>
			</div>

			<div className='form1'>
				<h1>Sign in</h1> <br />
				<Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
					<Form className='formContainer'>
						<label>Email:</label>
						<ErrorMessage name="email" component="span" />
						<br />
						<Field
							autocomplete='off'
							id='inputuseraccount'
							name='email'
							placeholder='(Ex. janvie.mission@csucc.edu.ph...)'
						/>
						<br />
						<label>Password:</label>
						<ErrorMessage name="password" component="span" />

						<br />
						<Field
							autocomplete='off'
							id='inputuseraccount'
							type="password"
							name='password'
							placeholder='(Ex. Csucc123 ...)'
							onBlur={Formik.handleBlur}
 
						/>
						
						<br />
							<button type='submit'>Submit</button>

				
					</Form>
				</Formik>
			</div>
		</div>
	);
};

export default Login;
