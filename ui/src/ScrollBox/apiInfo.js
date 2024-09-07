import axios from 'axios';

export function searchMonster() {
  const monsterInput = document.getElementById('monsterInput');
  const monsterResult = document.getElementById('monsterResult');

  const monsterName = monsterInput.value.toLowerCase();

  if (monsterName) {
    axios
      .get(`https://www.dnd5eapi.co/api/monsters`)
      .then((response) => {
        monsterResult.innerHTML = '';
        const monsters = response.data.results;
        const matchedMonster = monsters.filter((e) =>
          e['name'].toLowerCase().includes(monsterName)
        );
        if (matchedMonster.length >= 1) {
          createMonster(matchedMonster);
        } else {
          monsterResult.innerHTML = 'Monster not found.';
        }
      })
      .catch((error) => {
        monsterResult.innerHTML = 'Error fetching monsters.';
      });
  } else {
    monsterResult.innerHTML = 'Please enter a monster name.';
  }
}

function createMonster(matchedMonster) {
  const monsterResult = document.getElementById('monsterResult');
  matchedMonster.forEach((monster) => {
    axios
      .get(`https://www.dnd5eapi.co${monster.url}`)
      .then((monsterResponse) => {
        let stats = monsterResponse.data;
        let image = `https://www.dnd5eapi.co${stats.image}`;
        console.log(stats);
        if (!stats.image) {
          image =
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb5KvnxoJPp-dQsyBcjbwnegRPIgKvuuEBNQ&s';
        }
        monsterResult.innerHTML += `
        <div class="monster-result">
        <div class='flex-api-text'>
            <h3>${stats.name}</h3>
            <p>
                <strong>Index:</strong> ${stats.index} </br >
                <strong>Type:</strong> ${stats.type} </br >
                <strong>Size:</strong> ${stats.size} </br >
            </p>
        </div>
        <div class='flex-api-text'>
            <p>
                <strong>Armor Class:</strong> ${stats.armor_class['0'].value} 
            </p>
        </div>
        <div class='flex-api-text'> </div>
        <div class='flex-api-image'>
            <img src=${image}>
        </div>
        <!-- You can display more monster details here -->
        </div>
    `;
      })
      .catch((error) => {
        monsterResult.innerText = 'Error fetching monster details.';
      });
  });
}
