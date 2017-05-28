import { A2servicesPage } from './app.po';

describe('a2services App', function() {
  let page: A2servicesPage;

  beforeEach(() => {
    page = new A2servicesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('ser works!');
  });
});
