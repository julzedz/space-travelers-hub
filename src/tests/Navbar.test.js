import { render, screen } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../components/Navbar';

describe('Navbar', () => {
  test('correct render of Navbar', () => {
    const navbar = render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>,
    );
    expect(navbar).toMatchSnapshot();
  });
  test("Check for 'My Profile' in the rendered Navbar", () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>,
    );
    expect(screen.getByText('My Profile')).toBeInTheDocument();
  });
});
