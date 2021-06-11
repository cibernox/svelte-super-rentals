/**
 * @jest-environment jsdom
 */

 import '@testing-library/jest-dom/extend-expect'
 import { render, fireEvent } from '@testing-library/svelte'
 import rentals from './rentals/data';
 import Index from './index.svelte'
 
 test('Renders one entry for every rental', async () => {
   const { getAllByTestId } = render(Index, { rentals: rentals });
   expect(getAllByTestId('rental')).toHaveLength(3);
 });
 