import { A2bdirectivesPage } from './app.po';

describe('a2bdirectives App', function() {
  let page: A2bdirectivesPage;

  beforeEach(() => {
    page = new A2bdirectivesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('dir works!');
  });
});
