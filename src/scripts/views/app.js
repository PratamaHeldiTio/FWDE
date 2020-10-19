import DrawerInitiator from '../utils/drawer-initiator';
import UrlParser from '../routs/url-parser';
import Router from '../routs/router';

class App {
  constructor({ drawer, button, content }) {
    this._drawer = drawer;
    this._button = button;
    this._content = content;

    this._initAppShell();
  }

  _initAppShell() {
    DrawerInitiator.init({
      drawer: this._drawer,
      button: this._button,
      content: this._content,
    });
  }

  async renderPage() {
    const targetUrl = UrlParser.parseActiveUrlWithCombiner();
    const targetPage = Router[targetUrl];
    this._content.innerHTML = await targetPage.render();
    await targetPage.afterRender();
  }
}

export default App;
