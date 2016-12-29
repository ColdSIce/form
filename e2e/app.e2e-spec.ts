import { FormstutorialPage } from './app.po';

describe('formstutorial App', function() {
  let page: FormstutorialPage;

  beforeEach(() => {
    page = new FormstutorialPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
