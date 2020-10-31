import RestaurantDataSources from '../../data/restaurant-data-sources';
import TemplateComponent from '../templates/templates-component';

const HomeRestaurant = {
  render() {
    return `
      <div class="content">
      <div class="hero">
        <div class="loader">
          <img src="./images/loader.svg" alt="loader halaman">
        </div> 
      </div>
        <h1 id="main-content" class="main-title" tabindex="0">Cari tempat yang sesuai dengan anda</h1>
        <div id="restaurantList">
          <div class="loader">
            <img src="./images/loader.svg" alt="loader halaman">
          </div> 
        </div>
      </div>
      `;
  },

  async afterRender() {
    const heroContainer = document.querySelector('.hero');
    heroContainer.innerHTML = TemplateComponent.templateHero();
    const restaurantListContainer = document.querySelector('#restaurantList');
    const restaurantList = await RestaurantDataSources.restaurantList();

    if (restaurantList) {
      restaurantListContainer.innerHTML = '';
      restaurantList.forEach((restaurant) => {
        restaurantListContainer.innerHTML += TemplateComponent.templateRestaurantList(restaurant);
      });
    } else {
      restaurantListContainer.innerHTML = '<h1>Anda Offline</h1>';
    }
  },
};

export default HomeRestaurant;
