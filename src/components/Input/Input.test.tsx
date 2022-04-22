import {fireEvent, render, screen} from '@testing-library/react';
import Input from '.';

describe('Components/Input', () => {
  test('Renders the Input with a Placeholder', () => {
    render(<Input placeholder="An Input" />);
    expect(screen.getByPlaceholderText('An Input')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('An Input')).toHaveAttribute('placeholder', 'An Input');
  });

  test('Allows user to input values', () => {
    render(<Input placeholder="An Input" />);
    const input = screen.getByPlaceholderText('An Input') as HTMLInputElement;
    fireEvent.change(input, {target: {value: 'Hello'}});
    expect(input.value).toBe('Hello');
    expect(input).toHaveValue('Hello');
  });
});
