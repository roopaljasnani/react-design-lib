import React from 'react';
import {render, screen} from '@testing-library/react';
import Input from '.';

describe('Components/Input', () => {
  test('Renders the Input with a Placeholder', () => {
    render(<Input placeholder="An Input" />);
    expect(screen.getByPlaceholderText('An Input')).toHaveAttribute('placeholder', 'An Input');
  });
});
