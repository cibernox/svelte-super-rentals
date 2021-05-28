import rentals from './data';

export const get = async (request) => {
	return {
		body: rentals.find(r => r.id === request.params.slug)
	};
}
