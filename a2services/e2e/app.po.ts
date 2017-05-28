import { browser, element, by } from 'protractor';

export class A2servicesPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ser-root h1')).getText();
  }
}
