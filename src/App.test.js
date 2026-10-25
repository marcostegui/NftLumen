// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders NftLumen title', () => {
    render(<App />);
    const titleElement = screen.getByText(/NftLumen/i);
    expect(titleElement).toBeInTheDocument();
});
