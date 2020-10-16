const TemplateComponent = {
  templateRestaurantList(restaurant) {
    return `
      <section>
        <img src="${restaurant.pictureId}" tabindex="0" alt="Gambar restaurant ${restaurant.name} di ${restaurant.city}">
        <h2 tabindex="0" class="restaurant-place">${restaurant.city}</h2>
        <article class="restaurant-list">
            <a href="#" class="restaurant-title">${restaurant.name}</a>
            <p tabindex="0" class="restaurant-rating">Rating ${restaurant.rating}</p>
            <p tabindex="0" class="restaurant-desc">${restaurant.description}</p>
        </article>
    </section>`;
  },

  templateHero() {
    return `
      <h2 class="hero-tagline-first" tabindex="0">Terpercaya</h2>
      <h2 class="hero-tagline-sec" tabindex="0">Terjangkau</h2>
      <p class="hero-desc" tabindex="0">Rasakan langsung tempat rekomendasi restaurant terbaik diseluruh nusantara dan tempat
          para pecinta
          kuliner</p>
      <img src="./images/heros/hero-image.webp" alt="hero website">`;
  },
};

export default TemplateComponent;
