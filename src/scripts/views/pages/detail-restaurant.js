import UrlParser from '../../routs/url-parser';
import RestaurantDataSources from '../../data/restaurant-data-sources';
import TemplateComponent from '../templates/templates-component';

const DetailRestaurant = {
  render() {
    return `
      <div id="detailRestaurant">
        <div class="loader">
          <img src="./images/loader.svg" alt="loader halaman">
        </div>
      </div>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const dataRestaurant = await RestaurantDataSources.detailRestaurant(url.id);
    const detailRestaurantContainer = document.querySelector('#detailRestaurant');
    detailRestaurantContainer.innerHTML = '';
    detailRestaurantContainer.innerHTML += TemplateComponent.templateDetail(dataRestaurant);

    const buttonAddReview = document.querySelector('.add-review');
    buttonAddReview.addEventListener('click', async () => {
      const dataReview = {
        id: `${url.id}`,
        name: `${document.querySelector('#name').value}`,
        review: `${document.querySelector('#review').value}`,
      };

      const dataReviewNew = await RestaurantDataSources.AddNewReview(dataReview);
      const dataReviewContainer = document.querySelector('.detail-review');
      const formAddReview = document.querySelector('#formAddReview');
      dataReviewContainer.innerHTML = TemplateComponent._templateReviews(dataReviewNew);
      formAddReview.reset();
    });
  },
};

export default DetailRestaurant;
