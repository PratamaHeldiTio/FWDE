import RestaurantDataSources from '../../data/restaurant-data-sources';
import TemplateComponent from '../templates/templates-component';

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

    const restaurantList = await RestaurantDataSources.restaurantList();
    restaurantListContainer.innerHTML = '';
    restaurantList.forEach((restaurant) => {
      restaurantListContainer.innerHTML += TemplateComponent.templateRestaurantList(restaurant);
    });
  },
};

export default FavoriteRestaurant;
