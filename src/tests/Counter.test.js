// Import necessary react testing library helpers
import { render, screen, fireEvent } from '@testing-library/react';
// Import the Counter component
import Counter from '../components/Counter';

describe('Counter Component', () => {
  beforeEach(() => {
    // Render the Counter component before each test
    render(<Counter />);
  });

  describe('Initial Render', () => {
    test('displays the Counter heading', () => {
      // Verify the Counter heading is displayed
      const counterHeading = screen.getByRole('heading', { level: 2 }); // Access heading with role
      expect(counterHeading).toHaveTextContent('Counter');
    });

    test('shows initial count as 0', () => {
      // Verify the initial count is displayed as 0
      const countDisplay = screen.getByTestId('count');
      expect(countDisplay).toHaveTextContent('0');
    });
  });

  describe('Button Functionality', () => {
    test('increments the count when clicking the + button', () => {
      // Simulate clicking the increment button and verify count increases
      const incrementButton = screen.getByRole('button', { name: '+' });
      fireEvent.click(incrementButton); // Click the button
      const countDisplay = screen.getByTestId('count');
      expect(countDisplay).toHaveTextContent('1');
    });

    test('decrements the count when clicking the - button', () => {
      // Simulate clicking the decrement button and verify count decreases
      const decrementButton = screen.getByRole('button', { name: '-' });
      fireEvent.click(decrementButton); // Click the button
      const countDisplay = screen.getByTestId('count');
      expect(countDisplay).toHaveTextContent('-1');
    });
  });
});
