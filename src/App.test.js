import { render, screen } from '@testing-library/react';
import App from './App';


test('renders learn react link', () => {
  render(<App />);
  const inputElement = screen.getByPlaceholderText("Type in the name of the character...");
  expect(inputElement).toBeInTheDocument();
});
