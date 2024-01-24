import PropTypes from 'prop-types';
import { getHeroesPublisher } from '../helpers/';
import { HeroesCards } from './HeroesCards';

export const HeroesList = ({ publisher }) => {
	const getHeroes = getHeroesPublisher(publisher);
	return (
		<div className="row">
			{getHeroes.map((hero) => (
				<HeroesCards key={hero.id} {...hero} />
			))}
		</div>
	);
};
HeroesList.propTypes = {
	publisher: PropTypes.string.isRequired,
};
