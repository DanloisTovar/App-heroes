import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CharactersByHero = ({ alter_ego, characters }) => {
	if (alter_ego === characters) return <></>;
	return <li className="list-group-item">{characters}</li>;
};

export const HeroesCards = ({
	id,
	superhero,
	publisher,
	alter_ego,
	first_appearance,
	characters,
}) => {
	const heroeImgUrl = `/assets/heroes/${id}.jpg`;
	return (
		<div key={id} className="col-lg-3 col-md-6 mb-4">
			<div className="card h-100">
				<img
					src={heroeImgUrl}
					className="card-img-top"
					alt={superhero}
				/>
				<div className="card-body">
					<h5 className="card-title">{superhero}</h5>
					<p className="card-text">{alter_ego}</p>
				</div>
				<ul className="list-group list-group-flush">
					<li className="list-group-item">{publisher}</li>
					<li className="list-group-item">{first_appearance}</li>

					{/* {alter_ego !== characters && (
						<li className="list-group-item">{characters}</li>
					)} */}
					<CharactersByHero
						characters={characters}
						alter_ego={alter_ego}
					/>
				</ul>

				<Link to={`/heroe/${id}`} className="btn btn-primary">
					Mas info
				</Link>
			</div>
		</div>
	);
};

HeroesCards.propTypes = {
	id: PropTypes.string.isRequired,
	superhero: PropTypes.string.isRequired,
	publisher: PropTypes.string.isRequired,
	alter_ego: PropTypes.string.isRequired,
	first_appearance: PropTypes.string.isRequired,
	characters: PropTypes.string.isRequired,
};
CharactersByHero.propTypes = {
	alter_ego: PropTypes.string.isRequired,
	characters: PropTypes.string.isRequired,
};
