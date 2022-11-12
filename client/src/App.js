import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Requestform from './components/Pages/requestform';
import Login from './components/Pages/login-form';
import Home from './components/Pages/home';
import Admin from './components/Pages/admin';
import UserDashboard from './components/Pages/userdashboard';
import Error from './components/Pages/error';

function App() {
	return (
		<div>
	
			<Router>			
				{window.location.pathname !== '/admin' && <Header />}
				<Routes>
					<Route path='/' element={<Login />} />
					<Route path='/requestform' element={<Requestform />} />
					<Route path='/home' element={<Home />} />
					<Route path='/admin' element={<Admin />} />
					<Route path='/userdashboard' element={<UserDashboard />} />
					<Route  path="/*" element={<Error />} /> 

				</Routes>
			</Router>
			{window.location.pathname !== '/admin' && <Footer />}

		</div>
	);
}

export default App;
