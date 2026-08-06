import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock('./hooks/useLenis', () => () => {});

beforeAll(() => {
  window.matchMedia = window.matchMedia || ((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false,
  }));

  global.IntersectionObserver = class {
    observe() {}
    unobserve() {}
    disconnect() {}
  };
});

beforeEach(() => {
  localStorage.clear();
});

test('renders language gate when no preference stored', () => {
  render(<App />);
  expect(screen.getByRole('button', { name: /english/i })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /français/i })).toBeInTheDocument();
});

test('skips language gate when preference is stored', () => {
  localStorage.setItem('portfolio-lang', 'fr');
  render(<App />);
  expect(screen.queryByRole('button', { name: /english/i })).not.toBeInTheDocument();
  expect(screen.getByRole('navigation', { name: /chapitres/i })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /télécharger cv/i })).toBeInTheDocument();
});
