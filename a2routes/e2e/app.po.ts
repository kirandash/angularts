import { browser, element, by } from 'protractor';

export class A2routesPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('rts-root h1')).getText();
  }
}
