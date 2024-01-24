import { useParams, Navigate, useNavigate } from 'react-router-dom';
import { getHeroeById } from '../helpers';
/* css */
import '../css/card-heroe.css';

export const Heroe = () => {
	const navigate = useNavigate();
	const { id } = useParams();
	const heroe = getHeroeById(id);

	const onReturn = () => {
		navigate(-1);
	};

	if (!heroe) {
		return <Navigate to="/marvel" />;
	}
	const heroeImgUrl = `/assets/heroes/${id}.jpg`;
	return (
		<>
			<div className="d-flex justify-content-center mt-5">
				<div
					className="card card-animation p-1"
					style={{ width: '18rem' }}
				>
					<img
						src={heroeImgUrl}
						className="card-img-top img-thumbnail"
						alt={heroe.superhero}
					/>
					<div className="card-body">
						<h5 className="card-title">{heroe.superhero}</h5>
						<p className="card-text">
							Alter ego: {heroe.alter_ego}
						</p>
						<p className="card-text">
							Primera aparición: {heroe.first_appearance}
						</p>
						<p className="card-text">
							Personajes: {heroe.characters}
						</p>
					</div>
					<button onClick={onReturn} className="btn btn-primary m-2">
						Atras...
					</button>
				</div>
			</div>
		</>
	);
};
