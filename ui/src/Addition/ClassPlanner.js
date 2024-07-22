
// gives the compiled class array
export const classPlanner = async (classNumber, setIsClass) => {
  let x = 0;
  let classes = []
  while (x < classNumber) {
    let m = document.getElementById(`cClass${x + 1}`).value;
    let n = document.getElementById(`cLevel${x + 1}`).value;
    const combo = {
      className: m,
      classLevel: n
    };
    classes.push(combo);
    x++;
  }
  setIsClass(classes);
};
