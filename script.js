async function getDogBreed() {
  const breed = document.getElementById("breedInput").value.trim();
  const resultDiv = document.getElementById("result");
  const errorDiv = document.getElementById("error");

  resultDiv.classList.remove("show");
  resultDiv.innerHTML = "";
  errorDiv.textContent = "";

  if (!breed) {
    errorDiv.textContent = "Please enter a breed name.";
    return;
  }

  try {
    // Fetch breed details
    const res = await fetch(`https://api.thedogapi.com/v1/breeds/search?q=${breed}`);
    if (!res.ok) throw new Error("Failed to fetch data");

    const data = await res.json();

    if (data.length === 0) {
      errorDiv.textContent = "🐶 Breed not found. Try another!";
      return;
    }

    const dog = data[0];

    // Fetch images
    let imagesHtml = "";
    if (dog.reference_image_id) {
      const imgRes = await fetch(`https://api.thedogapi.com/v1/images/search?breed_id=${dog.id}&limit=6`);
      const imgData = await imgRes.json();
      imagesHtml = `
        <div id="images">
          ${imgData.map(img => `<img src="${img.url}" alt="${dog.name}">`).join('')}
        </div>
      `;
    }

    resultDiv.innerHTML = `
      <h2>${dog.name}</h2>
      <p>📏 Height: ${dog.height.metric} cm</p>
      <p>⚖️ Weight: ${dog.weight.metric} kg</p>
      <p>⏳ Lifespan: ${dog.life_span}</p>
      <p>💡 Temperament: ${dog.temperament || "Not available"}</p>
      ${imagesHtml}
    `;
    
    setTimeout(() => {
      resultDiv.classList.add("show");
    }, 100);

  } catch (err) {
    errorDiv.textContent = err.message;
  }
}
