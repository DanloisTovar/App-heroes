import { heroesInfo } from '../data';

export const getHeroeById = (id) => {
	return heroesInfo.find((heroe) => heroe.id === id);
};
