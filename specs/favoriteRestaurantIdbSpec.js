/* eslint-disable no-undef */
import itContractFavoriteResturantModel from './contract/favoriteRestaurantContract';
import FavoriteRestaurantDataDb from '../src/scripts/data/favorite-restaurant-data-db';

describe('Favorite restaurant IDB contract test implementation', () => {
  afterEach(async () => {
    (await FavoriteRestaurantDataDb.getAllRestaurant()).forEach(async (movie) => {
      await FavoriteRestaurantDataDb.deleteRestaurant(movie.id);
    });
  });

  itContractFavoriteResturantModel(FavoriteRestaurantDataDb);
});
