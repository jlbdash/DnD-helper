import axios from 'axios';

export function searchMonster() {
  const monsterInput = document.getElementById('monsterInput');
  const monsterResult = document.getElementById('monsterResult');

  const monsterName = monsterInput.value.toLowerCase();

  monsterResult.innerHTML = '';
  if (monsterName) {
    axios
      .get(`https://www.dnd5eapi.co/api/monsters`)
      .then((response) => {
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
        // gather the info
        let stats = monsterResponse.data;
        console.log(stats);
        let image = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb5KvnxoJPp-dQsyBcjbwnegRPIgKvuuEBNQ&s`;

        //image or no
        stats.image
          && (image = `https://www.dnd5eapi.co${stats.image}`);

        // action list
        let actions = stats.actions;
        let attacks = ``;
        for (let x = 0; x < actions.length; x++) {
          // multiattack
          if (actions[x].name === 'Multiattack') {
            attacks += `<p>
                <strong>Multiattack</strong> <br />
                <strong>Description:</strong> ${actions[x].desc} <br />
            </p>`;
          } else {
            // attack
            if (actions[x].attack_bonus) {
              attacks += `<p>
                <strong>Attack:</strong> ${actions[x].name} <br />
                <strong>To Hit:</strong> ${actions[x].attack_bonus} <br />
                <strong>Description:</strong> ${actions[x].desc} <br />
             </p>`;
            } else if (actions[x].dc) {
              // dc ability
              attacks += `<p>
                  <strong>Attack:</strong> ${actions[x].name} <br />
                  <strong>Save DC:</strong> ${actions[x].dc.dc_type.name} ${actions[x].dc.dc_value} <br />
                  <strong>Description:</strong> ${actions[x].desc} <br />
               </p>`;
            } else {
              // extra ability
              attacks += `<p>
                <strong>Attack:</strong> ${actions[x].name} <br />
                <strong>Description:</strong> ${actions[x].desc} <br />
             </p>`;
            }
          }
        }

        //add it to the list
        monsterResult.innerHTML += `
        <div class="monster-result" >
          <div class='flex-api-text'>
              <h3>${stats.name}</h3>
              <p>
                  <strong>Index:</strong> ${stats.index} <br />
                  <strong>Type:</strong> ${stats.type} <br />
                  <strong>Challenge Rating:</strong> ${stats.challenge_rating} <br /><br />

                  <strong>Size:</strong> ${stats.size} <br /><br />

                  <strong>Armor Class:</strong> ${stats.armor_class['0'].value} <br />
                  <strong>Hit Points:</strong> ${stats.hit_points} <br />
              </p>
          </div>
          <div class='flex-api-text'>
              ${attacks}
          </div>
          <div class='flex-api-image'>
            <img id="monsterImage" src=${image}>
          </div>
        </div>
    `;
      })
      .catch((error) => {
        monsterResult.innerText = 'Error fetching monster details.';
      });
  });
}
