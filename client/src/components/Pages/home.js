import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
  

const Home = () => {
	const [listofUsers, setListofUsers] = useState([]);

  const [listofUserAccount, setListofUserAccount] = useState([]);

	useEffect(() => {
		axios.get('http://localhost:3001/users').then((response) => {
			setListofUsers(response.data);
		});
	}, []);


  useEffect(() => {
		axios.get('http://localhost:3001/useraccount').then((response) => {
			setListofUserAccount(response.data);
		});
	}, []);

	return (
		<div>
			<div className='wrapper3'>
				<div className='dashboard'>
					<ul>
						<li className="glyphicon glyphicon-user">Home</li>
						<li>Request</li>
						<li>Account</li>
						<li>Logout</li>
					</ul>
				</div>

				<div className='content'>
					<table class='table'>
						<thead>
							<tr>
								<th>No.</th>
								<th>Date</th>
								<th>Updated</th>
								<th>Request Type</th>
								<th>Client</th>
								<th>Status</th>
								<th>Priority</th>
								<th>Alert Level</th>
								<th>Tech</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
							</tr>
						</tbody>
					</table>

          <br/>

					{listofUsers.map((value, key) => {
						return (
							<div className='app'>
								<table>
									<thead>
										<tr>
											<th>No.</th>
											<th>First Name</th>
											<th>Middle Name</th>
											<th>Last Name</th>
											<th>Contact</th>
											<th>Email</th>
											<th>createdAt</th>
											<th>updatedAt</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td className='id'>{value.id}</td>
											<td className='fname'>{value.f_name}</td>
											<td className='mname'>{value.m_name}</td>
											<td className='lname'>{value.l_name}</td>
											<td className='contact'>{value.contact}</td>
											<td className='email'>{value.email}</td>
											<td className='create'>{value.createdAt}</td>
											<td className='update'>{value.updatedAt}</td>
										</tr>
									</tbody>
								</table>


                <table>
									<thead>
										<tr>
											<th>No.</th>
											<th>Email</th>
											<th>Password</th>
											<th>createdAt</th>
											<th>updatedAt</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td className='id'>{value.id}</td>
											<td className='email'>{value.email}</td>
											<td className='password'>{value.password}</td>
											<td className='create'>{value.createdAt}</td>
											<td className='update'>{value.updatedAt}</td>
										</tr>
									</tbody>
								</table>

							</div>
						);
					})}


{listofUserAccount.map((value, key) => {
						return (
							<div className='app'>
								

                <table>
									<thead>
										<tr>
											<th>No.</th>
											<th>Email</th>
											<th>Password</th>
											<th>createdAt</th>
											<th>updatedAt</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td className='id'>{value.id}</td>
											<td className='email'>{value.email}</td>
											<td className='password'>{value.password}</td>
											<td className='create'>{value.createdAt}</td>
											<td className='update'>{value.updatedAt}</td>
										</tr>
									</tbody>
								</table>

							</div>
						);
					})}

				</div>
			</div>
		</div>
	);
};

export default Home;
