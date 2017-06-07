import { AngularSpotifyPage } from './app.po';

describe('angular-spotify App', () => {
  let page: AngularSpotifyPage;

  beforeEach(() => {
    page = new AngularSpotifyPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
