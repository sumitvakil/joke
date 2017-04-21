import { JokePage } from './app.po';

describe('joke App', () => {
  let page: JokePage;

  beforeEach(() => {
    page = new JokePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
