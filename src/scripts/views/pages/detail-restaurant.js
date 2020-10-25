import UrlParser from '../../routs/url-parser';
import RestaurantDataSources from '../../data/restaurant-data-sources';
import TemplateComponent from '../templates/templates-component';

const DetailRestaurant = {
  render() {
    return `
      <div id="detailRestaurant"></div>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const dataRestaurant = await RestaurantDataSources.detailRestaurant(url.id);
    const detailRestaurantContainer = document.querySelector('#detailRestaurant');
    detailRestaurantContainer.innerHTML += TemplateComponent.templateDetail(dataRestaurant);
  },
};

export default DetailRestaurant;
