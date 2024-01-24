import { Link, NavLink, useNavigate } from 'react-router-dom';

export const Navbar = () => {
	const navigate = useNavigate();
	const onLogout = () => {
		navigate('/login', {
			replace: true,
		});
	};
	return (
		<nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
			<Link className="navbar-brand" to="/">
				Asociaciones
			</Link>
			<button
				className="navbar-toggler"
				type="button"
				data-bs-toggle="collapse"
				data-bs-target="#navbarNav"
				aria-controls="navbarNav"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse" id="navbarNav">
				<div className="navbar-nav">
					<NavLink
						className={({ isActive }) =>
							`nav-item nav-link ${isActive ? 'activo' : ''}`
						}
						to="/marvel"
					>
						Marvel
					</NavLink>
					<NavLink
						className={({ isActive }) =>
							`nav-item nav-link ${isActive ? 'activo' : ''}`
						}
						to="/dc"
					>
						DC
					</NavLink>
					<span className="nav-item nav-link text-primary">
						Logout
					</span>
					<button
						className="nav-item nav-link btn"
						onClick={onLogout}
					>
						Logout
					</button>
				</div>
			</div>
		</nav>
	);
};
