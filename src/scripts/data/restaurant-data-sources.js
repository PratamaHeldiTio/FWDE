import API_ENDPOINT_RESTAURANT from '../globals/api-endpoint-restaurant';

const RestaurantDataSources = {
  async restaurantList() {
    const response = await fetch(API_ENDPOINT_RESTAURANT.HOME);
    const responseJson = await response.json();
    return responseJson.restaurants;
  },

  async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT_RESTAURANT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  },
};

export default RestaurantDataSources;
