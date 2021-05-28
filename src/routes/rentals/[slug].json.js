import rentals from './data';

export const get = async (request) => {
	debugger;
	return {
		body: rentals.find(r => r.id === request.params.slug)
	};
}
