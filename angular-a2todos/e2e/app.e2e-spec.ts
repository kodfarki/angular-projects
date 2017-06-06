import { A2todosPage } from './app.po';

describe('a2todos App', () => {
  let page: A2todosPage;

  beforeEach(() => {
    page = new A2todosPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
