import { text } from '@sveltejs/kit';

export const GET = async () => {
	const response = await fetch('https://medium.com/feed/@naufalh39');
	const data = await response.text();

	return text(data);
};
