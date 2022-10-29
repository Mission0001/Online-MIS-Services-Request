import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Requestform from './components/Pages/requestform';
import Login from './components/Pages/login-form';

function App() {
	return (
		<div>
			<Router>
				<Header />
				<Routes>
					<Route path='/' element={<Login />} />
					<Route path='/requestform' element={<Requestform />} />
				</Routes>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
