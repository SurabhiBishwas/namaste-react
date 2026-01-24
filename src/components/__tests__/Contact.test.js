import { render, screen } from '@testing-library/react';
import ContactUs from '../Contact';
import '@testing-library/jest-dom';

test('check if button type submit is present', () => {
    render(<ContactUs />);
    const submitButton = screen.getByRole('button');
    expect(submitButton).toHaveAttribute('type', 'submit');
});