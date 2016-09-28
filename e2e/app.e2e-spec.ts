import { LoggerBugPage } from './app.po';

describe('logger-bug App', function() {
  let page: LoggerBugPage;

  beforeEach(() => {
    page = new LoggerBugPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
