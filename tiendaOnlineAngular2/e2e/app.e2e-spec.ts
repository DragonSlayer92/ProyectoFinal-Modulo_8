import { TiendaOnlineAngular2Page } from './app.po';

describe('tienda-online-angular2 App', function() {
  let page: TiendaOnlineAngular2Page;

  beforeEach(() => {
    page = new TiendaOnlineAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('t works!');
  });
});
