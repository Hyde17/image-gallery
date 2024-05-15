const imageGgallery = document.querySelector(".image-gallery");

const fetchImages = async () => {
  const response = await fetch(
    "https://api.unsplash.com/photos?client_id=3ifKK3_lY722wxVfZUrKXOvUHPyLVKqakPt9icrfyh0"
  );
  const data = await response.json();
  console.log(data);

  const articleElement = document.createElement("div");

  articleElement.innerHTML = data
    .map(
      (item) =>
        `
      <article>
        <img src=${item.urls.full} alt=${item.user.name} />

        <ul>
          <li>${item.user.name}</li>
          <li>${item.likes} Likes</li>
        </ul>
      </article>
      `
    )
    .join("");

  imageGgallery.appendChild(articleElement);
};

fetchImages();
