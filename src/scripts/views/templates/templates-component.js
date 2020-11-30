import CONFIG from '../../globals/config';

const TemplateComponent = {
  templateRestaurantList(restaurant) {
    return `
      <section>
        <img src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" tabindex="0" alt="restaurant ${restaurant.name} di ${restaurant.city}">
        <h2 tabindex="0" class="restaurant-place">${restaurant.city}</h2>
        <article class="restaurant-list">
            <a href="${`/#/detail/${restaurant.id}`}" class="restaurant-title">${restaurant.name}</a>
            <p tabindex="0" class="restaurant-rating">Rating ${restaurant.rating}</p>
            <p tabindex="0" class="restaurant-desc" >${restaurant.description}</p>
        </article>
    </section>`;
  },

  templateHero() {
    return `
    <a href="#main-content" class="skip-content" tabindex="1">Skip Content</a>
      <div class="tagline">
        <h2 class="tagline-first" tabindex="0">Terpercaya</h2>
        <h2 class="tagline-sec" tabindex="0">Terjangkau</h2>
      </div>
      <p class="hero-desc" tabindex="0">Rasakan langsung tempat rekomendasi restaurant terbaik diseluruh nusantara dan tempat
          para pecinta
          kuliner</p>
      <img src="./images/hero-image.webp" alt="hero website">`;
  },

  templateDetail(restaurant) {
    let templateDetailHtml = this._templateDetailInformation(restaurant);
    templateDetailHtml += this._templateDetailMenu(restaurant.menus);
    templateDetailHtml += this._templateReviews(restaurant.customerReviews);
    templateDetailHtml += this._templateAddNewReview();
    return templateDetailHtml;
  },

  _templateDetailInformation(restaurant) {
    let _templateDetailInformationHtml = `
    <div class="detail-information">
      <div class="detail-image">
        <img src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" tabindex="0" alt="restaurant ${restaurant.name} di ${restaurant.city}">
      </div>
      <div class="detail-content">
        <h2 class="detail-name">${restaurant.name}</h2>
        <h2 class="detail-rating"> ⭐ ${restaurant.rating}</h2>
        <h2 class="detail-address"><img src="images/location.svg" alt="location"><span>${restaurant.address}, ${restaurant.city}</span></h2>
        <h2 class="detail-description-title">Deskripsi</h2>
        <p class="detail-description-content">${restaurant.description}</p>
      </div>
      <div class="detail-categories">
        <h2>Kategori</h2>
        <ul>`;

    restaurant.categories.forEach((category) => {
      _templateDetailInformationHtml += `
          <li class="category-name">${category.name}</li>
      `;
    });

    _templateDetailInformationHtml += '</ul></div></div>';
    return _templateDetailInformationHtml;
  },

  _templateDetailMenu(restaurant) {
    let templateMenuHtml = '<div class="detail-menu">';
    templateMenuHtml += this._templateMenuFoods(restaurant.foods);
    templateMenuHtml += this._templateMenuDrinks(restaurant.drinks);
    return templateMenuHtml;
  },

  _templateMenuFoods(foods) {
    let templateMenuFoodsHtml = `
    <h2 class="foods-title">Makanan</h2>
      <div class="foods">
        <ul>
  `;
    foods.forEach((food) => {
      templateMenuFoodsHtml += `
      <li>
        <img class="image-menu" src="images/food.svg" alt="menu makanan">
        <h3 class="food-name">${food.name}</h3>
      </li>`;
    });

    templateMenuFoodsHtml += '</ul></div>';
    return templateMenuFoodsHtml;
  },

  _templateMenuDrinks(drinks) {
    let templateMenuDrinksHtml = `
    <h2 class="drinks-title">Minuman</h2>
      <div class="drinks">
        <ul>
  `;
    drinks.forEach((drink) => {
      templateMenuDrinksHtml += `
      <li>
        <img class="image-menu" src="images/drink.svg" alt="menu minuman">
        <h3 class="drink-name">${drink.name}</h3>
      </li>`;
    });

    templateMenuDrinksHtml += '</ul></div>';
    return templateMenuDrinksHtml;
  },

  _templateReviews(customerReviews) {
    let templateReviewHtml = `
    <div class="detail-review">
      <h2 class="review-title">Review</h2>
      <div class="reviews">
        <ul>
    `;
    customerReviews.forEach((review) => {
      templateReviewHtml += `
        <li>
          <h3 class="review-name">${review.name}</h3>
          <small class="review-date">${review.date}</small>
          <p class="review-desc">${review.review}</p>
        </li>`;
    });

    templateReviewHtml += '</ul></div></div>';
    return templateReviewHtml;
  },

  _templateAddNewReview() {
    return `
      <form id="formAddReview">
        <h1>Tambahkan Review</h1>
        <div class="formcontainer">
        <div class="container">
          <label for="name"><strong>Nama</strong></label>
          <input type="text" placeholder="Masukan Nama" name="name" id="name" required>
          <label for="review"><strong>Review</strong></label>
          <input type="text" placeholder="Masukan Review" name="review" id="review" required>
        </div>
        <button type="button" class="add-review"><strong>Kirim</strong></button>
      </form>`;
  },

  loader() {
    return `
      <div class="loader">
        <img src="./images/loader.svg" alt="loader halaman"
      </div>  `;
  },

  templateLikeButton() {
    return `
      <button id="favoriteButton" class="like">
        <img src="./images/like.svg" alt="button like"> 
      </button>`;
  },

  templateLikedButton() {
    return `
      <button id="favoriteButton" class="like">
        <img src="./images/liked.svg" alt="button like"> 
      </button>`;
  },
};

export default TemplateComponent;
