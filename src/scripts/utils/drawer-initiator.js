const DrawerInitiator = {
  init({ drawer, button, content }) {
    button.addEventListener('click', (event) => {
      event.preventDefault();
      this._toggleDrawer(event, drawer);
    });

    content.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer);
    });
  },

  _toggleDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.toggle('open');
  },

  _closeDrawer(event, content) {
    event.stopPropagation();
    content.classList.remove('open');
  },
};

export default DrawerInitiator;
