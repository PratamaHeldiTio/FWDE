import API_ENDPOINT_RESTAURANT from '../globals/api-endpoint-restaurant';

const RestaurantDataSources = {
  async restaurantList() {
    try {
      const response = await fetch(API_ENDPOINT_RESTAURANT.HOME);
      const responseJson = await response.json();
      return responseJson.restaurants;
    } catch (e) {
      return false;
    }
  },

  async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT_RESTAURANT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  },
};

export default RestaurantDataSources;
