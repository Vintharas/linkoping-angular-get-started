import { Ng2GetStartedTest2Page } from './app.po';

describe('ng2-get-started-test2 App', () => {
  let page: Ng2GetStartedTest2Page;

  beforeEach(() => {
    page = new Ng2GetStartedTest2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
