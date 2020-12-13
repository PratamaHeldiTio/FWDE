import FavoriteButtonPresenter from '../../src/scripts/utils/favorite-button-presenter';

const TestFactories = {
  async favoriteButtonPresenterWithRestaurant(restaurant) {
    await FavoriteButtonPresenter.init({
      favoriteButtonContainer: document.querySelector('#favoriteButtonContainer'),
      restaurant,
    });
  },
};

export default TestFactories;
