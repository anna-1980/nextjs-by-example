import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Page from './page';

describe('Page', () => {
    it('renders a page', () => {
        render(<Page />);
        const page = screen.getByRole('heading');
        expect(page).toBeInTheDocument();
        expect(page).toHaveTextContent('Indie Games');
    });
});
