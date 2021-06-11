/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/svelte'

import Picture from './ResizablePicture.svelte'

test('It renders a picture with the given src and alt', async () => {
  const { getByTestId } = render(Picture, { src: 'img.jpg', alt: 'Description of the image' })
  let img = getByTestId('resizable-picture-img');
  expect(img).toHaveAttribute('src', 'img.jpg');
  expect(img).toHaveAttribute('alt', 'Description of the image');
});

test('shows a thumbnail by default, clicking it makes it bigger and clicking again shows the thumbnail again', async () => {
  const { getByTestId } = render(Picture, { src: 'img.jpg', alt: 'Description of the image' })
  let el = getByTestId('resizable-picture');
  expect(el).not.toHaveClass('large');
  expect(el).toHaveTextContent('View Larger');
  await fireEvent.click(el);
  expect(el).toHaveClass('large');
  expect(el).toHaveTextContent('View Smaller');  
  await fireEvent.click(el);
  expect(el).not.toHaveClass('large');
  expect(el).toHaveTextContent('View Larger');  
});
