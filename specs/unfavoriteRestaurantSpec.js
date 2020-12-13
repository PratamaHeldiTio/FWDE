/* eslint-disable no-undef */
import TestFactories from './helpers/testFactories';
import FavoriteRestaurantDataDb from '../src/scripts/data/favorite-restaurant-data-db';

const addLikeButtonContainer = () => {
  document.body.innerHTML = '<div id="favoriteButtonContainer"></div>';
};

describe('Unfavorite a restaurant', () => {
  beforeEach(async () => {
    addLikeButtonContainer();
    await FavoriteRestaurantDataDb.putRestaurant({ id: 1 });

    await TestFactories.favoriteButtonPresenterWithRestaurant({ id: 1 });
  });

  afterEach(async () => {
    await FavoriteRestaurantDataDb.deleteRestaurant(1);
  });

  it('should display unlike widget when the restaurant has been favorited', async () => {
    expect(document.querySelector('[aria-label="unfavorite restaurant"]'))
      .toBeTruthy();
  });

  it('should not display faavorite widget when the restaurant has been faavorited', async () => {
    expect(document.querySelector('[aria-label="favorite restaurant"]'))
      .toBeFalsy();
  });

  it('should be able to remove favorited restaurant from the list', async () => {
    document.querySelector('[aria-label="unfavorite restaurant"]').dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurantDataDb.getAllRestaurant()).toEqual([]);
  });

  it('should not throw error if the unliked restaurant is not in the list', async () => {
    await FavoriteRestaurantDataDb.deleteRestaurant(1);

    document.querySelector('[aria-label="unfavorite restaurant"]').dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurantDataDb.getAllRestaurant()).toEqual([]);
  });
});
