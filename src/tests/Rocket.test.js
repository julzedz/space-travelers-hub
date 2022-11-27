import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';

const Rockets = () => (
  <div>
    <h1>My Rockets</h1>
  </div>
);

describe('Rockets', () => {
  test('render React component', () => {
    render(<Rockets />);
    expect(screen.getByText('My Rockets')).toBeInTheDocument();
  });
});
