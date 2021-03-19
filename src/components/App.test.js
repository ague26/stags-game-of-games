import React, { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

beforeEach(() => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>);
});

test('renders the stag game of games header', () => {
  const header = screen.getByText(/Stag Game of Games/);
  expect(header).toBeInTheDocument();
});

test('renders the can you find it link', () => {
  const link = screen.getByText(/Can You Find it?/i);
  expect(link).toBeInTheDocument();
});

test('renders the stag gif', () => {
  const gif = screen.getByAltText('logo');
  expect(gif).toBeInTheDocument();
});
