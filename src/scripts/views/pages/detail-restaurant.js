import UrlParser from '../../routs/url-parser';
import RestaurantDataSources from '../../data/restaurant-data-sources';
import TemplateComponent from '../templates/templates-component';
import FavoriteButtonPresenter from '../../utils/favorite-button-presenter';

const DetailRestaurant = {
  render() {
    return `
      <div id="detailRestaurant">
        <div class="loader">
          <img src="./images/loader.svg" alt="loader halaman">
        </div>
      </div>
      <div id="favoriteButtonContainer"></div>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const dataRestaurant = await RestaurantDataSources.detailRestaurant(url.id);
    const detailRestaurantContainer = document.querySelector('#detailRestaurant');
    if (dataRestaurant) {
      detailRestaurantContainer.innerHTML = '';
      detailRestaurantContainer.innerHTML += TemplateComponent.templateDetail(dataRestaurant);
    } else {
      detailRestaurantContainer.innerHTML = '<h1 class="offline">Anda Sedang Offline</h1>';
    }

    const buttonAddReview = document.querySelector('.add-review');
    buttonAddReview.addEventListener('click', async () => {
      const dataReview = {
        id: `${url.id}`,
        name: `${document.querySelector('#name').value}`,
        review: `${document.querySelector('#review').value}`,
      };

      const dataReviewContainer = document.querySelector('.detail-review');
      const dataReviewNew = await RestaurantDataSources.AddNewReview(dataReview);

      if (dataReviewNew) {
        const formAddReview = document.querySelector('#formAddReview');
        dataReviewContainer.innerHTML = TemplateComponent._templateReviews(dataReviewNew);
        formAddReview.reset();
      } else {
        dataReviewContainer.innerHTML += '<h1 class="offline">Anda Sedang Offline</h1>';
      }
    });

    FavoriteButtonPresenter.init({
      favoriteButtonContainer: document.querySelector('#favoriteButtonContainer'),
      restaurant: dataRestaurant,
    });
  },
};

export default DetailRestaurant;
