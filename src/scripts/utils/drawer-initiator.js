const DrawerInitiator = {
  init({ drawer, button, content }) {
    button.addEventListener('click', (event) => {
      this._toggleDrawer(event, drawer);
    });

    content.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer);
    });
  },

  _toggleDrawer(event, drawer) {
    event.preventDefault();
    event.stopPropagation();
    drawer.classList.toggle('open');
  },

  _closeDrawer(event, content) {
    event.preventDefault();
    event.stopPropagation();
    content.classList.remove('open');
  },
};

export default DrawerInitiator;
