import PropTypes from 'prop-types';
import { getHeroesPublisher } from '../helpers/';

export const HeroesList = ({ publisher }) => {
	const getHeroes = getHeroesPublisher(publisher);
	return (
		<>
			{getHeroes.map((hero) => (
				<ul key={hero.id}>
					<li>{hero.superhero}</li>
				</ul>
			))}
		</>
	);
};
HeroesList.propTypes = {
	publisher: PropTypes.string.isRequired,
};
