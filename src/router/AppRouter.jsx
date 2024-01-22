import { Routes, Route, Navigate } from 'react-router-dom';
import { Marvelpage, DCpage } from '../heroes/pages/';
import { LoginPage } from '../auth/pages/';
export const AppRouter = () => {
	return (
		<>
			<Routes>
				<Route path="/marvel" element={<Marvelpage />} />
				<Route path="/dc" element={<DCpage />} />
				<Route path="/login" element={<LoginPage />} />
				<Route path="/" element={<Navigate to="/marvel" />} />
			</Routes>
		</>
	);
};
