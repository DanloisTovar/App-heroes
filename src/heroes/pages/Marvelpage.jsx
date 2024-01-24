import PropTypes from 'prop-types';
import { HeroesList } from '../components/';

export const Marvelpage = ({ publisher }) => {
	return (
		<>
			<h1>{publisher}</h1>
			<hr />
			<HeroesList publisher={publisher} />
		</>
	);
};
Marvelpage.propTypes = {
	publisher: PropTypes.string.isRequired,
};
