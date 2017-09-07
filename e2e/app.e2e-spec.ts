import { SftpPage } from './app.po';

describe('sftp App', () => {
  let page: SftpPage;

  beforeEach(() => {
    page = new SftpPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
