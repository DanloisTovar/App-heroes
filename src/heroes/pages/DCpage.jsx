import PropTypes from 'prop-types';
import { HeroesList } from '../components/HeroesList';

export const DCpage = ({ publisher }) => {
	return (
		<>
			<h1>{publisher}</h1>
			<hr />
			<HeroesList publisher={publisher} />
		</>
	);
};
DCpage.propTypes = {
	publisher: PropTypes.string.isRequired,
};
