import React from 'react';

const Login = () => {
	return (
		<div className='wrapper'>
			<div className='container'>
				<form>
					<h1>MIS Service Request Form</h1>
					<fieldset>
						<p className='bold'><b>A. Contact Information of Requestor</b></p>
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

							<label htmlFor='email'>Email Address:</label>
							<input type='email'></input>
							<br />
						</div>
						<div className='checkboxwrapper'>
							<input type='checkbox'></input>
							<label htmlFor='student'>Student</label>
							<input type='checkbox'></input>
							<label htmlFor='employee'>Employee</label>
							<input type='checkbox'></input>
							<label htmlFor='others'>others, please specify:</label>
							<input className="others" type='text'></input>
						</div>

						<p className='bold'><b>B. Type of Service (Select as appropriate)</b></p>
						<p>I need help with:</p>

						<div className='service-list'>
							<input type='checkbox' />
							<label htmlFor='desktop'>
								Desktop/Laptop PCs, IP Phone, Printers, Monitors (Tech Support
								Services)
							</label>
							<p>Category of Service*</p>
							<input type='checkbox' />
							<label htmlFor=''>
								Email Help, Email Address: <input type='email' />
							</label>
							<br />
							<input type='checkbox' />
							<label htmlFor='install'>Install Software</label>
							<input type='checkbox' />
							<label htmlFor='virus'>Virus Help</label>
							<input type='checkbox' />
							<label htmlFor='data'>Data Help</label>
							<br />
							<input type='checkbox' />
							<label htmlFor='install/setup equipment'>
								Install/Setup New Equipment, Type of Equipment:{' '}
								<input type='text' />
							</label>
							<p>Problem w/ Equipment, Type of Equipment:</p>
							<input type='checkbox' />
							<label htmlFor='IS'>
								IS, Network, Internet, Wireless, Fiber, Security Cameras (Data
								Services)
							</label>
							<br />
							<p>Category of Service*</p>
							<input type='checkbox' />
							<label htmlFor='new-network'>New Network Connection</label>
							<input type='checkbox' />
							<label htmlFor='upgrade-network'>
								Upgrade Existing Network Service
							</label>
							<br />
							<input type='checkbox' />
							<label htmlFor='problem'>
								Problem (Existing network or internet Connection)
							</label>
							<br />
							<input type='checkbox' />
							<label htmlFor='others'>
								Others (Detailed in Request Description
							</label>
							<p className='bold'><b>C. Request Description*</b></p>
							<p>
								Please provide detailed info about your request (i.e. problem
								description, needed by date, additional contacts and any other
								info not detailed above)
							</p>
							<textarea
								name='request-description'
								id=''
								cols='90'
								rows='5'
							></textarea>
							<input type='file' />
							<label htmlFor='signature'>Signature of Requestor & Date</label>
							<p>Received by:</p>{' '}
							<p>This portion will be filled by MIS Service Desk Personnel</p>
						</div>
					</fieldset>

					<button type='submit'>Submit</button>
				</form>
			</div>

			<div className='container-rightside'>
				<form>
					<h1>MIS Service Response Slip </h1>
					<fieldset>
						<div>
							<p><b>Information on Action Taken</b></p>
							<label htmlFor='srf-no'>SRF No.:</label>
							<input type='text'></input> <br />
							<label htmlFor='service-desc'>Service Description:</label>
							<input type='text'></input>
							<br />
							<label htmlFor='details'>Details on Action Taken:</label>
							<textarea
								name='request-description'
								id=''
								cols='90'
								rows='5'
							></textarea>
							<div className='horizontal'>
								<input type='checkbox'></input>
								<label htmlFor='solved'>Solved</label>
								<br />
								<input type='checkbox'></input>
								<label htmlFor='unsolved'>Unsolved, reason:</label>
								<input type='text'></input> <br />
							</div>
							<table class='table'>
								<thead>
									<tr>
										<th>Executed & Prepared by</th>
										<th>Approved by (Requisitioner):</th>
										<th>Noted by (ICT Head):</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>
											Date: <input type='date'></input>
										</td>
										<td>
											Date: <input type='date'></input>
										</td>
										<td>
											Date: <input type='date'></input>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</fieldset>
				</form>
			</div>
		</div>
	);
};

export default Login;
