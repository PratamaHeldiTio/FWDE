import API_ENDPOINT_RESTAURANT from '../globals/api-endpoint-restaurant';
import CONFIG from '../globals/config';

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
    try {
      const response = await fetch(API_ENDPOINT_RESTAURANT.DETAIL(id));
      const responseJson = await response.json();
      return responseJson.restaurant;
    } catch (e) {
      return false;
    }
  },

  async AddNewReview(dataReview) {
    try {
      const response = await fetch(API_ENDPOINT_RESTAURANT.ADD_REVIEW, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Auth-Token': CONFIG.API_KEY,
        },
        body: JSON.stringify(dataReview),
      });

      const responseJson = await response.json();
      return responseJson.customerReviews;
    } catch {
      return false;
    }
  },
};

export default RestaurantDataSources;
