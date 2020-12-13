import FavoriteRestaurantDataDb from '../data/favorite-restaurant-data-db';
import TemplateComponent from '../views/templates/templates-component';

const FavoriteButtonPresenter = {
  async init({ favoriteButtonContainer, restaurant }) {
    this._favoriteButtonContainer = favoriteButtonContainer;
    this._restaurant = restaurant;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._restaurant;

    if (await this._isRestaurantExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isRestaurantExist(id) {
    const restaurant = await FavoriteRestaurantDataDb.getRestaurant(id);
    return !!restaurant;
  },

  _renderLike() {
    this._favoriteButtonContainer.innerHTML = TemplateComponent.templateButtonFavoriteRestaurant();

    const favoriteButton = document.querySelector('#favoriteButton');
    favoriteButton.addEventListener('click', async () => {
      await FavoriteRestaurantDataDb.putRestaurant(this._restaurant);
      await this._renderButton();
    });
  },

  _renderLiked() {
    this._favoriteButtonContainer.innerHTML = TemplateComponent
      .templateButtonUnfavoriteRestaurant();

    const favoriteButton = document.querySelector('#favoriteButton');
    favoriteButton.addEventListener('click', async () => {
      await FavoriteRestaurantDataDb.deleteRestaurant(this._restaurant.id);
      await this._renderButton();
    });
  },
};

export default FavoriteButtonPresenter;
