import axios from 'axios';

export const scrollInfo = () => {
  const monsterInput = document.getElementById('monsterInput');
  const searchButton = document.getElementById('searchButton');
  const monsterResult = document.getElementById('monsterResult');

  searchButton.addEventListener('click', () => {
    const monsterName = monsterInput.value.toLowerCase();
    if (monsterName) {
      searchMonster(monsterName);
      console.log('monsterData');
    } else {
      monsterResult.innerHTML = 'Please enter a monster name.';
    }
  });
  console.log('monsterData');

  function searchMonster(monsterName) {
    monsterResult.innerHTML = 'Searching...';

    axios
      .get(`https://www.dnd5eapi.co/api/monsters`)
      .then((response) => {
        const monsters = response.data.results;
        const matchedMonster = monsters.find(
          (monster) => monster.name.toLowerCase() === monsterName
        );

        if (matchedMonster) {
          axios
            .get(matchedMonster.url)
            .then((monsterResponse) => {
              let monsterData = monsterResponse.data;
              console.log(monsterData);
              monsterResult.innerHTML = `
              <h2>${monsterData.name}</h2>
              <p><strong>Index:</strong> ${monsterData.index}</p>
              <!-- You can display more monster details here -->
            `;
            })
            .catch((error) => {
              monsterResult.innerHTML = 'Error fetching monster details.';
            });
        } else {
          monsterResult.innerHTML = 'Monster not found.';
        }
      })
      .catch((error) => {
        monsterResult.innerHTML = 'Error fetching monsters.';
      });
  }

  const bigSection = (
    <section>
      <h1>The Story</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. .
      </p>
      <div class="visual">
        <div id="map" data-value="Victoria"></div>
      </div>
      <div class="steps">
        <div class="step" data-value="Sphynx" data-attribute="" data-target="">
          Second Step
          <br />
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. .
        </div>
      </div>
    </section>
  );
};
