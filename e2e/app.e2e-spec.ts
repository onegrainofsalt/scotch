import { ScotchRestPage } from './app.po';

describe('scotch-rest App', () => {
  let page: ScotchRestPage;

  beforeEach(() => {
    page = new ScotchRestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
