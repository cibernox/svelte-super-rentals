import rentals from './data';

// GET /rentals.json
export const get = async (request) => {
	return { body: rentals };
};
