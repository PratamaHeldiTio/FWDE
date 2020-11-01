import TemplateComponent from '../templates/templates-component';
import FavoriteRestaurantDataDb from '../../data/favorite-restaurant-data-db';

const FavoriteRestaurant = {
  render() {
    return `
      <div class="content">
        <h1 class="main-title-favorite" tabindex="0">Daftar favorite anda</h1>
        <div id="restaurantList">
            <img src="./images/loader.svg" alt="loader halaman" class="loader">
        </div> 
      </div>
      `;
  },

  async afterRender() {
    const restaurantListContainer = document.querySelector('#restaurantList');
    restaurantListContainer.innerHTML = TemplateComponent.loader();
    const restaurantList = await FavoriteRestaurantDataDb.getAllRestaurant();

    if (restaurantList.length > 0) {
      restaurantListContainer.innerHTML = '';
      restaurantList.forEach((restaurant) => {
        restaurantListContainer.innerHTML += TemplateComponent.templateRestaurantList(restaurant);
      });
    } else {
      restaurantListContainer.innerHTML = '<h1 class="offline">Daftar Favorite Kosong</h1>';
    }
  },
};

export default FavoriteRestaurant;
