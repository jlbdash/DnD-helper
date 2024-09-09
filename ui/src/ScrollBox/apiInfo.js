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
        let image = `https://www.dnd5eapi.co${stats.image}`;
        console.log(stats);

        //image or no
        if (!stats.image) {
          image =
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb5KvnxoJPp-dQsyBcjbwnegRPIgKvuuEBNQ&s';
        }

        const actions = stats.actions;
        console.log(actions);
        let attacks = ``;
        for (let x = 0; x < actions.length; x++) {
          if (actions[x].name === 'Multiattack') {
            attacks += `<p>
                <strong>Multiattack</strong> <br />
                <strong>Description:</strong> ${actions[x].desc} <br />
            </p>`;
          } else {
            if (actions[x].attack_bonus) {
              attacks += `<p>
                <strong>Attack:</strong> ${actions[x].name} <br />
                <strong>To Hit:</strong> ${actions[x].attack_bonus} <br />
                <strong>Description:</strong> ${actions[x].desc} <br />
             </p>`;
            } else if (actions[x].dc) {
                attacks += `<p>
                  <strong>Attack:</strong> ${actions[x].name} <br />
                  <strong>Save DC:</strong> ${actions[x].dc.dc_type.name} ${actions[x].dc.dc_value} <br />
                  <strong>Description:</strong> ${actions[x].desc} <br />
               </p>`;
              } else {
              attacks += `<p>
                <strong>Attack:</strong> ${actions[x].name} <br />
                <strong>Description:</strong> ${actions[x].desc} <br />
             </p>`;
            }
          }
        }

        // else if (actions[x].includes('dc')) {
        //     attacks += `<p>
        //         <strong>Attack:</strong> ${actions[x].name} <br />
        //         <strong>Save DC:</strong> ${actions[x].dc.dc_value} <br />
        //         <strong>Description:</strong> ${actions[x].desc} <br />
        //      </p>`;
        //   }

        //add it to the list
        monsterResult.innerHTML += `
        <div class="monster-result">
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
