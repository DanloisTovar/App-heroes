import { heroesInfo } from '../data';

export const getHeroesPublisher = (publisher) => {
	const validPublsher = ['DC Comics', 'Marvel Comics'];

	if (!validPublsher.includes(publisher)) {
		throw new Error(`Publisher "${publisher}" no es correcto`);
	}

	return heroesInfo.filter((hero) => hero.publisher === publisher);
};
