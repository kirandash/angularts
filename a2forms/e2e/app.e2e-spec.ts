import { A2formsPage } from './app.po';

describe('a2forms App', function() {
  let page: A2formsPage;

  beforeEach(() => {
    page = new A2formsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
