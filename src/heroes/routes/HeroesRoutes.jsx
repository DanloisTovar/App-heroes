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
					<Route
						path="marvel"
						element={<Marvelpage publisher="Marvel Comics" />}
					/>
					<Route
						path="dc"
						element={<DCpage publisher="DC Comics" />}
					/>

					<Route path="search" element={<Search />} />
					<Route path="heroe/:id" element={<Heroe />} />

					<Route path="/" element={<Navigate to="/marvel" />} />
				</Routes>
			</div>
		</>
	);
};
