import { render, screen } from '@testing-library/react';
import App from './App';


test('renders the main container div', () => {
  const result = render(<App />);
  const mainContainer = result.container.querySelector("div#main-container")
  expect(mainContainer).toBeInTheDocument();
});
