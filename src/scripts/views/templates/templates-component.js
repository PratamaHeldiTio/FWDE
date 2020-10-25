import CONFIG from '../../globals/config';

const TemplateComponent = {
  templateRestaurantList(restaurant) {
    return `
      <section>
        <img src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" tabindex="0" alt="Gambar restaurant ${restaurant.name} di ${restaurant.city}">
        <h2 tabindex="0" class="restaurant-place">${restaurant.city}</h2>
        <article class="restaurant-list">
            <a href="${`/#/detail/${restaurant.id}`}" class="restaurant-title">${restaurant.name}</a>
            <p tabindex="0" class="restaurant-rating">Rating ${restaurant.rating}</p>
            <p tabindex="0" class="restaurant-desc">${restaurant.description}</p>
        </article>
    </section>`;
  },

  templateHero() {
    return `
      <div class="tagline">
        <h2 class="tagline-first" tabindex="0">Terpercaya</h2>
        <h2 class="tagline-sec" tabindex="0">Terjangkau</h2>
      </div>
      <p class="hero-desc" tabindex="0">Rasakan langsung tempat rekomendasi restaurant terbaik diseluruh nusantara dan tempat
          para pecinta
          kuliner</p>
      <img src="./images/heros/hero-image.webp" alt="hero website">`;
  },

  templateDetail(restaurant) {
    let templateDetailHtml = this._templateDetailInformation(restaurant);
    templateDetailHtml += this._templateDetailMenu(restaurant.menus);
    templateDetailHtml += this.templateReview();
    return templateDetailHtml;
  },

  _templateDetailInformation(restaurant) {
    return `
    <div class="detail-information">
      <div class="detail-image">
        <img src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" tabindex="0" alt="Gambar restaurant ${restaurant.name} di ${restaurant.city}">
      </div>
      <div class="detail-content">
        <h2 class="detail-name">${restaurant.name}</h2>
        <h2 class="detail-rating"> ⭐ ${restaurant.rating}</h2>
        <h2 class="detail-address"><img src="images/location.svg" alt="location">${restaurant.address}, ${restaurant.city}</h2>
        <h2 class="detail-description-title">Deskripsi</h2>
        <p class="detail-description-content">${restaurant.description}</p>
      </div>
    </div>`;
  },

  _templateDetailMenu(restaurant) {
    let templateMenuHtml = '<div class="detail-menu">';
    templateMenuHtml += this._templateMenuFoods(restaurant.foods);
    templateMenuHtml += this._templateMenuDrinks(restaurant.drinks);

    return templateMenuHtml;
  },

  _templateMenuFoods(foods) {
    let templateMenuFoodsHtml = `
      <div class="foods">
        <h2 class="foods-title">Makanan</h2>
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
      <div class="drinks">
        <h2 class="drinks-title">Minuman</h2>
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
};

export default TemplateComponent;
