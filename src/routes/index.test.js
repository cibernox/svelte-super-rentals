/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/svelte'
import rentals from './rentals/data';
import Index from './index.svelte'
import userEvent from '@testing-library/user-event'

test('Renders one entry for every rental', async () => {
  const { getAllByTestId } = render(Index, { rentals: rentals });
  expect(getAllByTestId('rental')).toHaveLength(3);
});

test('Typing on the searchbox filters out rentals that do not match the text (case insensitive)', async () => {
  const { getAllByTestId, getByTestId } = render(Index, { rentals: rentals });
  await userEvent.type(getByTestId('filter-rentals-input'), 'man');
  expect(getAllByTestId('rental')).toHaveLength(1);
});
 