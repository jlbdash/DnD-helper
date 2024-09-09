import axios from 'axios';
import scrollama from 'scrollama';

// ScrollyTelling steps
const scroller = scrollama();
scroller
  .setup({
    step: '.step',
    offset: 0.6,
    debug: false,
  })
  .onStepEnter((response) => {
    console.log(response);
    response.element.classList.add('active');
    response.element.classList.remove('inactive');
    document
      .getElementById(response.element.dataset.target)
      .setAttribute(
        response.element.dataset.value
      );
  })
  .onStepExit((response) => {
    console.log(response);
    response.element.classList.add('inactive');
    response.element.classList.remove('active');
    document
      .getElementById(response.element.dataset.target)
      .setAttribute(
        response.element.dataset.value
      );
  });

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
  let dataValue = ``;
  monsterResult.innerHTML = `<div class='flex-api-image'>
  <img id="monsterImage" src=${dataValue}>
</div>`;

  matchedMonster.forEach((monster) => {
    axios
      .get(`https://www.dnd5eapi.co${monster.url}`)
      .then((monsterResponse) => {
        // gather the info
        let stats = monsterResponse.data;
        console.log(stats);

        //image or no
        if (!stats.image) {
          dataValue =
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb5KvnxoJPp-dQsyBcjbwnegRPIgKvuuEBNQ&s';
        } else {
          dataValue = `https://www.dnd5eapi.co${stats.image}`;
        }

        // action list
        const actions = stats.actions;
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
        <div class="monster-result steps">
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
        <!-- You can display more monster details here -->
        </div>
    `;
      })
      .catch((error) => {
        monsterResult.innerText = 'Error fetching monster details.';
      });
  });
}
