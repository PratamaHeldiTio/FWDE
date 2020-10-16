import RestaurantDataSources from '../../data/restaurant-data-sources';
import TemplateComponent from '../templates/templates-component';

const HomeRestaurant = {
  render() {
    return `
      <div class="content">
        <h1 id="main-content" class="main-title" tabindex="0">Cari tempat yang sesuai dengan anda</h1>
        <div id="restaurantList"></div>
      </div>
      `;
  },

  async afterRender() {
    const restaurantList = await RestaurantDataSources.restaurantList();
    const restaurantListContainer = document.querySelector('#restaurantList');
    restaurantList.forEach((restaurant) => {
      restaurantListContainer.innerHTML += TemplateComponent.templateRestaurantList(restaurant);
    });
  },
};

export default HomeRestaurant;
