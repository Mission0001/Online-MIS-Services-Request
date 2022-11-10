import React from 'react';
import Logo1 from '../Images/mylogo.png';

const Header = () => {
	return (
		<div className='header'>
			<div className='logo'>
				<h1 className='logocolor'>
        <img src={Logo1} alt='logo'/> </h1>
				<h2 className='color2'></h2>
			</div>
		</div>
	);
};
export default Header;
