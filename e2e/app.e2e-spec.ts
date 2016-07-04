import { DynamicformsPage } from './app.po';

describe('dynamicforms App', function() {
  let page: DynamicformsPage;

  beforeEach(() => {
    page = new DynamicformsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
