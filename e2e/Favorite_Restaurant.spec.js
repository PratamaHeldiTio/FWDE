const assert = require('assert');

/* eslint-disable no-undef */
Feature('Favorite Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty favorite restaurant', ({ I }) => {
  I.seeElement('#restaurantList');
  I.see('Daftar Favorite Kosong', '.offline');
});

Scenario('favorite and unfavorite restaurant', async ({ I }) => {
  I.see('Daftar Favorite Kosong', '.offline');
  I.amOnPage('/');

  I.seeElement('.restaurant-title');

  const firstRestaurant = locate('.restaurant-title').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#favoriteButton');
  I.click('#favoriteButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant');

  const favoriteRestaurantTitle = await I.grabTextFrom('.restaurant-title');
  assert.strictEqual(firstRestaurantTitle, favoriteRestaurantTitle);

  I.seeElement('.restaurant-title');
  I.click(locate('.restaurant-title').first());

  I.seeElement('.unfavorite');
  I.click('.unfavorite');

  I.amOnPage('/#/favorite');
  I.seeElement('#restaurantList');
  I.see('Daftar Favorite Kosong', '.offline');
});
