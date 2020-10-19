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
};

export default TemplateComponent;
