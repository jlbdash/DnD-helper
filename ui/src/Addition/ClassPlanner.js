// gives the compiled class array
export const classPlanner = (
  classNumber,
  setCharacter,
  isUser,
  isName,
  isRace
) => {
  let x = 0;
  let classes = [];
  while (x < classNumber) {
    let m = document.getElementById(`cClass${x + 1}`).value;
    let n = document.getElementById(`cLevel${x + 1}`).value;
    const combo = {
      className: m,
      classLevel: n,
    };
    classes.push(combo);
    x++;
  }
//sets the character for the state
  setCharacter({
    username: isUser,
    character: [
      {
        id: 1,
        name: isName,
        class: classes,
        race: isRace,
        alive: true,
      },
    ],
  });
};
