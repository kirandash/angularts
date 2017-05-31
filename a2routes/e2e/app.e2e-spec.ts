import { A2routesPage } from './app.po';

describe('a2routes App', function() {
  let page: A2routesPage;

  beforeEach(() => {
    page = new A2routesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('rts works!');
  });
});
