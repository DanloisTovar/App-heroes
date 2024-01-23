import { Routes, Route, Navigate } from 'react-router-dom';
/* paths */
import { Navbar } from '../../UI';
import { DCpage, Marvelpage, Search, Heroe } from '../pages';

export const HeroesRoutes = () => {
	return (
		<>
			<Navbar />
			<div className="container">
				<Routes>
					<Route path="/marvel" element={<Marvelpage />} />
					<Route path="/dc" element={<DCpage />} />

					{/* Search, Hero by id */}
					<Route path="/search" element={<Search />} />
					<Route path="/heroe" element={<Heroe />} />
					<Route path="/" element={<Navigate to="/marvel" />} />
				</Routes>
			</div>
		</>
	);
};
