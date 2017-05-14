import { browser, element, by } from 'protractor';

export class A2bdirectivesPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('dir-root h1')).getText();
  }
}
