import { render } from '@testing-library/react';

import Textfield from './textfield';

describe('Textfield', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Textfield />);
    expect(baseElement).toBeTruthy();
  });
});
