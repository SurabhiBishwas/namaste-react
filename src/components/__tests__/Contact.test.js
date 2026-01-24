import { render, screen } from '@testing-library/react';
import ContactUs from '../Contact';
import '@testing-library/jest-dom';

test('Contact Us should render correctly', () => {
    render(<ContactUs />);
    const heading = screen.getByText('Contact Us');
    expect(heading).toBeInTheDocument();
});