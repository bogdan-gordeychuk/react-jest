import { render } from '@testing-library/react';
import Link from '.';

test('renders link', () => {
  const { asFragment } = render(<Link className="mylink" href="/some-page">Hello!</Link>);
  expect(asFragment()).toMatchSnapshot();
});
