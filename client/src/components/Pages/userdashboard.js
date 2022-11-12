import React from 'react';
import Image from '/home/janvie/CAPSTONE/Online-MIS-Services-Request/client/src/Images/images.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


const UserDashboard = () => {
	return (
		<div>
			<div className='wrapper3'>
				<div className='dashboard'>
        <h3 className='header'>Student Profile</h3>

					<div className='Avatar'>
						<img src={Image} alt='Avatar' width='60px' height='60px' />
						<p>JANVIE DALUBATAN MISSION</p>
						<p>2019-0081</p>
					</div>

					<h3 className='header'>Menu</h3>
					<div className='nav'>
						<ul>    
							<li><FontAwesomeIcon icon={faHouse}></FontAwesomeIcon>Home</li>
							<Link to="/requestform">	<li>Request</li></Link>

							<li>Account</li>
							<li>Logout</li>
						</ul>
					</div>
				</div>
			</div>

<div>							
</div>

		</div>
	);
};

export default UserDashboard;
