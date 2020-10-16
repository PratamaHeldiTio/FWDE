import data from './DATA.json';

const RestaurantDataSources = {
  async restaurantList() {
    return data.restaurants;
  },
};

export default RestaurantDataSources;
