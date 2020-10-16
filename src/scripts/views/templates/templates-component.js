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
};

export default TemplateComponent;
