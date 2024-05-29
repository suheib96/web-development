// tests/passwordValidator.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import PasswordValidator from './PasswordValidator';

describe('PasswordValidator', () => {
  test('renders input, button, and displays validation message correctly', () => {
    render(<PasswordValidator />);
    const input = screen.getByRole('textbox');
    const button = screen.getByRole('button');

    // Check initial state
    expect(screen.queryByTestId('validation-message')).toBeEmptyDOMElement();

    // Input password and validate
    fireEvent.change(input, { target: { value: 'Short' } });
    fireEvent.click(button);
    expect(screen.getByTestId('validation-message')).toHaveTextContent('Not OK: Password must be greater than 8 characters.');

    // Check for capital letter requirement
    fireEvent.change(input, { target: { value: 'longpassword' } });
    fireEvent.click(button);
    expect(screen.getByTestId('validation-message')).toHaveTextContent('Not OK: Password must include at least one capital letter.');

    // Check for valid password
    fireEvent.change(input, { target: { value: 'ValidPassword123' } });
    fireEvent.click(button);
    expect(screen.getByTestId('validation-message')).toHaveTextContent('OK');
  });
});
