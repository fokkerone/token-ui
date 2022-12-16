import { render } from '@testing-library/react';

import * as NavigationMenu from './navigation-menu';

describe('NavigationMenu', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NavigationMenu />);
    expect(baseElement).toBeTruthy();
  });
});
