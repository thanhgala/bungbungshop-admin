import { BungbungshopAdminPage } from './app.po';

describe('bungbungshop-admin App', () => {
  let page: BungbungshopAdminPage;

  beforeEach(() => {
    page = new BungbungshopAdminPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
