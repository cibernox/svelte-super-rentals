/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/svelte'

import Rental from './Rental.svelte'
const item = 	{ 
  id: 'grand-old-mansion',
  image: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg',
  title: 'Grand Old Mansion',
  owner: 'Veruca Salt',
  type: 'Standalone',
  bedrooms: 15,
  description: "This grand old mansion sits on over 100 acres of rolling hills and dense redwood forests.",
  location: {
    name: 'San Francisco',
    lat: -122.4194,
    lon: 37.7749
  }
};

test('Renders the detailed info of the list', async () => {
  const { findByTestId } = render(Rental, { item })
  expect(await findByTestId('resizable-picture-img')).toBeTruthy();
  expect(await findByTestId('owner')).toHaveTextContent('Veruca Salt')
  expect(await findByTestId('type')).toHaveTextContent('Standalone')
  expect(await findByTestId('city')).toHaveTextContent('San Francisco')
  expect(await findByTestId('bedrooms')).toHaveTextContent('15')
});
