import { Routes, Route, Navigate } from 'react-router-dom';
/* paths: */
import { Marvelpage, DCpage } from '../heroes';
import { LoginPage } from '../auth';
import { Navbar } from '../UI/';

export const AppRouter = () => {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/marvel" element={<Marvelpage />} />
				<Route path="/dc" element={<DCpage />} />
				<Route path="/login" element={<LoginPage />} />
				<Route path="/" element={<Navigate to="/marvel" />} />
			</Routes>
		</>
	);
};
