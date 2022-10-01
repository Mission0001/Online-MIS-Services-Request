import React from 'react';
import './App.css';

function App() {
	return (
		<div className='wrapper'>
			<h1>MIS Service Request Form</h1>
			<div className='container'>
				<form>
					<fieldset>
						<p className='bold'>A. Contact Information of Requestor</p>
						<div className='contact-info'>
							<label htmlFor='Name'>Name:</label>
							<input name='Firstname' required />
							<input name='Middlename' required />
							<input name='Lastname' required />
							<input name='Ext Name (Jr/Sr)' />

							<label htmlFor='date'>Date:</label>
							<input type='date'></input>
						</div>
						<div className='contact-label'>
							<label htmlFor='Firstname'>Firstname</label>
							<label htmlFor='Firstname'>Middlename</label>
							<label htmlFor='Firstname'>Lastname</label>
							<label htmlFor='Ext Name (Jr/Sr)'>Ext Name (Sr/Sr)</label>
						</div>
						<div className='contact-label2'>
							<label htmlFor='contact-no'>Contact No.:</label>
							<input type='tel'></input>

							<label htmlFor='email'>Email:</label>
							<input type='email'></input>

							<input type='checkbox'></input>
							<label htmlFor='student'>Student</label>
							<input type='checkbox'></input>
							<label htmlFor='employee'>Employee</label>
							<input type='checkbox'></input>
							<label htmlFor='others'>others, please specify:</label>
							<input type='text'></input>
						</div>


						<p className='bold'>B. Type of Service (Select as appropriate)</p>
						<p>I need help with:</p>

						<div className='service-list'>
							<input type='checkbox' />
							<label htmlFor='desktop'>
								Desktop/Laptop PCs, IP Phone, Printers, Monitors (Tech Support
								Services)
							</label>

							<p>Category of Service*</p>
							<input type='checkbox' />
							<label htmlFor=''>Email Help, Email Address: <input type="email" /></label><br/>

                            <input type='checkbox' />
                            <label htmlFor='install'>Install Software</label>
                            <input type="checkbox" />
                            <label htmlFor='virus'>Virus Help</label>
                            <input type="checkbox" />
                            <label htmlFor='data'>Data Help</label><br />

                            <input type="checkbox" />
                            <label htmlFor='install/setup equipment'>Install/Setup New Equipment, Type of Equipment: <input type="text" /></label>

                        <p>Problem w/ Equipment, Type of Equipment:</p>

                        <input type="checkbox" />
                        <label htmlFor='IS'>IS, Network, Internet, Wireless, Fiber, Security Cameras (Data Services)</label><br />

                        <p>Category of Service*</p>

                        <input type="checkbox" />
                        <label htmlFor='new-network'>New Network Connection</label>
                        <input type="checkbox" />
                        <label htmlFor='upgrade-network'>Upgrade Existing Network Service</label><br />

                        <input type="checkbox" />
                        <label htmlFor="problem">Problem (Existing network or internet Connection)</label><br/>
                        <input type="checkbox" />
                        <label htmlFor="others">Others (Detailed in Request Description</label>

                        <p className='bold'>C. Request Description*</p>
                        <p>Please provide detailed info about your request (i.e. problem description, needed by date, additional contacts and any other info not detailed above)</p>
                        <textarea name="request-description" id="" cols="90" rows="5"></textarea>
						</div>

					</fieldset>

					<button type='submit'>Submit</button>
				</form>
			</div>
		</div>
	);
}

export default App;
