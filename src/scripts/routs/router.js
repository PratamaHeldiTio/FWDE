import HomeRestaurant from '../views/pages/home-restaurant';
import DetailRestaurant from '../views/pages/detail-restaurant';
import FavoriteRestaurant from '../views/pages/favorite-restaurant';

const routes = {
  '/': HomeRestaurant, // default page
  '/home': HomeRestaurant,
  '/detail/:id': DetailRestaurant,
  '/favorite': FavoriteRestaurant,
};

export default routes;
