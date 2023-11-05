const submitButton = document.querySelector("#submitButton");

submitButton.addEventListener("click", function () {
  const pokemon = document.querySelector("#pokemon").value;
  const body = document.body;

  const listTemplate = ({ name, url }) => {
    return `<li><p>Ability name: ${name}</p><p>Ability name: ${url}</p></li>`;
  };

  const cardTemplate = (imageSrc, imageAlt, pokemonName, pokemonAbilities) => {
    const list = pokemonAbilities.map((el) => {
      return listTemplate(el.ability);
    });
    return `<div class="card" id="div"> <img src="${imageSrc}" alt="${imageAlt}" /> <p class="name">${pokemonName}</p><ul>${list}</ul> </div>`;
  };

  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then((res) => res.json())
    .then((res) => {
      body.insertAdjacentHTML(
        "beforeend",
        cardTemplate(
          res.sprites.front_default,
          res.name,
          res.name,
          res.abilities
        )
      );
    })
    .catch((err) => console.log("error", err));
});
