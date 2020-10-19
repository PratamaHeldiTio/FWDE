import UrlParser from '../../routs/url-parser';
import RestaurantDataSources from '../../data/restaurant-data-sources';
import TemplateComponent from '../templates/templates-component';

const DetailRestaurant = {
  render() {
    return `
      <div class="detail-restaurant"></div>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantDataSources.detailRestaurant(url.id);
    console.log(restaurant);
  },
};

export default DetailRestaurant;
