import { NgFormDemoPage } from './app.po';

describe('ng-form-demo App', () => {
  let page: NgFormDemoPage;

  beforeEach(() => {
    page = new NgFormDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
